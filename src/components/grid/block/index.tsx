import React from 'react'
import styled from 'styled-components'
import { CellState, CellValue } from '../../../types/cell'

interface BlockProps {
  // row: number
  // col: number
  state: CellState
  value: CellValue
  // onClick(rowParam: number, colParam: number): (e: React.MouseEvent) => void
}

const StyledBlock = styled.div`
  border: thin solid black;
  width: 10rem;
  text-align: center;
  font-size: 3.5vw;

  &:nth-child(3n) {
    border-right: thick solid black;
  }

  &:first-child {
    border-left: thick solid black;
  }

  &:last-child {
    border-right: thick solid black;
  }
`

export const Block: React.FC<BlockProps> = ({ value }) => {
  return <StyledBlock>{value}</StyledBlock>
}
