import React, { Component } from 'react';
import InputBar from './InputBar.jsx';
import ToDoList from './ToDoList.jsx';

export default class App extends Component {
    render() {
        return <div className="App">
            <h1>todos</h1>
            <InputBar></InputBar>
            <ToDoList></ToDoList>
        </div>;
    }
}
