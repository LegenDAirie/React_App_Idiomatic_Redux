export const setVisibilityFilter = filter => (
  { type: 'SET_VISIBILITY_FILTER'
  , filter
  }
)

var id = 0

export const addTodo = text => (
  { type: 'ADD_TODO'
  , id: id++
  , text
  }
)

export const toggleTodo = id => (
  { type: 'TOGGLE_TODO'
  , id
  }
)
