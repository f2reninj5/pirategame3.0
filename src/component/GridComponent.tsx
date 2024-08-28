import React, { useContext } from 'react'
import './GridComponent.css'

import { GridActionType, GridContext } from '../context/GridContext'

function GridComponent (): React.JSX.Element {
  const [{ grid }, dispatch] = useContext(GridContext)

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
