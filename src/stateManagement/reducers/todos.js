import todoReducer from './todo'

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todoReducer(undefined, action)
      ]

    case 'TOGGLE_TODO':
      return state.map( todo => todoReducer(todo, action))

    default:
      return state
  }
}

export default todos


export const getVisibleTodos = (state, visibilityFilter) => {
  switch (visibilityFilter) {
    case 'all':
      return state

    case 'active':
      return state.filter( todo => !todo.completed)

    case 'completed':
      return state.filter( todo => todo.completed)

    default:
      return state
  }
}
