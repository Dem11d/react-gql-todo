import React from 'react';
import {Todo as TodoModel} from "./type";
import {ApolloError} from 'apollo-client'
import {Todo} from "../Todo";


type TodosComponentProps = {
    loading: boolean,
    error:ApolloError|undefined,
    data: {todos  :TodoModel[]}
}
export const TodosComponentView = ({loading, error, data: {todos} }: TodosComponentProps) => {
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error :(</div>;
    console.log(todos);
    return (<div>
        {todos.map(todo => (<Todo {...todo} key={todo.id}/>))}
    </div>)
}
