import React from 'react';
import { FiDelete, FiCheck } from 'react-icons/fi';

export default function TodoItem({ todo, removeTodo, markTodo }) {
    return (
        <div
            key={todo.id}
            className={todo.completed ? 'todo-item completed' : 'todo-item'}
        >
            {todo.name}
            <div className='icon-container'>
                <FiDelete
                    className='icon'
                    onClick={() => removeTodo(todo.id)}
                    style={{ marginRight: '1rem' }}
                />
                <FiCheck className='icon' onClick={() => markTodo(todo.id)} />
            </div>
        </div>
    );
}
