
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        text: action.text,
        id: action.id,
        completed: false
      }

    case 'TOGGLE_TODO':
      if (state.id === action.id) {
        return Object.assign({}, state, {
          completed: !state.completed
        })
      }
      return state

    default:
      return state
  }
}

export default todo
