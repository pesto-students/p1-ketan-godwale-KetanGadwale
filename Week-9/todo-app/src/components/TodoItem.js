import React from 'react';

export default function TodoItem({ todo }) {
    return (
        <div className='todo-item' key={todo.id}>
            {todo.name}
        </div>
    );
}
