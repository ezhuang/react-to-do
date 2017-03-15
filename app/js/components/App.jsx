import React, { Component } from 'react';
import InputBar from './InputBar.jsx';
import ToDoList from './ToDoList.jsx';
import ToDoFooter from './ToDoFooter.jsx';

export default class App extends Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            toDoList: []
        };
    }

    handleSubmit(value) {
        this.setState({toDoList: this.state.toDoList.concat([value])});
    }
    render() {
        return <div className="App">
            <h1>todos</h1>
            <InputBar handleSubmit={this.handleSubmit}></InputBar>
            <ToDoList value={this.state.toDoList}></ToDoList>
            <ToDoFooter value={this.state.toDoList && this.state.toDoList.length}/>
        </div>;
    }
}
