import React, { useState } from 'react';

export default function TodoForm() {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput('');
    };
    return (
        <form className='todo-form'>
            <input
                className='todo-input'
                placeholder='Add a todo'
                onChange={(e) => {
                    setInput(e.target.value);
                    console.log(input);
                }}
            />
            <button
                className='todo-button'
                type='submit'
                onSubmit={handleSubmit}
            >
                Add
            </button>
        </form>
    );
}
