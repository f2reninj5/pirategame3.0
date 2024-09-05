import Cell from './Cell'

export default class Grid {
  public width: number
  public height: number
  public cells: Cell[] = []
  public history: Cell[] = []

  constructor (width: number, height: number) {
    this.width = width
    this.height = height

    for (let i = 0; i < width * height; i++) {
      this.cells.push(new Cell(this, i))
    }
  }

  public selectCell (index: number): void {
    const cell = this.cells[index]
    cell.selected = true
    this.history.push(cell)
  }

  public deselectCell (index: number): void {
    const cell = this.cells[index]
    cell.selected = false
    this.history = this.history.filter(c => c !== cell)
  }

  public toggleCellSelected (index: number): void {
    const cell = this.cells[index]
    if (cell.selected) {
      this.deselectCell(index)
    } else {
      this.selectCell(index)
    }
  }
}
