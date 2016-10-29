import React from 'react'
import FilterLink from './filterLink'

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


const App = React.createClass({

  render () {
    const { dispatch, todos, visibilityFilter } = this.props
    const visibleTodos = getVisibleTodos(visibilityFilter, todos)

    return (
      <div>
        <input ref={ node => {
            this.input = node
          } }
        />

        <button onClick={ () => {
          dispatch(
            { type: 'ADD_TODO'
            , text: this.input.value
            , id: id++
            }
          )
          this.input.value = ''
        }}>
          Add Todo
        </button>

        <lu>
          { visibleTodos.map( todo => {
            return (
              <li key={ todo.id }
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={ () => {
                  console.log('dispatching toggle todo')
                  dispatch(
                    { type: 'TOGGLE_TODO'
                    , id: todo.id
                    }
                  )
                }}
              >
                { todo.text }
              </li>
            )
          } )}
        </lu>
        <p>
          Show:
          {' '}
          <FilterLink filter="SHOW_ALL"
            dispatch={ dispatch }
            currentFilter={ visibilityFilter }
          >
            All
          </FilterLink>
          {', '}
          <FilterLink filter="ACTIVE"
            dispatch={ dispatch }
            currentFilter={ visibilityFilter }
          >
            Active
          </FilterLink>
          {', '}
          <FilterLink filter="COMPLETED"
            dispatch={ dispatch }
            currentFilter={ visibilityFilter }
          >
            Completed
          </FilterLink>
        </p>


      </div>
    )
  }
})

export default App
