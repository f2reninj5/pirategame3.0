import React, { useReducer } from 'react'
import Grid from '../models/Grid'

const enum GridActionType {
  Reset,
  Select
}

type GridAction =
  | { type: GridActionType.Reset }
  | { type: GridActionType.Select, payload: { index: number } }

function gridReducer (grid: Grid, action: GridAction): Grid {
  switch (action.type) {
    case GridActionType.Reset:
      return new Grid(7, 7)
    case GridActionType.Select:
      grid.cells[action.payload.index].selected = true
      return grid
    default:
      return grid
  }
}

function GridComponent (): React.JSX.Element {
  const [grid, dispatch] = useReducer(gridReducer, new Grid(7, 7))

  function handleSelectCell (index: number): void {
    dispatch({
      type: GridActionType.Select,
      payload: { index }
    })
  }

  const cells = []

  console.log(grid)

  for (const cell of grid.cells) {
    cells.push(
      <div onClick={() => {
        handleSelectCell(cell.index)
      }} key={cell.index}>
        <p>{cell.label}</p>
      </div>
    )
  }

  return (
    <div>
      {cells}
    </div>
  )
}

export default GridComponent
