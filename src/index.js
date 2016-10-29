import React from 'react'
import ReactDOM from 'react-dom'
import store from './store'
import App from './App'



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
