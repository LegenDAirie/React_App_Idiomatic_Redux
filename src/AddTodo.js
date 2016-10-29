import React from 'react'
import store from './store'

let id = 0

const AddTodo = () => {

  let input

  return (
    <div>
      <input ref={ node => {
          input = node
        } }
      />

      <button onClick={ () => {
        store.dispatch(
          { type: 'ADD_TODO'
          , text: input.value
          , id: id++
          }
        )
        input.value = ''
      }}>
        Add Todo
      </button>
    </div>
  )
}

export default AddTodo
