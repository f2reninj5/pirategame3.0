import React, { useContext } from 'react'
import { GridContext } from '../context/GridContext'

function GridHistoryComponent (): React.ReactElement {
  const [{ grid }] = useContext(GridContext)
  const recentHistory = grid.history.slice(Math.max(0, grid.history.length - 6), grid.history.length).reverse()
  const cells = []

  for (let i = 0; i < recentHistory.length; i++) {
    const cell = recentHistory[i]

    cells.push(
      <div key={i}>
        <p>{cell.label}</p>
      </div>
    )
  }

  for (let i = recentHistory.length; i < 6; i++) {
    cells.push(
      <div key={i}>
        <p>pad</p>
      </div>
    )
  }

  return (
    <div>
      <h4>Recent Squares</h4>
      {cells}
    </div>
  )
}

export default GridHistoryComponent
