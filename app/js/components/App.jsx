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
        this.handleClickFilter = this.handleClickFilter.bind(this);
        this.filterToDoList = this.filterToDoList.bind(this);
        this.clearCompleted = this.clearCompleted.bind(this);
        this.state = {
            filter: 'all',
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
        this.setState({checkAll: false, toDoList: newToDoList});
    }

    handleCheckAll(checked) {
        let newValue = update(this.state.toDoList, {});
        for (var i = 0; i < newValue.length; i++){
            newValue[i].completed = checked;
        }
        this.setState({checkAll:checked, toDoList:newValue});
    }

    handleClickFilter(clickItem){
        this.setState({filter: clickItem});
    }

    filterToDoList(list) {
        return update(list,{}).filter(
            (item) => {
                switch (this.state.filter) {
                case "all":
                    return true;
                    break;
                case "active":
                    return !item.completed;
                    break;
                case "completed":
                    return item.completed;
                    break;
                default:
                    throw 'unregconizable filter';
                }
        });
    }

    clearCompleted() {
        let hasCompleted = false;
        const filterList = this.state.toDoList.filter((item) => {
            if(!item.completed){
                return true;
            }else{
                hasCompleted = true;
                return false;
            }
        });

        if (hasCompleted){
            this.setState({toDoList:filterList, checkAll: false});
        }
    }

    render() {
        return <div className="App">
            <h1>todos</h1>
            <InputBar handleSubmit={this.handleSubmit} checkAll={this.state.checkAll} handleCheckAll={this.handleCheckAll}></InputBar>
            <ToDoList value={this.filterToDoList(this.state.toDoList)} handleItemCheck = {this.handleItemCheck} filter={this.state.filter}></ToDoList>
            <ToDoFooter itemsLen={this.filterToDoList(this.state.toDoList).length} handleClickFilter = {this.handleClickFilter} clearCompleted={this.clearCompleted}/>
        </div>;
    }
}
