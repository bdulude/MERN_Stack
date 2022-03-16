import React, {useState} from 'react';
import { TodoItem } from './TodoItem';


const TodoList = (props) => {
    return (
        <div>
            {
                props.todoList.map( (todo, idx) => {
                    return <TodoItem 
                        key={idx}
                        name={todo.name}
                        done={todo.done}
                        idx={idx}
                        updateTodo={props.updateTodo}
                        deleteTodo={props.deleteTodo}
                    />
                })
            }
        </div>
    )
}

export default TodoList