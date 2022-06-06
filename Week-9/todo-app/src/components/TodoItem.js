import React from 'react';
import { FiDelete, FiCheck } from 'react-icons/fi';

export default function TodoItem({ todo, removeTodo, markTodo }) {
    return (
        <div key={todo.id} className='todo-item'>
            {todo.name}
            <FiDelete className='icon' onClick={() => removeTodo(todo.id)} />
            <FiCheck className='icon' onClick={() => markTodo(todo.id)} />
        </div>
    );
}
