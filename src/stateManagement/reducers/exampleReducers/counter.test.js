import reducer from './counter'

it('returns new incremented state', () => {
  const state = 0
  const action = { type: 'INCREMENT' }
  expect(
    reducer(state, action)
  ).toEqual(1)

  const state2 = 2
  const action2 = { type: 'INCREMENT' }
  expect(
    reducer(state2, action2)
  ).toEqual(3)
})

it('returns new decremented state', () => {
  const state = 3
  const action = { type: 'DECREMENT' }
  expect(
    reducer(state, action)
  ).toEqual(2)

  const state2 = 0
  const action2 = { type: 'DECREMENT' }
  expect(
    reducer(state2, action2)
  ).toEqual(-1)
})

it('returns the state if action type is invalid', () => {
  const state = 2
  const action = { type: 'FEED_CAT' }
  expect(
    reducer(state, action)
  ).toEqual(2)

  const state2 = 5
  const action2 = {}
  expect(
    reducer(state2, action2)
  ).toEqual(5)
})

it('returns the default state if state is undefined', () => {
  const state = undefined
  const action = {}
  expect(
    reducer( state, action)
  ).toEqual(0)
})
