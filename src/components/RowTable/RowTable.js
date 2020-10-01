import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { Preface } from '../Preface'

const RowTableContainer = styled('table')`
  width: 100%;

  thead th {
    font-weight: normal;
    text-align: left;
    line-height: 1;
    padding: 0 0 0.5rem;

    p {
      font-size: ${(props) => props.theme.fonts.sizes.xsmall};
    }
  }

  tbody tr {
    td {
      line-height: 1;
      vertical-align: middle;
      padding: 0.5rem 0;

      &:last-child {
        padding: 0;
        text-align: right;
      }
    }

    &:last-child td {
      padding-bottom: 0;
    }
  }
`

const RowTable = ({ headers, rows, widths, style = null }) => {
  return (
    <RowTableContainer style={style}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={header} style={{ width: `${widths[index] || 'auto'}` }}>
              <Preface>{header}</Preface>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <td key={index} style={{ width: `${widths[index] || 'auto'}` }}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </RowTableContainer>
  )
}

RowTable.displayName = 'RowTable'
RowTable.propTypes = {
  headers: propTypes.array,
  rows: propTypes.array,
  widths: propTypes.array,
  style: propTypes.object,
}

export default RowTable
