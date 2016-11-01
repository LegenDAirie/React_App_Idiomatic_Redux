import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { toggleTodo } from './actionCreators'


const getVisibleTodos = (visibilityFilter, todos) => {
  switch (visibilityFilter) {
    case 'all':
      return todos

    case 'active':
      return todos.filter( todo => !todo.completed)

    case 'completed':
      return todos.filter( todo => todo.completed)

    default:
      return todos
  }
}



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

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(ownProps.filter, state.todos)
})

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: id => {
    dispatch( toggleTodo(id) )
  }
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

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
