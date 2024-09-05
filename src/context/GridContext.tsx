import React, { createContext, useReducer } from 'react'
import Grid from '../model/Grid'

export const enum GridActionType {
  Reset,
  ToggleSelect
}

export type GridAction =
  | { type: GridActionType.Reset }
  | { type: GridActionType.ToggleSelect, payload: { index: number } }

export function gridReducer (state: { grid: Grid }, action: GridAction): { grid: Grid } {
  switch (action.type) {
    case GridActionType.Reset:
      return { grid: new Grid(7, 7) }
    case GridActionType.ToggleSelect:
      state.grid.toggleCellSelected(action.payload.index)
      return { grid: state.grid }
    default:
      return state
  }
}

export const GridContext = createContext<[{
  grid: Grid
}, dispatch: React.Dispatch<GridAction>]>([{ grid: new Grid(7, 7) }, () => undefined])

export function GridContextProvider ({ children }: { children: React.ReactNode }): React.ReactElement {
  const [{ grid }, dispatch] = useReducer(gridReducer, { grid: new Grid(7, 7) })

  return (
      <GridContext.Provider value={[{ grid }, dispatch]}>{children}</GridContext.Provider>
  )
}
