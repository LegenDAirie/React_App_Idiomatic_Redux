import addCounter from './addCounter'
import deepFreeze from 'deep-freeze'

it('ADD does not mutate state', () => {
  const stateBefore = []
  const stateAfter = [0]
  const action = { type: 'ADD', value: 0 }

  deepFreeze(stateBefore)

  expect(
    addCounter( stateBefore, action )
  ).toEqual( stateAfter )
})

it('REMOVE does not mutate state', () => {
  const stateBefore = [10, 20, 30]
  const stateAfter = [10, 30]
  const action = { type: 'REMOVE', index: 1 }

  deepFreeze(stateBefore)

  expect(
    addCounter( stateBefore, action )
  ).toEqual( stateAfter )
})

it('increment counter without mutation', () => {
  const stateBefore = [10, 20, 30]
  const stateAfter = [10, 21, 30]
  const action = { type: 'INCREMENT', index: 1 }

  deepFreeze(stateBefore)

  expect(
    addCounter( stateBefore, action )
  ).toEqual( stateAfter )
})
