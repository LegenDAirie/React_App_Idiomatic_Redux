import React from 'react'

var id = 0

const App = React.createClass({

  render () {
    const { dispatch, todos } = this.props

    return (
      <div>
        <input ref={ node => {
            this.input = node
          } }
        />

        <button onClick={ () => {
          dispatch(
            { type: 'ADD_TODO'
            , text: this.input.value
            , id: id++
            }
          )
          this.input.value = ''
        }}>
          Add Todo
        </button>

        <lu>
          {todos.map( todo => {
            return (
              <li key={ todo.id }>
                { todo.text }
              </li>
            )
          } )}
        </lu>


      </div>
    )
  }
})

export default App
