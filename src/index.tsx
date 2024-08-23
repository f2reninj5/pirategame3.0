import React from 'react'
import ReactDOM, { type Container } from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const rootElement = document.getElementById('root')

if (rootElement === null) {
  throw new Error()
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as Container
)
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
