import React, {Component} from 'react';
import './Button.scss';

class Button extends Component {
  render() {
    return (
        <button className="submitBtn" href={this.props.link} >{this.props.label}</button>
    )
  }
}

export default Button;
