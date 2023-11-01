import { ReactNode, createContext, useContext, useState } from "react";

export type TodosProviderProps = {
  children: ReactNode;
};

export type Todos = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosContext = {
  Array: Todos[];
  handleAddToDo: (task: string) => void; // call signature
  toggleTodoAsCompleted: (id: string) => void;
  handleDeleteTodo: (id: string) => void;
};

export const todosContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todos[] | null>( () => {
        try{
            const newTodos = localStorage.getItem("todos") || "[]"
            return JSON.parse(newTodos) as Todos[]
        } catch (error) {
            return []
        }
    }
  );

  const handleAddToDo = (task: string) => {
    setTodos((prev) => {
      const newTodos: Todos[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      console.log(prev, "dddd", newTodos);
      // console.log(newTodos);
        localStorage.setItem("todos",JSON.stringify(newTodos))
      return newTodos;
    });
  };

  const toggleTodoAsCompleted = (id: string) => {
    setTodos((prev) => {
      let newTodos = prev?.map((ele) => {
        if (ele.id === id) {
          return { ...ele, completed: !ele.completed };
        }
        return ele;
      });
      localStorage.setItem("todos",JSON.stringify(newTodos))

      return newTodos;
    });
  };

  // Delete
  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => {
      let newTodos = prev?.filter((filterTodo) => filterTodo.id !== id);
      localStorage.setItem("todos",JSON.stringify(newTodos))
     
      return newTodos;
    });
  };

  return (
    <todosContext.Provider
      value={{ todos, handleAddToDo, toggleTodoAsCompleted, handleDeleteTodo }}
    >
      {children}
    </todosContext.Provider>
  );
};

// consumer
export const userTodos = () => {
  const todosConsumer = useContext(todosContext);
  if (!todosConsumer) {
    throw new Error("useTodos used outside of Provider");
  }
  return todosConsumer;
};
