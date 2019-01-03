import React, {Component} from 'react';
import './Scroller.scss';

class Scroller extends Component {
  render() {
    const color = this.props.color || 'orange';
    const layers = this.props.layers || 3;

    return (
        <div className="scroller-container min-height-200">
          <div className="scroller mb-5 mt-5">
            {
              [...Array(layers)].map((a, i) => <div key={i} className={`scrollerElement border-${color}`} />)
            }
          </div>
        </div>
    );
  }
}

export default Scroller;
