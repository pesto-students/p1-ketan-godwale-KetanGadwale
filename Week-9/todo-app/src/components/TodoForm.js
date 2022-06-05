import React, { useState } from 'react';

export default function TodoForm({ addTodo }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(input);
        setInput('');
    };
    return (
        <form className='todo-form' onSubmit={handleSubmit}>
            <input
                className='todo-input'
                placeholder='Add a todo'
                onChange={(e) => {
                    setInput(e.target.value);
                }}
                value={input}
            />
            <button className='todo-button' type='submit'>
                Add Todo
            </button>
        </form>
    );
}
