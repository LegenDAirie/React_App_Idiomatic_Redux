import todoReducer from './todo'
import { combineReducers } from 'redux'

const byID = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    case 'TOGGLE_TODO':
      return {
        ...state,
        [action.id]: todoReducer(state[action.id], action)
      }

    default:
      return state
  }
}

const allIDs = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.id
      ]

    default:
      return state
  }
}

const todos = combineReducers({ byID, allIDs })

export default todos


const getAllTodos = (state) =>
  state.allIDs.map( id => state.byID[id])

export const getVisibleTodos = (state, visibilityFilter) => {
  const allTodos = getAllTodos(state)
  switch (visibilityFilter) {
    case 'all':
      return allTodos

    case 'active':
      return allTodos.filter( todo => !todo.completed)

    case 'completed':
      return allTodos.filter( todo => todo.completed)

    default:
      return state
  }
}
