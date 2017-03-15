import React, { Component } from 'react';

export default class InputBar extends Component {


    constructor(props) {
      super(props);
      this.state = {editText: 'what needs to be done?'};

      this.handleTextInput = this.handleTextInput.bind(this);
      this.handleKeyDown = this.handleKeyDown.bind(this);
      this.handleCheckBox = this.handleCheckBox.bind(this);
    }



    handleTextInput(event) {
        this.setState({editText: event.target.value});
    }

    trim(string){
        return string.replace(/^\s+|\s+$/g, '');
    }

    handleCheckBox(){
        this.props.handleCheckAll(!this.props.checkAll);
    }
    handleKeyDown(e) {
        const ENTER_KEY = 13;
        switch (e.which){
            case ENTER_KEY:
                this.props.handleSubmit({
                                        text: this.state.editText,
                                        completed: false
                                    });
                this.state.editText = '';
                break;
            default:
                break;
        }
    }

    render() {
        return (
        <div className="input-bar">
             <input type="checkbox" checked={this.props.checkAll} onClick={(e) => this.handleCheckBox()}></input>
             <input type="text" value={this.state.editText} onChange={this.handleTextInput} onKeyPress={this.handleKeyDown}></input>
        </div>
        );
    }
}
