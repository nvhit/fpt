import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class RadioButtons extends Component {

  constructor() {
    super();
    this.state = {
      selectedOption: ''
    };
    this.radioChange = this.radioChange.bind(this);
  }

  radioChange(e) {
    this.setState({
      selectedOption: e.currentTarget.value
    });
  }

  render() {
    return (
      <div>
        <h5>Phúc là con gì ?</h5>
        <input type="radio"
               value="Con gà"
               checked={this.state.selectedOption === "Con gà"}
               onChange={this.radioChange} /> Con gà
        <br/>
        <input type="radio"
               value="Con chuột"
               checked={this.state.selectedOption === "Con chuột"}
               onChange={this.radioChange}/> Con chuột
        <br/>
         <input type="radio"
               value="Con mòe"
               checked={this.state.selectedOption === "Con mòe"}
               onChange={this.radioChange}/> Con mòe
        <br/>
        <input type="radio"
               value="Con tru"
               checked={this.state.selectedOption === "Con tru"}
               onChange={this.radioChange}/> Con tru
        
        <h5>Đáp án bạn chọn: {this.state.selectedOption}</h5>
      </div> 
      
    );
  }
  }

export default RadioButtons;
