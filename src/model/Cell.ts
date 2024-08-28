import type Grid from './Grid'

const LETTERS: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export default class Cell {
  public grid: Grid
  public index: number
  public label: string
  public selected: boolean = false
  public highlighted: boolean = false

  constructor (grid: Grid, index: number) {
    this.grid = grid
    this.index = index

    const row: number = Math.floor(index / grid.width)
    const column: number = index % grid.width

    this.label = `${LETTERS[column]}${row + 1}`
  }
}
