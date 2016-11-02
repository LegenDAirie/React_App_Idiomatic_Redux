import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import configureStore from './configureStore'
import { fetchTodos } from './fakeApi'

fetchTodos('all').then( todos => {
  console.log(todos)
})

const store = configureStore()

ReactDOM.render(
  <Root store={ store } />,
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
