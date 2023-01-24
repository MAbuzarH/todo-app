
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
"use client"
import styles from './page.module.css'

import { useState } from 'react';

const TodoList = () => {
    // state to store the list of todos
    let currentTime = new Date().toLocaleTimeString();
     

    const [todos,setTodos] = useState([{id:1, text: "Task 1", completed:false ,currentTime:"5:00 PM "},
    {id:2, text: "Task 2", completed:false, currentTime:"5 : 30 PM "}]);

    // function to handle adding new todos to the list
    const handleAddTodo = (text) => {
        if(text !== ""){
            const newTodo = {
                id: todos.length + 1,
                text,
                currentTime,
                completed: false
            };
            setTodos([...todos, newTodo]);
        }
        else{
            alert("pleas Enter your Task");
        }
       
    }

    // function to handle completing a todo
    const handleCompleteTodo = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    // function to handle deleting a todo
    const handleDeleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
    }

    return (
        <div className={styles.main}>
            <h1>Todo List</h1>
            <ul className={styles.listI}>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span className={styles.textspan}
                            onClick={() => handleCompleteTodo(todo.id)}
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                        >
                            {todo.text}
                        </span>
                        <span className={styles.timespan}>
                            {todo.currentTime}
                        </span>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <form className={styles.inputI} onSubmit={(e) => {
                e.preventDefault();
                const text = e.target.elements.text.value;
                handleAddTodo(text);
                e.target.elements.text.value = '';

            }}>
                <input type="text" name="text" placeholder="Add new todo" />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}

export default TodoList;


