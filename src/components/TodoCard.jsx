import React from "react"

function TodoCard(props){

    const {children, handleDeleteTodos, handleEditTodos, handleCheckTodos, index, checked = false} = props; // Delete function is prop drilled from App > TodoList > TodoCard

    return(

        <div>
            <li className="todoItem">
                <input className="check-box" type="checkbox"
                       checked={checked}
                       onChange={() => {handleCheckTodos(index)}}/>

                    <p style={{textDecoration: checked ? 'line-through' : 'none'}}>{children}</p>

                <div className="actionsContainer"> {/* div container contains the two buttons inside list item */}
                    <button onClick={() => {
                        handleEditTodos(index)
                    }}>
                        <i className="fa-regular fa-pen-to-square"></i>
                    </button>
                    
                    <button onClick={() => {
                        handleDeleteTodos(index)
                    }}>
                        <i className="fa-solid fa-trash"></i>
                    </button>
                    
                </div>
            </li>
        </div>
    )
}

export default TodoCard