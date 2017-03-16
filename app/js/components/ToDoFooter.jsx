import React, { Component } from 'react';

export default class ToDoFooter extends Component{
    constructor(props) {
        super(props);
    }


    render(){
        return (
            <div className="to-do-footer">
                <span> {this.props.itemsLen} items left</span>
                <ul className="items-filter">
                    <li><a onClick={() => {this.props.handleClickFilter('all')}}>All</a></li>
                    <li><a onClick={() => {this.props.handleClickFilter('active')}}>Active</a></li>
                    <li><a onClick={() => {this.props.handleClickFilter('completed')}}>Completed</a></li>
                </ul>
                <a href="/">Clear completed</a>
            </div>
        );
    }
}
