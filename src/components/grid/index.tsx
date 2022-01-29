import React, { FC, Children, useState } from 'react'
import styled, { css } from 'styled-components'
import { Block } from './block'
import { initCells } from '../../utils'
import { Cell } from '../../types/cell'

const StyledGrid = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    margin: 0.5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    height: fit-content;

    > * {
      display: flex;
      flex-direction: row;
      justify-content: center;

      &:first-of-type {
        border-top: thick solid black;
      }

      &:nth-child(3n) {
        border-bottom: thick solid black;
      }
    }
  `}
`

const Grid: FC = () => {
  const [cells] = useState<Cell[][]>(initCells())

  return (
    <StyledGrid data-cy="grid-container">
      {Children.toArray(
        cells.map((row, rowIndex) => (
          <div data-cy="div-row-container">
            {Children.toArray(
              row.map((cell, colIndex) => (
                <Block data-cy="block" state={cell.state} value={cell.value} />
              ))
            )}
          </div>
        ))
      )}
    </StyledGrid>
  )
}

export default Grid
