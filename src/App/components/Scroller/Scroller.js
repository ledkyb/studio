import React, {Component} from 'react';
import './Scroller.scss';

class Scroller extends Component {

  render() {
    return (
        <div className="scroller-container min-height-200">
          <div className="scroller mb-5 mt-5">
            {
              [...Array(this.props.layers)].map(a => <div className={`scrollerElement border-${this.props.color}`} />)
            }
          </div>
        </div>
    );
  }
}

export default Scroller;
