import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import todoAppReducer from './stateManagement/reducers/todoApp'
import { Provider } from 'react-redux'
import { loadState, saveState } from './localStorage'

const persistedState = loadState()

const store = createStore(todoAppReducer, persistedState)

store.subscribe( () => {
  saveState(store.getState())
})

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
)

// const Provider = React.createClass({
//
//   getChildContext () {
//     return {
//       store: this.props.store
//     }
//   },
//
//   render () {
//     return this.props.children
//   }
// })
//
// Provider.childContextTypes = {
//   store: React.PropTypes.object
// }
