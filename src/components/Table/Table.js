import React from 'react'
import propTypes from 'prop-types'
import styled from '@emotion/styled'
import { Preface } from '../Preface'

const TableContainer = styled('table')`
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

  tbody {
    tr {
      border-bottom: 0.1rem solid ${(props) => props.theme.colors.border};
      td {
        line-height: 1;
        vertical-align: middle;
        padding: 1.5rem 0;

        &:first-of-type {
          text-align: left;
        }

        &:last-child {
          text-align: right;
        }
      }

      &:last-child {
        border-bottom: 0;
      }
    }
  }
`

const Table = ({ headers, rows, widths = {}, style = null }) => {
  return (
    <TableContainer style={style}>
      {headers && (
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={header} style={{ width: `${widths[index] || 'auto'}` }}>
                <Preface>{header}</Preface>
              </th>
            ))}
          </tr>
        </thead>
      )}
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
    </TableContainer>
  )
}

Table.displayName = 'Table'
Table.propTypes = {
  headers: propTypes.array,
  rows: propTypes.array,
  widths: propTypes.array,
  style: propTypes.object,
}

export default Table
