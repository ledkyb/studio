import React, {Component} from 'react';
import './Button.scss';

class Button extends Component {
  render() { 
    if (this.props.link !== "") {
      return (
        <button className={`button ${this.props.styles}`} onClick={() => {window.location.href = window.location.origin + "/#contact"}} >{this.props.label}</button>
    )
    } else {
      return (
        <button className={`button ${this.props.styles}`} href={this.props.link } >{this.props.label}</button>
    ) 
    }
  }
}

export default Button;
