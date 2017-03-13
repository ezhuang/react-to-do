import React, { Component } from 'react';

export default class ToDoList extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <ul>
                {this.props.value.map((result,index) => (<li key={result.toString()}>{result}</li>))}
            </ul>
        );
    }
}
