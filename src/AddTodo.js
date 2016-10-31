import React from 'react'
import { connect } from 'react-redux'

let id = 0

let AddTodo = dispatch => {

  let input

  return (
    <div>
      <input ref={ node => {
          input = node
        } }
      />

      <button onClick={ () => {
        dispatch(
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

// AddTodo = connect(
//   mapStateToProps: state => ({}), // doesn't need props
//   mapDispatchToProps: dispatch => ({ dispatch }) // only needs dispatch
// )(AddTodo)

// AddTodo = connect(
//   null, // Null tells connect there is no ned to subscribe to the store
//   null // just passing dispatch is common, passing null auto passes dispatch as prop
// )(AddTodo)

AddTodo = connect()(AddTodo) // if only dispatch is needed pass in nothing

export default AddTodo
