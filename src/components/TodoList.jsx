import React from "react"
import TodoCard from "./TodoCard"

// the list generator function
// sets the todo items into an unordered list and renders a TodoCard for each item

function TodoList(props){

    const {todos} = props;

    return(
        <ul className="main">
            {todos.map((todo, todoIndex) => {
                return(
                    <TodoCard {...props} key={todoIndex} index={todoIndex}>
                        <p>{todo}</p> {/* this is going to be the children component in TodoCard */}
                    </TodoCard> // We are {...props} prop drilling here + adding index as another prop
                )
            })}
        </ul>
    )
}

export default TodoList
