import React from 'react'
import Todo from './Todo'
import { connect } from 'react-redux'
import { toggleTodo, recieveTodos } from './actionCreators'
import { withRouter } from 'react-router'
import { getVisibleTodos } from './stateManagement/reducers/todoApp'
import { fetchTodos } from './fakeApi'

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

let VisibleTodoList = React.createClass({

  componentDidMount () {
    this.updateTodos()
  },

  componentDidUpdate (prevProps) {
    if (prevProps.filter !== this.props.filter) {
      // this.updateTodos()
    }
  },

  updateTodos () {
    const { filter, recieveTodos } = this.props

    fetchTodos(filter).then( todos => {
      recieveTodos(filter, todos)
    })
  },

  render () {
    return <TodoList { ...this.props } />
  }
})

const mapStateToProps = (state, { params }) => {
  const filter = params.filter || 'all'

  return {
    todos: getVisibleTodos(state, filter),
    filter
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   onTodoClick: id => {
//     dispatch( toggleTodo(id) )
//   }
// })

VisibleTodoList = withRouter( connect(
  mapStateToProps,
  { onTodoClick: toggleTodo, recieveTodos }
  // mapDispatchToProps
)(VisibleTodoList) )

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
