import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { Button } from '..'

const NumpadButtons = styled('div')`
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius.small};
  overflow: hidden;
`

const NumpadRow = styled('div')`
  width: 100%;
  display: flex;
`

const NumpadButton = styled('div')`
  height: 7rem;
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

const Numpad = ({
  buttons,
  value,
  setValue,
  reduceValue,
  disabled = false,
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
    <div style={{ width: '100%' }}>
      <div style={{ margin: '0 0 1rem' }}>
        <input value={input || ''} readOnly={true} />
      </div>
      <NumpadButtons>
        {buttons.map((row) => (
          <NumpadRow key={row.toString()}>
            {row.map((key) => {
              const style = { width: `${100 / row.length}%` }
              return (
                <NumpadButton key={key} style={style}>
                  <Button
                    text={key.toString()}
                    onClick={() => press(key)}
                    disabled={disabled}
                  />
                </NumpadButton>
              )
            })}
          </NumpadRow>
        ))}
      </NumpadButtons>
    </div>
  )
}

Numpad.displayName = 'Numpad'
Numpad.propTypes = {
  buttons: propTypes.array,
  value: propTypes.string,
  setValue: propTypes.func,
  reduceValue: propTypes.func,
  disabled: propTypes.bool,
}

export default Numpad
