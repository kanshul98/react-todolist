import React from "react"

// the function is responsible for rendering a single TodoCard-
// it renders its text, checkbox, edit button, and delete button
function TodoCard(props){

    const {children, handleDeleteTodos, handleEditTodos, handleCheckTodos, shiftTodoUp, shiftToDoDown, index, checked = false} = props; // Delete function is prop drilled from App > TodoList > TodoCard

    return(

        <div>
            <li className="todoItem">
                <input className="check-box" type="checkbox"
                       checked={checked}
                       onChange={() => {handleCheckTodos(index)}}/>

                    <p style={{textDecoration: checked ? 'line-through' : 'none'}}>{children}</p>
            {/* ============================================================================= */}
                <div className="actionsContainer"> {/* div container contains the two buttons inside list item */}
                    <button onClick={() => {
                        shiftTodoUp(index)
                    }}>
                        <i className="fa-regular fa-circle-up"></i>
                    </button>
            {/* ============================================================================= */}
                  <button onClick={() => {
                        shiftToDoDown(index)
                    }}>
                        <i className="fa-regular fa-circle-down"></i>
                    </button>
            {/* ============================================================================= */}
                    <button onClick={() => {
                        handleEditTodos(index)
                    }}>
                        <i className="fa-regular fa-pen-to-square"></i>
                    </button>
            {/* ============================================================================= */}
                    <button onClick={() => {
                        handleDeleteTodos(index)
                    }}>
                        <i class="fa-solid fa-delete-left"></i>
                    </button>
                    
                </div>
            </li>
        </div>
    )
}

export default TodoCard