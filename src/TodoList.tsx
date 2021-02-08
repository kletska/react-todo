import React from 'react'

type TodoListProps ={
    todos: any[]
}

export const TodoList: React.FC<TodoListProps> = ({todos}) => {
    return (
        <ul>
            {todos.map(todo => {
                return (
                    <li>
                        <label>
                            <input type="checkbox" />
                            <span></span>
                            <i className="material-icons red-text">delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}