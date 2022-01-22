import { useState } from "react"
import Form from "./Components/Form"
import Header from "./Components/Header"
import List from "./Components/List"

function App() {
  const [todos, setTodos] = useState([{}])
  return (
    <div className="App">
      <Header />
      <Form setTodo={setTodos} len={todos.length} />
      <List todoList={todos} setTodo={setTodos} />
    </div>
  )
}

export default App
