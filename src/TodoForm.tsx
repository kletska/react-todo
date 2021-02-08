import React, { useState } from 'react';

export const TodoForm: React.FC<{onAdd(title: string): void}> = ({onAdd}) => {
    const [title, setTitle] = useState('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onAdd(title);
            setTitle('')
        }

    }

    return (
        <div className="input-field">
            <input 
                onChange={changeHandler} 
                value={title} 
                type="text" 
                id="title" 
                placeholder="Task name" 
                onKeyPress={keyPressHandler}
            />
            <label htmlFor="title" className="active">
                Task name
            </label>
        </div>
    )
}