import React from 'react';
import {gql} from 'apollo-boost';
import {Query, QueryResult} from "react-apollo";

const GET_TODOS = gql`
    query{
      todos{
        id,title,completed
      }
    }
`;

const TodosComponent = () => {
return<Query query={GET_TODOS}>
    {({loading, error, data}: QueryResult ) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error :(</div>;

        console.log(data);
        return (<div>Done</div>)
    }}
</Query>
}

export default TodosComponent;
