import React from 'react';
import './App.css';
import Apollo from "../Apollo";
import Todos from "../../pages/TodoList";

const App: React.FC = () => {
    return (
        <Apollo>
            <Todos/>
        </Apollo>
    );
}

export default App;
