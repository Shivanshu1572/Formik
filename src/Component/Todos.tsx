import React from "react";
import { userTodos } from "../store/todos";
import { useSearchParams } from "react-router-dom";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDeleteTodo } = userTodos();

    const [searchParams] = useSearchParams();
    let searchData = searchParams.get("todos");
    console.log(searchData,"searchDatasearchData");
    
  let filterData = todos;

  if(searchData === "active"){
    filterData = filterData.filter((task:any) => !task.completed)
  }

  if(searchData === "completed"){
    filterData = filterData.filter((task:any) => task.completed)
  }


  return (
    // <div>Todos</div>
    <>
      {filterData?.map((todo: any, index: any) => {
        return (
          <li key={index}>
            <input
              type="checkbox"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => toggleTodoAsCompleted(todo.id)}
            />
            <label htmlFor={`todo-${todo.id}`}> {todo.task} </label>

            {todo.completed && (
              <button type="button" onClick={() => handleDeleteTodo(todo.id)}>
                Delete
              </button>
            )}
          </li>
        );
      })}
    </>
  );
};

export default Todos;
