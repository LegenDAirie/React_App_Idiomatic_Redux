import todoApp from './todoApp'
import deepFreeze from 'deep-freeze'

it('returns default state when state is undefined', () => {
  const stateBefore = undefined
  const action = {}
  const stateAfter = {
    todos: [],
    visibilityFilter: 'SHOW_ALL'
  }

  expect(
    todoApp(stateBefore, action)
  ).toEqual(stateAfter)
})

it('returns state when action is invalid', () => {
  const stateBefore = {
    todos: [
      { text: 'Learn Redux'
      , id : 0
      , completed: false
      }
    ],
    visibilityFilter: 'SHOW_ALL'
  }
  const action = {}
  const stateAfter = {
    todos: [
      { text: 'Learn Redux'
      , id : 0
      , completed: false
      }
    ],
    visibilityFilter: 'SHOW_ALL'
  }

  expect(
    todoApp(stateBefore, action)
  ).toEqual(stateAfter)
})

it('sets the visibility filter', () => {
  const stateBefore = {
    todos: [
      { text: 'Learn Redux'
      , id : 0
      , completed: false
      }
    ],
    visibilityFilter: 'SHOW_ALL'
  }
  const action = {
    type: 'SET_VISIBILITY_FILTER',
    filter: 'SHOW_ALL'
  }
  const stateAfter = {
    todos: [
      { text: 'Learn Redux'
      , id : 0
      , completed: false
      }
    ],
    visibilityFilter: 'SHOW_ALL'
  }

  expect(
    todoApp(stateBefore, action)
  ).toEqual(stateAfter)
})
