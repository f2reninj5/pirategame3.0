import React from 'react'
import './App.css'
import Panel from './containers/Panel'
import Header from './containers/Header'
import Footer from './containers/Footer'
import Rules from './components/Rules'
import GridHistory from './components/GridHistory'
import Grid from './components/Grid'
import PlayerShuffler from './components/PlayerShuffler'
import GridSelector from './components/GridSelector'

function App (): React.JSX.Element {
  return (
    <main className="App">
      <Header>
        <button>Feedback</button>
        <h1>Pirate Game (v3.0)</h1>
        <button>Reset</button>
      </Header>
      <Panel>
        <GridHistory></GridHistory>
        <Rules></Rules>
      </Panel>
      <Panel>
        <Grid></Grid>
      </Panel>
      <Panel>
        <GridSelector></GridSelector>
        <PlayerShuffler></PlayerShuffler>
      </Panel>
      <Footer><p>Copyright © 2024 Maks Nowak. Licensed under the <a
        href="https://www.apache.org/licenses/LICENSE-2.0">Apache License, Version 2.0</a>.</p></Footer>
    </main>
  )
}

export default App
