


import React from 'react';

import { useTodos } from '../custom'


const TodoApp = () => {

    const [todos, dispatch] = useTodos();

    const handleNewTodo = e => {
        if (e.which === 13) {
            let text = e.target.value;
            if (text) {
                let newTodo = { id: Math.floor(Math.random() * 100), title: text, completed: false }
                dispatch({ type: 'ADD_TODO', todo: newTodo })
                e.target.value = ""
            }
        }
    };

    return (
        <div>

            <hr />
            <input onKeyUp={e => handleNewTodo(e)} />
            <hr />
            {
                todos.map(todo => {
                    return (
                        <div className="list-group-item" key={todo.id}>
                            <span>{todo.title}</span>
                            <button onClick={e => dispatch({ type: 'DELETE_TODO', id: todo.id })}>delete</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default TodoApp;