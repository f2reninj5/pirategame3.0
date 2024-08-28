import React, { useContext } from 'react'
import './App.css'
import PanelContainer from './container/PanelContainer'
import HeaderContainer from './container/HeaderContainer'
import FooterContainer from './container/FooterContainer'
import RulesComponent from './component/RulesComponent'
import GridHistoryComponent from './component/GridHistoryComponent'
import GridComponent from './component/GridComponent'
import PlayerShufflerComponent from './component/PlayerShufflerComponent'
import GridSelectorComponent from './component/GridSelectorComponent'
import { GridActionType, GridContext, GridContextProvider } from './context/GridContext'

function Main (): React.ReactElement {
  const [, dispatch] = useContext(GridContext)

  function handleResetGrid (): void {
    dispatch({
      type: GridActionType.Reset
    })
  }

  return (
    <main className="App">
      <HeaderContainer>
        <button>Feedback</button>
        <h1>Pirate Game (v3.0)</h1>
        <button onClick={() => {
          handleResetGrid()
        }}>Reset
        </button>
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
          href="https://www.apache.org/licenses/LICENSE-2.0">Apache License, Version 2.0</a>.</p>
      </FooterContainer>
    </main>
  )
}

export function App (): React.ReactElement {
  return (
    <GridContextProvider>
        <Main></Main>
    </GridContextProvider>
  )
}

export default App
