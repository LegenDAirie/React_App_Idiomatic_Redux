import { createStore } from 'redux'
// import { loadState, saveState } from './localStorage'
// import throttle from 'lodash/throttle'
import todoAppReducer from './stateManagement/reducers/todoApp'

const promiseMiddleWare = (store) => (next) => (action) => {

  if (typeof action.then === 'function') {
    return action.then(next)
  }

  return next(action)
}

const logger = (store) => (next) => {
  if (!console.group) {
    return next
  }

  return (action) => {
    console.group(action.type)
    console.log('%c Old State: ', "color: grey", store.getState())
    console.log('%c Action: ', 'color: blue', action)
    const returnValue = next(action)
    console.log('%c New State: ', 'color: green', store.getState())
    console.groupEnd(action.type)

    return returnValue
  }
}

const wrapDispatchWithMiddleWares = (store, middleWares) => {
  middleWares.slice().reverse().forEach( middleWare => {
    store.dispatch = middleWare(store)(store.dispatch)
  })
}

const configureStore = () => {
  // const persistedState = loadState()
  // const store = createStore(todoAppReducer, persistedState)
  const store = createStore(todoAppReducer)
  const middleWares = [promiseMiddleWare]
  // store.subscribe( throttle( () => {
  //   saveState(
  //     { todos: store.getState().todos
  //     }
  //   )
  // }, 1000))

  if (process.env.NODE_ENV !== 'production') {
    middleWares.push(logger)
  }

  wrapDispatchWithMiddleWares(store, middleWares)

  return store
}

export default configureStore
