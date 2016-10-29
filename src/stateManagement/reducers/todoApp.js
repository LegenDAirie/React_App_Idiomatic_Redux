import todos from './todos'
import visibilityFilter from './setVisibilityFilter'

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
  todos,
  visibilityFilter
})


export default todoApp
