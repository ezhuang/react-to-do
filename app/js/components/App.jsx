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
        this.handleCheckAll = this.handleCheckAll.bind(this);
        this.state = {
            checkAll: false,
            toDoList: []
        };
    }

    handleSubmit(value) {
        value.index = this.state.toDoList.length;
        this.setState({toDoList: this.state.toDoList.concat([value])});
    }

    handleItemCheck(value){
        let newToDoList = update(this.state.toDoList, {});
        let newItem = update(value,{});
        newItem.completed = !newItem.completed;
        newToDoList[newItem.index] = newItem;
        this.setState({toDoList: newToDoList});
    }

    handleCheckAll(checked) {
        let newValue = update(this.state.toDoList, {});
        for (var i = 0; i < newValue.length; i++){
            newValue[i].completed = checked;
        }
        this.setState({checkAll:checked, toDoList:newValue});
    }

    render() {
        return <div className="App">
            <h1>todos</h1>
            <InputBar handleSubmit={this.handleSubmit} checkAll={this.state.checkAll} handleCheckAll={this.handleCheckAll}></InputBar>
            <ToDoList value={this.state.toDoList} handleItemCheck = {this.handleItemCheck}></ToDoList>
            <ToDoFooter value={this.state.toDoList && this.state.toDoList.length}/>
        </div>;
    }
}
