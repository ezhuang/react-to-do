import React, { Component } from 'react';
import update from 'immutability-helper';

export default class ToDoItem extends Component{
    constructor(props) {
        super(props);
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck() {
        this.props.handleItemCheck(this.props.value);
    }

    render(){
        return (
            <div className="to-do-item">
                <input type="checkbox" checked={this.props.value.completed} onChange={this.handleCheck}></input>
                <span className="item-content" style={ {textDecoration : this.props.value.completed ? "line-through" : "none" }}>{this.props.value.text}</span>
            </div>
        );
    }
}
