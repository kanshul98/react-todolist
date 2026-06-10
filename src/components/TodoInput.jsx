import { useState } from "react";

export default function TodoInput(props){

    const {handleAddTodos, todoValue, setTodoValue} = props; // destructuring out that component from the prop

    return(
        <header>
            <input  value={todoValue} 
                    onChange={(e) => {setTodoValue(e.target.value)}} 
                    onKeyDown={(e) => {
                        if(e.key === 'Enter' && todoValue !== ''){
                            handleAddTodos(todoValue)
                            setTodoValue('')
                            }
                        } 
                    }
                    placeholder="enter to do..." /> {/* onKeyDown will basically take the input if the user hits Enter after writing the todolist */}
                    
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('') // once the value has been added, replace it with empty string
            }}>Add</button>
        </header>
    )
}
