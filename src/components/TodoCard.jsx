import React from "react"

function TodoCard(props){

    const {children, handleDeleteTodos, handleEditTodos, index} = props; // Delete function is prop drilled from App > TodoList > TodoCard

    return(
            <li className="todoItem">
                {children} {/* {children} is a special BUILT-IN prop */}
                <div className="actionsContainer">
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
    )
}

export default TodoCard