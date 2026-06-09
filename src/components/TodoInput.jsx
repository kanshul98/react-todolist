import { useState } from "react";

export default function TodoInput(props){

    const {handleAddTodos, todoValue, setTodoValue} = props; // destructuring out that component from the prop

    return(
        <header>
            <input  value={todoValue} 
                    onChange={(e) => {setTodoValue(e.target.value)}} 
                    placeholder="enter to do..." />
                    
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('') // once the value has been added, replace it with empty string
            }}>Add</button>
        </header>
    )
}