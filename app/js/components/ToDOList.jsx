import React, { Component } from 'react';
import ToDoItem from './ToDoItem.jsx'

export default class ToDoList extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <ul>
                {this.props.value.map((result,index) => (<li key={index}><ToDoItem value={result} handleItemCheck = {this.props.handleItemCheck}/></li>))}
            </ul>
        );
    }
}
