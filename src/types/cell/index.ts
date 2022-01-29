export enum CellState {
  UNKNOWN,
  READ_ONLY,
}

export enum CellValue {
  NONE,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE,
}

export type Cell = {
  value: CellValue
  state: CellState
}
