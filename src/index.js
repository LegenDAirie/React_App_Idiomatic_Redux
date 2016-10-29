import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import todoAppReducer from './stateManagement/reducers/todoApp'

ReactDOM.render(
  <App store={ createStore(todoAppReducer) } />,
  document.getElementById('root')
)
