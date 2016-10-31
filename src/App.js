import React from 'react'
import VisibleTodoList from './TodoList'
import AddTodo from './AddTodo'
import Footer from './Footer'

const App = ({ store }) => (
  <div>
    <AddTodo store={ store } />
    <VisibleTodoList store={ store } />
    <Footer store={ store } />
  </div>
)

export default App
