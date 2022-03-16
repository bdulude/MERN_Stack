import React from 'react'

export const TodoItem = (props) => {
    return (
        <div style={{marginBottom: 10}} >
            {
                props.done ? 
                <label htmlFor="doneCheck" style={{textDecoration: "line-through"}}>{props.name}</label> :
                <label htmlFor="doneCheck">{props.name}</label>
            }
            <input 
                name="doneCheck"
                type="checkbox"
                style={{marginRight: 10}}
                checked={props.done}
                onChange={() => props.updateTodo(props.idx)}
            />
            <button onClick={() => props.deleteTodo(props.idx)}>Delete</button>
        </div>
    )
}
