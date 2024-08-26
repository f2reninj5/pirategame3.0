import React from 'react'
import './App.css'
import PanelContainer from './containers/PanelContainer'
import HeaderContainer from './containers/HeaderContainer'
import FooterContainer from './containers/FooterContainer'
import RulesComponent from './components/RulesComponent'
import GridHistoryComponent from './components/GridHistoryComponent'
import GridComponent from './components/GridComponent'
import PlayerShufflerComponent from './components/PlayerShufflerComponent'
import GridSelectorComponent from './components/GridSelectorComponent'

export function App (): React.JSX.Element {
  return (
    <main className="App">
      <HeaderContainer>
        <button>Feedback</button>
        <h1>Pirate Game (v3.0)</h1>
        <button>Reset</button>
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
    </main>
  )
}

export default App
