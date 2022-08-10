import { useEffect, useReducer } from "react";
import { todoReducer } from "./";

export const useTodo = () => {
    const initialState = [];
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    };
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] add todo',
            payload: todo
        };
        dispatch(action);
    };
    const handleDeleteTodo = (todo) => {
        const action = {
            type: '[TODO] remove todo',
            payload: todo
        };
        dispatch(action);
    };
    const handleToggleTodo = (todo) => {
        const action = {
            type: '[TODO] toggle todo',
            payload: todo
        };
        dispatch(action);
    };
    const todosCount = todos.length;
    const todosPendingCount = todos.filter(todo => !todo.done).length;
    return {todos, todosCount, todosPendingCount, handleNewTodo, handleDeleteTodo, handleToggleTodo};
};