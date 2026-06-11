import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([]); // this is our to-do list
  const [todoValue, setTodoValue] = useState(''); // we are putting it here so that both todolist and todoinput have access to it

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }
    
  function handleAddTodos(newTodoItem){
    const newTodoList = [...todos, { text: newTodoItem, checked: false }]
    persistData(newTodoList)
    setTodos(newTodoList);
  }
    
  function handleDeleteTodos(index){
    const newTodoList = todos.filter((todo, toDoIndex) => {
      return toDoIndex !== index
    }) // return when the selected to-do item's index is NOT equal to the index recieved
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleCheckTodos(index){
    const checkedTodoList = todos.map((todo, toDoIndex) => {
      if(toDoIndex === index) {
        return {...todo, checked: !todo.checked}
      }
      return todo
    })
    persistData(checkedTodoList)
    setTodos(checkedTodoList)
  }

  function handleEditTodos(index){
    const valueToBeEdited = todos[index].text;
    setTodoValue(valueToBeEdited);
    handleDeleteTodos(index);
    // here, we are editing the todo item by copying it back to-
    // -the placeholder area for editing, and deleting the list-item
    // that it was associated with in the todo list
  }

  // we are using this function to ensure that each time we refresh the website we are not losing the To-Do list
  // STANDARD FORMAT: useEffect(() => {}, [])
  useEffect(() => {
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  return (
      <>
        <TodoInput todoValue={todoValue} 
                   setTodoValue={setTodoValue}
                   handleAddTodos={handleAddTodos}/>
                   
        <TodoList handleDeleteTodos={handleDeleteTodos} 
                  handleEditTodos={handleEditTodos}
                  handleCheckTodos={handleCheckTodos}
                  todos={todos}/>
      </>
  )
}

export default App
