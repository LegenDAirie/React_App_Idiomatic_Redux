import React from 'react'
import Todo from './Todo'


const getVisibleTodos = (visibilityFilter, todos) => {
  switch (visibilityFilter) {
    case 'SHOW_ALL':
      return todos

    case 'ACTIVE':
      return todos.filter( todo => !todo.completed)

    case 'COMPLETED':
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

const VisibleTodoList = React.createClass({

  componentDidMount () {
    const { store } = this.context
    this.unsubscribe = store.subscribe( () => {
      this.forceUpdate()
    })
  },

  componentWillUnmount () {
    this.unsubscribe()
  },

  render () {
    const { store } = this.context
    const state = store.getState()

    return (
      <TodoList
        todos={ getVisibleTodos(state.visibilityFilter, state.todos) }
        onTodoClick={ id => {
          store.dispatch(
            { type: 'TOGGLE_TODO'
            , id
            }
          )
        }}
      >

      </TodoList>
    )
  }
})

VisibleTodoList.contextTypes = {
  store: React.PropTypes.object
}

export default VisibleTodoList
