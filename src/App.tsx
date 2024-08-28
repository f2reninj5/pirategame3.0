import React, { createContext, useReducer } from 'react'
import './App.css'
import PanelContainer from './containers/PanelContainer'
import HeaderContainer from './containers/HeaderContainer'
import FooterContainer from './containers/FooterContainer'
import RulesComponent from './components/RulesComponent'
import GridHistoryComponent from './components/GridHistoryComponent'
import GridComponent from './components/GridComponent'
import PlayerShufflerComponent from './components/PlayerShufflerComponent'
import GridSelectorComponent from './components/GridSelectorComponent'
import Grid from './models/Grid'

export const enum GridActionType {
  Reset,
  Select
}

export type GridAction =
    | { type: GridActionType.Reset }
    | { type: GridActionType.Select, payload: { index: number } }

function gridReducer (state: { grid: Grid }, action: GridAction): { grid: Grid } {
  switch (action.type) {
    case GridActionType.Reset:
      return { grid: new Grid(7, 7) }
    case GridActionType.Select:
      state.grid.cells[action.payload.index].selected = !state.grid.cells[action.payload.index].selected
      return { grid: state.grid }
    default:
      return state
  }
}

export const GridContext = createContext<[{ grid: Grid }, dispatch: React.Dispatch<GridAction>]>([{ grid: new Grid(7, 7) }, () => undefined])

export function App (): React.JSX.Element {
  const [{ grid }, dispatch] = useReducer(gridReducer, { grid: new Grid(7, 7) })

  function handleResetGrid (): void {
    dispatch({
      type: GridActionType.Reset
    })
  }

  return (
    <main className="App">
        <GridContext.Provider value={[{ grid }, dispatch]}>
          <HeaderContainer>
            <button>Feedback</button>
            <h1>Pirate Game (v3.0)</h1>
            <button onClick={() => { handleResetGrid() }}>Reset</button>
          </HeaderContainer>
          <PanelContainer>
            <GridHistoryComponent></GridHistoryComponent>
            <RulesComponent></RulesComponent>
          </PanelContainer>
          <PanelContainer>
            <GridComponent></GridComponent>
          </PanelContainer>
          <PanelContainer>
            <GridSelectorComponent></GridSelectorComponent>
            <PlayerShufflerComponent></PlayerShufflerComponent>
          </PanelContainer>
          <FooterContainer><p>Copyright © 2024 Maks Nowak. Licensed under the <a
        href="https://www.apache.org/licenses/LICENSE-2.0">Apache License, Version 2.0</a>.</p></FooterContainer>
        </GridContext.Provider>
    </main>
  )
}

export default App
