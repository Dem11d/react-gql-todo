import React from 'react';
import { useQuery} from "react-apollo-hooks";
import { GET_TODOS} from "../gql";
import {TodosComponentView} from "./TodosComponentView";
import {AddTodo} from "../AddTodo";

export const TodosComponent = () => {
    const {data, error, loading} = useQuery(GET_TODOS);

    return (<>
        <AddTodo/>
        <TodosComponentView loading={loading} error={error} data={data}/>
        </>)
};

