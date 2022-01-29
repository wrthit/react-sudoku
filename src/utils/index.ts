import { Cell, CellState, CellValue } from '../types/cell'

export const createPuzzle = (): Cell[][] => {
  const cells = initCells()

  return cells
}

export const initCells = (): Cell[][] => {
  let cells: Cell[][] = []

  for (let row = 0; row < 9; row++) {
    cells.push([])
    for (let col = 0; col < 9; col++) {
      cells[row].push({
        value: CellValue.NONE,
        state: CellState.UNKNOWN,
      })
    }
  }

  return cells
}
