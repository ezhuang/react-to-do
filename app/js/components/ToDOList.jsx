import React, { Component } from 'react';

export default class ToDoList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            todoItems : ["haha","dodo"]
        };
    }
    render(){
        return (
            <ul>
                {this.state.todoItems.map((result,index) => (<li key={result.toString()}>{result}</li>))}
            </ul>
        );
    }
}
