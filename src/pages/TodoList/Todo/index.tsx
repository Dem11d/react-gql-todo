import React from 'react';
import {TodoComponentView} from "./TodoComponentView";
import {Todo as TodoModel} from "../TodoList/type";
import {useMutation} from "react-apollo-hooks";
import {DELETE_TODO, TOGGLE_TODO} from "../gql";

type TodoProps = {
    onItemChange: (todo: TodoModel) => void
    onItemDelete: (todo: TodoModel) => void
} & TodoModel;

export const Todo: React.FC<TodoProps> = ({onItemChange, onItemDelete, id, title, completed}) => {
    const toggleTodo = useMutation(TOGGLE_TODO, {variables: {id: id}});
    const deleteTodo = useMutation(DELETE_TODO, {variables: {id: id}});
    const handleToggleTodo = async () => {
        const result = await toggleTodo();
        if (onItemChange) {
            onItemChange(result.data.toggle);
        }
    };
    const handleDeleteTodo = async () => {
        const result = await deleteTodo();
        if (onItemDelete) {
            onItemDelete(result.data.destroy);
        }
    };


    return <TodoComponentView onToggle={handleToggleTodo} onDelete={handleDeleteTodo} completed={completed} id={id}
                              title={title}/>
}
