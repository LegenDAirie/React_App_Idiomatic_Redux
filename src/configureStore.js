import { createStore } from 'redux'
// import { loadState, saveState } from './localStorage'
// import throttle from 'lodash/throttle'
import todoAppReducer from './stateManagement/reducers/todoApp'

const configureStore = () => {

  // const persistedState = loadState()

  // const store = createStore(todoAppReducer, persistedState)

  const store = createStore(todoAppReducer)

  // store.subscribe( throttle( () => {
  //   saveState(
  //     { todos: store.getState().todos
  //     }
  //   )
  // }, 1000))

  const logDispatch = (store) => {
    const rawDispatch = store.dispatch

    if (!console.group) {
      return rawDispatch
    }

    return (action) => {
      console.group(action.type)
      console.log('%c Old State: ', "color: grey", store.getState())
      console.log('%c Action: ', 'color: blue', action)
      const returnValue = rawDispatch(action)
      console.log('%c New State: ', 'color: green', store.getState())
      console.groupEnd(action.type)

      return returnValue
    }
  }

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = logDispatch(store)
  }

  return store
}

export default configureStore
