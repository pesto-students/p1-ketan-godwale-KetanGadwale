import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (input) => {
        let id = 1;
        if (todos.length > 0) {
            id = todos[0].id + 1;
        }
        let todo = { id: id, name: input, completed: false };
        let newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(newTodos);
    };

    return (
        <div className='App'>
            <h1>Todo List</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                <TodoItem todo={todo} />
            ))}
        </div>
    );
}

export default App;
