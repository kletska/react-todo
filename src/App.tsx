import React, { useState } from 'react';
import { Navbar } from './Navbar'
import { TodoForm } from './TodoForm';

const App: React.FC = () => {
    const [todos, setTodos] = useState([]);

    const addHandler = (title: string) => {
        setTodos((prev: Array<string>) => prev.concat([title]));
    }

    return <>
        <Navbar />
        <div className="container">
            <TodoForm onAdd={addHandler} />
        </div>
    </>
}

export default App;