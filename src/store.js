import { createStore } from 'redux'
import todoAppReducer from './stateManagement/reducers/todoApp'

const store = createStore(todoAppReducer)

export default store
