import React from 'react';
import './App.css';
import Panel from "./containers/Panel";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Rules from "./components/Rules";

function App() {
    return (
        <main className="App">
            <Header>
                <button>Feedback</button>
                <h1>Pirate Game</h1>
                <button>Reset</button>
            </Header>
            <Panel>
                <Rules></Rules>
                
            </Panel>
            <Panel></Panel>
            <Panel></Panel>
            <Footer><p>Copyright © 2024 Maks Nowak. Licensed under the <a
                href="https://www.apache.org/licenses/LICENSE-2.0">Apache License, Version 2.0</a>.</p></Footer>
        </main>
    );
}

export default App;
