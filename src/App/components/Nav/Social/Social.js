import React, {Component} from 'react';
import facebook from './Assets/fb.svg';
import github from './Assets/git.svg';
import instagram from './Assets/in.svg';
import linkedin from './Assets/li.svg';
import stackoverflow from './Assets/so.svg';
import twitter from './Assets/tw.svg';
import './Social.scss';

class Social extends Component {
  render(){
    return(
        <div id="socialMenu" className="container-fluid">
          <div className="row">
            <div className="col-3 col-sm-2 col-md-1 col-lg-1 social-menu-icon" onClick={e => { window.location.href = 'https://www.facebook.com'}}><img src={facebook} alt="facebook social icon"/></div>
            <div className="col-3 col-sm-2 col-md-1 col-lg-1 social-menu-icon" onClick={e => { window.location.href = 'https://www.github.com'}}><img src={github} alt="github social icon"/></div>
            <div className="col-3 col-sm-2 col-md-1 col-lg-1 social-menu-icon" onClick={e => { window.location.href = 'https://www.linkedin.com'}}><img src={linkedin} alt="linkedin social icon"/></div>
          </div>

          <div className="row mt-4">
            <div className="col-3 col-sm-2 col-md-1 col-lg-1 social-menu-icon" onClick={e => { window.location.href = 'https://www.instagram.com'}}><img src={instagram} alt="instagram social icon"/></div>
            <div className="col-3 col-sm-2 col-md-1 col-lg-1 social-menu-icon" onClick={e => { window.location.href = 'https://www.twitter.com'}}><img src={twitter} alt="twitter social icon"/></div>
            <div className="col-3 col-sm-2 col-md-1 col-lg-1 social-menu-icon" onClick={e => { window.location.href = 'https://www.stackoverflow.com'}}><img src={stackoverflow} alt="stackoverflow social icon"/></div>
          </div>
        </div>
    )
  }
}

export default Social;