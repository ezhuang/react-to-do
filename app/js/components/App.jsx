import React, { Component } from 'react';
import InputBar from './InputBar.jsx';
import ToDoList from './ToDoList.jsx';
import ToDoFooter from './ToDoFooter.jsx';
import update from 'immutability-helper';

export default class App extends Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleItemCheck = this.handleItemCheck.bind(this);
        this.state = {
            toDoList: []
        };
    }

    handleSubmit(value) {
        value.index = this.state.toDoList.length;
        this.setState({toDoList: this.state.toDoList.concat([value])});
    }

    handleItemCheck(value){
        let newValue = update(this.state.toDoList, {});
        newValue[value.index] = value;
        this.setState({toDoList: newValue});
    }
    render() {
        return <div className="App">
            <h1>todos</h1>
            <InputBar handleSubmit={this.handleSubmit}></InputBar>
            <ToDoList value={this.state.toDoList} handleItemCheck = {this.handleItemCheck}></ToDoList>
            <ToDoFooter value={this.state.toDoList && this.state.toDoList.length}/>
        </div>;
    }
}
