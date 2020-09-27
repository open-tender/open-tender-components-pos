import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { Button } from '..'

const KeypadButtons = styled('div')`
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius.small};
  overflow: hidden;
`

const KeypadRow = styled('div')`
  width: 100%;
  display: flex;
`

const KeypadButton = styled('div')`
  height: ${(props) => props.theme.layout.bigButtonHeight};
  padding: 0 0.1rem 0.1rem 0;

  & button {
    width: 100%;
    height: 100%;
    padding: ${(props) => props.theme.layout.gutter};
    font-size: ${(props) => props.theme.fonts.sizes.large};
    ${(props) => props.theme.fonts.monoStyle}
  }

  & button:disabled {
    opacity: 1;
  }
`

const Keypad = ({
  buttons,
  value,
  setValue,
  reduceValue,
  disabled = false,
  width = '100%',
  includeSpacebar = false,
  buttonColor = 'primary',
  textAlign = 'left',
}) => {
  const [input, setInput] = useState(value || '')
  const [clear, setClear] = useState(value ? true : false)

  useEffect(() => {
    setInput(value)
  }, [value])

  const press = (key) => {
    setClear(false)
    const reducedValue = reduceValue(input, key, clear)
    setInput(reducedValue)
    if (setValue) setValue(reducedValue)
  }

  return (
    <div style={{ width: width }}>
      <div style={{ margin: '0 0 1rem' }}>
        <input
          value={input || ''}
          readOnly={true}
          style={{ textAlign: textAlign }}
        />
      </div>
      <KeypadButtons>
        {buttons.map((row) => (
          <KeypadRow key={row.toString()}>
            {row.map((key) => {
              const style = { width: `${100 / row.length}%` }
              return (
                <KeypadButton key={key} style={style}>
                  <Button
                    text={key.toString()}
                    onClick={() => press(key)}
                    color={buttonColor}
                    disabled={disabled}
                  />
                </KeypadButton>
              )
            })}
          </KeypadRow>
        ))}
        {includeSpacebar && (
          <KeypadRow>
            <KeypadButton style={{ width: `${(8 / 9) * 100}%` }}>
              <Button
                text="Space"
                onClick={() => press('Space')}
                color={buttonColor}
                disabled={disabled}
              />
            </KeypadButton>
            <KeypadButton style={{ width: `${(1 / 9) * 100}%` }}>
              <Button
                text="."
                onClick={() => press('.')}
                color={buttonColor}
                disabled={disabled}
              />
            </KeypadButton>
          </KeypadRow>
        )}
      </KeypadButtons>
    </div>
  )
}

Keypad.displayName = 'Keypad'
Keypad.propTypes = {
  buttons: propTypes.array,
  value: propTypes.string,
  setValue: propTypes.func,
  reduceValue: propTypes.func,
  disabled: propTypes.bool,
  width: propTypes.string,
  includeSpacebar: propTypes.bool,
  buttonColor: propTypes.string,
  textAlign: propTypes.string,
}

export default Keypad
