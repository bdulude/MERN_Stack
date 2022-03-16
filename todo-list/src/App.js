import React, {useState} from 'react';
import './App.css';
import Input from './Components/Input';
import TodoList from './Components/TodoList';

function App() {

    const [todos, setTodos] = useState([
        // {name: "test1", done: false},
        // {name: "test2", done: true},
        // {name: "test3", done: false},
        // {name: "test4", done: false}
    ]);

    const newTodo = (todoName) => {
        const newTodo = {name: todoName, done: false}
        setTodos([...todos, newTodo]);
    }

    const updateTodo = (todoIdx) => {
        // It took me a long time to figure out
        // but I shot myself in the foot initializing this as an object
        // rather than an array...
        // const copyTodos = {...todos};
        const copyTodos = [...todos];
        copyTodos[todoIdx].done = !copyTodos[todoIdx].done;
        console.log(todoIdx);
        console.log(copyTodos);
        setTodos(copyTodos);
    }

    const deleteTodo = (todoIdx) => {
        const filtered = todos.filter((todo, idx) => todoIdx !== idx);
        setTodos(filtered);
    }

    return (
        <div className="App">
            <h1>To Do List</h1>
            <Input onNewTodo={newTodo}/>
            <TodoList 
                todoList={todos} 
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    );
}

export default App;
