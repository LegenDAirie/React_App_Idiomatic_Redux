import React from 'react'
import VisibleTodoList from './TodoList'
import AddTodo from './AddTodo'
import Footer from './Footer'

const App = () => (
  <div>
    <AddTodo/>
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
