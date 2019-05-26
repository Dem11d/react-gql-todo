import React from 'react';
import './App.css';
import Apollo from "../Apollo";
import TodosComponent from "../../pages/TodoList/TodosComponent";

const App: React.FC = () => {
    return (
        <Apollo>
            <TodosComponent/>
        </Apollo>
    );
}

export default App;
