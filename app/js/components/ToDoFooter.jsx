import React, { Component } from 'react';

export default class ToDoFooter extends Component{
    constructor(props) {
        super(props);
    }


    render(){
        return (
            <div className="to-do-footer shadow" style={this.props.allLen > 0 ? {display: 'block'} : {}}>
                <span> {this.props.itemsLen} items left</span>
                <ul className="items-filter">
                    <li><a onClick={() => {this.props.handleClickFilter('all')}}>All</a></li>
                    <li><a onClick={() => {this.props.handleClickFilter('active')}}>Active</a></li>
                    <li><a onClick={() => {this.props.handleClickFilter('completed')}}>Completed</a></li>
                </ul>
                <a onClick={() => {this.props.clearCompleted()}}>Clear completed</a>
            </div>
        );
    }
}
