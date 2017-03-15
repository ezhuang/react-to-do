import React, { Component } from 'react';

export default class ToDoFooter extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="to-do-footer">
                <span> {this.props.value} items left</span>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
                <a href="/">Clear completed</a>
            </div>
        );
    }
}
