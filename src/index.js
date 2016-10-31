import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import todoAppReducer from './stateManagement/reducers/todoApp'
import { Provider } from 'react-redux'

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

ReactDOM.render(
  <Provider store={ createStore(todoAppReducer) }>
    <App />
  </Provider>,
  document.getElementById('root')
)
