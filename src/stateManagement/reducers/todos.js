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
