import React, {Component} from 'react';
import './Scroller.scss';

class Scroller extends React.Component {
  render() {
    return (
        <div className="scroller">
          <div className="scrollerElement"></div>
          <div className="scrollerElement"></div>
          <div className="scrollerElement"></div>
        </div>
    );
  }
}

export default Scroller;