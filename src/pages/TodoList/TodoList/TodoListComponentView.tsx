import React from 'react';
import {Todo as TodoModel} from "./type";
import {Todo} from "../Todo";


type TodoListComponentProps = {
    todos: TodoModel[],
    handleChangeTodo: (todo: TodoModel) => void;
    handleDeleteTodo: (todo: TodoModel) => void;
}
export const TodoListComponentView = ({todos, handleChangeTodo, handleDeleteTodo}: TodoListComponentProps) => {
    if (!todos) return null;
    return (<div>
        {todos.map(todo => (
            <Todo onItemChange={handleChangeTodo} onItemDelete={handleDeleteTodo} {...todo} key={todo.id}/>))}
    </div>)
}
