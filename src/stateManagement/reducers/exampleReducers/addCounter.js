
const addCounter = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.value]

    case 'REMOVE':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]

    case 'INCREMENT':
      return [
        ...state.slice(0, action.index),
        state[action.index] + 1,
        ...state.slice(action.index + 1)
      ]

    default:
      state
  }
}

export default addCounter
