import React, {ChangeEvent, useState} from 'react';
import {useMutation} from "react-apollo-hooks";
import {ADD_TODO} from "../gql";
import {Todo} from "../TodoList/type";

type AddTodoProps = {
    onAdd?: (todo: Todo) => void
}


export const AddTodo:React.FC<AddTodoProps> = ({onAdd}) => {
    const addTodoMutation = useMutation(ADD_TODO);
    const addTodo = (title:string) => addTodoMutation({variables: {title:title}});
    const [title, setTitle] = useState('');
    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.target.value);
    };
    const handleAdd = async () =>{
        //todo handle error
        const result = await addTodo(title);
        if(onAdd)
            onAdd(result.data.add);
    };

    return (
        <div>
            <input type="text" value={title} onChange={handleInputChange} />
            <button disabled={title.length===0} onClick={handleAdd}>add todo</button>
        </div>
    );

}

