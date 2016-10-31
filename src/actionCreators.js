export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER'
    , filter
  }
}

let id = 0

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: id++,
    text
  }
}
