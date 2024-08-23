import React from 'react';
import './App.css';
import Panel from "./containers/Panel";
import Header from "./containers/Header";
import Footer from "./containers/Footer";

function App() {
    return (
        <main>
            <Header><p>hello</p></Header>
            <Panel></Panel>
            <Panel></Panel>
            <Panel></Panel>
            <Footer><p>goodbye</p></Footer>
        </main>
    );
}

export default App;
