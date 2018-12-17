import React, {Component} from 'react';
import './Scroller.scss';

class Scroller extends React.Component {
  render() {
    return (
        <div className="container scroller">
          <div className="col-2 offset-5">
            <div className="scrollerElement"></div>
            <div className="scrollerElement"></div>
            <div className="scrollerElement"></div>
          </div>
        </div>
    );
  }
}

export default Scroller;