import React from 'react';
import {Todo as TodoModel} from "../TodoList/type";

type TodoProps = {

} & TodoModel;

export const Todo: React.FC<TodoProps> = ({id, completed, title}) =>{
    return (<div key={id}>
        <span>| id:{id} |</span>
        <span>| title:{title} |</span>
        <span>| completed:{completed?"completed":"not completed"} |</span>
    </div>)
}