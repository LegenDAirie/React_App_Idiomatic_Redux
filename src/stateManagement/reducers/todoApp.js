import todos, * as fromTodos from './todos'

// import { combineReducers } from 'redux'
const combineReducers = reducers => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](state[key], action)

        return nextState
      }, {}
    )
  }
}

// const todoApp = (state = {}, action) => {
//   return {
//     todos: todosReducer(state.todos, action),
//     visibilityFilter: setVisibilityFilter(state.visibilityFilter, action)
//   }
// }
const todoApp = combineReducers({
  todos
})


export default todoApp

export const getVisibleTodos = (state, filter) => (
  fromTodos.getVisibleTodos(state.todos, filter)
)
