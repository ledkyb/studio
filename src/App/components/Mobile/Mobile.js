import React, {Component} from 'react';
import './Mobile.scss';
import phoneIcon from './Assets/phone.svg';
import emailIcon from './Assets/envelope.svg';
import homeIcon from './Assets/home.svg';

class Mobile extends Component {
  render() {
    return (
        <div id="mobileMenu" className="container-fluid">
          <div className="row">
            <div className="col-4 mobile-menu-icon" onClick={e => { window.location.href = '#home'}}><img src={homeIcon} /></div>
            <div className="col-4 mobile-menu-icon" onClick={e => { window.location.href = 'mailto:support@ledkyb.com'}}><img src={emailIcon} /></div>
            <div className="col-4 mobile-menu-icon" onClick={e => { window.location.href = 'tel:9094365446'}}><img src={phoneIcon} /></div>
          </div>
        </div>
    );
  }
}

export default Mobile;
