import React, { useEffect, useState } from 'react';
import { ITodo } from './interfaces';
import { Navbar } from './Navbar'
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

const App: React.FC = () => {
    const [todos, setTodos] = useState<Array<ITodo>>([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || '[]') as Array<ITodo>;
        setTodos(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));    
    }, [todos]);

    const addHandler = (title: string) => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false,
        }
        setTodos((prev: Array<ITodo>) => {
            return [newTodo, ...prev];
        });
    }

    const toggleHandler = (id: number) => {
        setTodos((prev) => {
            return prev.map(item => {
                if (item.id === id) {
                    item.completed = !item.completed;
                }
                return item;
            });
        })
    }

    const removeHandler = (id: number) => {
        setTodos((prev) => {
            return prev.filter(item => item.id !== id);
        })
    }

    return <>
        <Navbar />
        <div className="container">
            <TodoForm onAdd={addHandler} />
            <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
        </div>
    </>
}

export default App;