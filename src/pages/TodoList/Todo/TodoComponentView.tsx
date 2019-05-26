import React from 'react';
import {Todo as TodoModel} from "../TodoList/type";

type TodoProps = {
    onToggle:()=> void;
    onDelete:()=> void;
} & TodoModel;

export const TodoComponentView: React.FC<TodoProps> = ({id, completed, title, onToggle, onDelete}) =>{
    return (<div key={id}>
        <span>| id:{id} |</span>
        <span>| title:{title} |</span>
        <span>| completed:{completed?"completed":"not completed"} |</span>
        <button onClick={onDelete}>remove</button>
        <button onClick={onToggle}>toggle</button>
    </div>)
}