import todos from './todos'
import deepFreeze from 'deep-freeze'

it('Adds a todo', () => {
  const stateBefore = []
  const action = {
    type: 'ADD_TODO',
    text: 'Learn Redux',
    id: 0
  }
  const stateAfter = [
    { text: 'Learn Redux'
    , id : 0
    , completed: false
    }
  ]

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter)
})

it('Returns state when action is invalid', () => {
  const stateBefore = []
  const action = {}
  const stateAfter = []

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter)
})

it('Returns default state when state is undefined', () => {
  const stateBefore = undefined
  const action = {}
  const stateAfter = []

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter)
})

it('Toggles specified todo', () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: false
    }
  ]
  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  }
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: true
    }
  ]

  deepFreeze(stateBefore)
  deepFreeze(action)

  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter)
})
