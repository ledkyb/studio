import React, {Component} from 'react';
import './Button.scss';

class Button extends React.Component {
  render() {
    return (
        <a className="button" href={this.props.link} >{this.props.label}</a>
    )
  }
}

export default Button;