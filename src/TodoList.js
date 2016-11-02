import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { toggleTodo } from './actionCreators'
import { withRouter } from 'react-router'
import { getVisibleTodos } from './stateManagement/reducers/todoApp'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    { todos.map( todo => (
      <Todo key={ todo.id }
        { ...todo }
        onClick={ () => onTodoClick(todo.id) }
      />

    )) }
  </ul>
)

const mapStateToProps = (state, { params }) => ({
  todos: getVisibleTodos(state, params.filter || 'all')
})

// const mapDispatchToProps = (dispatch) => ({
//   onTodoClick: id => {
//     dispatch( toggleTodo(id) )
//   }
// })

const VisibleTodoList = withRouter( connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
  // mapDispatchToProps
)(TodoList) )

// const VisibleTodoList = React.createClass({
//
//   componentDidMount () {
//     const { store } = this.context
//     this.unsubscribe = store.subscribe( () => {
//       this.forceUpdate()
//     })
//   },
//
//   componentWillUnmount () {
//     this.unsubscribe()
//   },
//
//   render () {
//     const { store } = this.context
//     const state = store.getState()
//
//     return (
//       <TodoList
//         todos={ getVisibleTodos(state.visibilityFilter, state.todos) }
//         onTodoClick={ id => {
//           store.dispatch(
//             { type: 'TOGGLE_TODO'
//             , id
//             }
//           )
//         }}
//       >
//
//       </TodoList>
//     )
//   }
// })
//
// VisibleTodoList.contextTypes = {
//   store: React.PropTypes.object
// }

export default VisibleTodoList
