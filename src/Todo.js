import React from 'react'

const Todo = ({ text, onClick, completed }) => (
  <li
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
    onClick={ onClick }
  >
    { text }
  </li>
)

export default Todo
