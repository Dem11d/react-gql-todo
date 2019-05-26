import React, {ChangeEvent, useState} from 'react';
import {useMutation} from "react-apollo-hooks";
import {ADD_TODO} from "../gql";

export const AddTodo = () => {
    const addTodoMutation = useMutation(ADD_TODO);
    const addTodo = (title:string) => addTodoMutation({variables: {title:title}});
    const [title, setTitle] = useState('');
    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.target.value);
    };

    return (
        <div>
            <input type="text" value={title} onChange={handleInputChange} />
            <button disabled={title.length===0} onClick={()=>addTodo(title)}>add todo</button>
        </div>
    );

}

