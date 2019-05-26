import React, {useEffect, useState} from 'react';
import {useQuery} from "react-apollo-hooks";
import {GET_TODOS} from "../gql";
import {TodoListComponentView} from "./TodoListComponentView";
import {AddTodo} from "../AddTodo";
import {Todo} from "./type";
import {Loader} from "../../../elements/Loader";

export const TodoListComponent = () => {
    const {data, error, loading} = useQuery(GET_TODOS);
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        if (!loading)
            setTodos(data.todos);
    }, [loading, data]);

    const handleAddTodo = (todo: Todo) => {
        setTodos([...todos, todo]);
    };
    const handleDeleteTodo = (todo: Todo) => {
        setTodos(todos.filter(t=>t.id!==todo.id));
    };

    const handleChangeTodo = (todo: Todo) => {
        setTodos(todos.map(t => {
            if(t.id===todo.id)
                return todo;
            return t;
        }));
    };
    if (loading)
        return <Loader/>;
    if (error) {
        //todo add handleerror component
        return <span>Error :(</span>;
    }

    return (<>
        <AddTodo onAdd={handleAddTodo}/>
        <TodoListComponentView handleChangeTodo={handleChangeTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>)
};

