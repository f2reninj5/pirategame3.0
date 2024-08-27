import React from 'react'
import type Grid from '../models/Grid'
import './GridComponent.css'
import { type GridAction, GridActionType } from '../App'

function GridComponent ({ grid, dispatch }: { grid: Grid, dispatch: React.Dispatch<GridAction> }): React.JSX.Element {
  function handleSelectCell (index: number): void {
    dispatch({
      type: GridActionType.Select,
      payload: { index }
    })
  }

  const cells = []

  for (const cell of grid.cells) {
    cells.push(
      <div onClick={() => {
        handleSelectCell(cell.index)
      }} key={cell.index} className={cell.selected ? 'selected' : ''}>
        <p>{cell.label}</p>
      </div>
    )
  }

  return (
    <div className="grid" style={{ gridTemplateColumns: `repeat(${grid.width}, 1fr)` }}>
      {cells}
    </div>
  )
}

export default GridComponent
