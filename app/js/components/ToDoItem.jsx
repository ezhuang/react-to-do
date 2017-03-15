import React, { Component } from 'react';

export default class ToDoItem extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="to-do-item">
                <input type="checkbox"></input>
                <span className="item-content">{this.props.value}</span>
            </div>
        );
    }
}
