import React from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Footer from './Footer'

var id = 0


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


const App = ({ dispatch, todos, visibilityFilter }) => {

    const visibleTodos = getVisibleTodos(visibilityFilter, todos)

    return (
      <div>

        <AddTodo
          onAddClick={ text => {
            dispatch(
              { type: 'ADD_TODO'
              , text
              , id: id++
              }
            )
          }}
        />

        <TodoList todos={ visibleTodos }
          onTodoClick={ id => {
            dispatch(
              { type: 'TOGGLE_TODO'
              , id
              }
            )
          }}
        />

      <Footer />


      </div>
    )
}

export default App
