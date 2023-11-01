import { useState } from "react"
import { userTodos } from "../store/todos"

const AddtoCart = () => {
    const [todo, setTodo] = useState('')
    const {handleAddToDo} = userTodos()
const handleFormSubmit = (e:any) => {
    e.preventDefault()
    handleAddToDo(todo)
    setTodo("")
}


  return (
    <>
    <h1>React Todo App + Typescript</h1>

   <form onSubmit={handleFormSubmit}>
    <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
    <button type="submit">Add</button>
   </form>
    </>
  )
}

export default AddtoCart