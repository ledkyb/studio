import React, {Component} from 'react';
import './Mobile.scss';

class Mobile extends React.Component {
  render() {
    return (
        <div id="mobileMenu" className="container-fluid">
          <div className="row">
            <div className="col-4">x</div>
            <div className="col-4">y</div>
            <div className="col-4">z</div>
          </div>
        </div>
    );
  }
}

export default Mobile;