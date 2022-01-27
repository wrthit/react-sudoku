import React, { FC, Children } from 'react'
import styled, { css } from 'styled-components'
import { Block } from './block'

const Sudoku = styled.div`
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
  return (
    <Sudoku data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <div data-cy="div-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block data-cy="block">5</Block>
              ))
            )}
          </div>
        ))
      )}
    </Sudoku>
  )
}

export default Grid
