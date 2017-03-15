import React, { Component } from 'react';
import update from 'immutability-helper';

export default class ToDoItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value : this.props.value
        }
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck() {
        this.setState({value : update(this.state.value, {completed: {$set: !this.state.value.completed}})});
        this.props.handleItemCheck(this.state.value);
    }

    render(){
        return (
            <div className="to-do-item">
                <input type="checkbox" checked={this.state.value.completed} onChange={this.handleCheck}></input>
                <span className="item-content" style={ {textDecoration : this.state.value.completed ? "line-through" : "none" }}>{this.props.value.text}</span>
            </div>
        );
    }
}
