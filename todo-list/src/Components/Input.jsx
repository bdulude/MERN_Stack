import React, {useState} from 'react'

const Input = (props) => {
    const [todo, setTodo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewTodo(todo);
    }

    return (
        <form onSubmit={ handleSubmit } style={{marginBottom: 10}}>
            <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo}  style={{marginRight: 10}}/>
            <input type="submit" value="Add" />
        </form>
    )
}

export default Input