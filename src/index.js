import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import todoAppReducer from './stateManagement/reducers/todoApp'
import App from './App'

const store = createStore(todoAppReducer)

const render = () => {
  ReactDOM.render(
    <App { ...store.getState() }
      dispatch={ store.dispatch }
    />,
    document.getElementById('root')
  )
}


store.subscribe(render)
render()
