import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import DATA from './components/data'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={DATA} />
  </React.StrictMode>,
)
