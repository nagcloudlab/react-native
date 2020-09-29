
import { useReducer } from 'react';

const initialState = [
    { id: 0, title: 'sample todo1', completed: true },
    { id: 1, title: 'sample todo2', completed: true }
]

const todosReducer = (state = [], action) => {
    let { type } = action
    let todos = state;
    switch (type) {
        case 'ADD_TODO': {
            let { todo } = action
            return [todo, ...todos]
        }
        case 'DELETE_TODO': {
            let { id } = action
            return todos.filter(todo => todo.id !== id);
        }
        default:
            return state;
    }
}

export function useTodos() {
    const [todos, dispatch] = useReducer(todosReducer, initialState);
    return [todos,dispatch]
}