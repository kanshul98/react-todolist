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
    const newTodoList = [{text: newTodoItem, checked: false}, ...todos] // add in todos a new OBJECT which 1) has text newTodoItem, and 2) has checked status as false
    persistData(newTodoList)
    setTodos(newTodoList); // state change to impute new list into todo
  }

  function handleWipeList(){
    setTodos([])
  } // NEW CODE !!!!!!!!

  function handleDeleteTodos(index){
    const newTodoList = todos.filter((todo, toDoIndex) => {
      return toDoIndex !== index
    }) // return true/false when the selected index is/is-not equal to the toDoIndex
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleCheckTodos(index){

    const checkedTodoList = todos.map((todo, toDoIndex) => {
      if(toDoIndex === index) {
        return {...todo, checked: !todo.checked} // !todo.checked basically toggles the status checked/unchecked and vice-versa
      }
      return todo
    })
    
    // this next section merely pushes the checked todo item to the bottom of the list
    checkedTodoList.sort((a,b) => 
      Number(a.checked) - Number(b.checked)
    );

    // then we just finally assign our updated list to setTodos
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

  function shiftTodoUp(index){
    const newArray = [...todos];
    if(index > 0 && index < todos.length){
      [newArray[index-1], newArray[index]] = [newArray[index], newArray[index-1]]
    }
    setTodos(newArray)
  }

  function shiftToDoDown(index){
    const newArray = [...todos];
    if(index >= 0 && index < todos.length-1){
      [newArray[index+1], newArray[index]] = [newArray[index], newArray[index+1]]
    }
    setTodos(newArray)
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
                   handleAddTodos={handleAddTodos}
                   handleWipeList={handleWipeList}/>
                   
        <TodoList handleDeleteTodos={handleDeleteTodos} 
                  handleEditTodos={handleEditTodos}
                  handleCheckTodos={handleCheckTodos}
                  todos={todos}
                  shiftTodoUp={shiftTodoUp}
                  shiftToDoDown={shiftToDoDown}/>
      </>
  )
}

export default App
