import React, { Component } from 'react';

export default class InputBar extends Component {
    handleTextInput(e) {
        console.log(e);
    }

    render() {
        return (
        <div className="input-bar">
             <input type="checkbox" onClick={(e) => console.log(e)}></input>
             <input type="text" value="what needs to be done?" onChange={(e)=>{handleTextInput(e)}}></input>
        </div>
        );
    }
}
