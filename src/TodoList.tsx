import React from 'react'
import { ITodo } from './interfaces'

type TodoListProps = {
    todos: ITodo[]
    onToggle: (id: number) => void,
    onRemove: (id: number) => void,

}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
    if (todos.length === 0) {
        return <p className="center">Get your own business!</p>
    }
    return (
        <ul>
            {todos.map(todo => {
                return (
                    <li className={""} key={todo.id}>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={todo.completed} 
                                onChange={() => onToggle(todo.id)}
                            />
                            <span>{todo.title}</span>
                            <i 
                                className="material-icons red-text" 
                                onClick={() => onRemove(todo.id)}>delete
                            </i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}