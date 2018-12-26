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
            <div className="col-3 col-md-2 col-lg-1 social-menu-icon" onClick={e => { window.location.href = 'https://www.facebook.com'}}><img src={facebook} /></div>
            <div className="col-3 col-md-2 col-lg-1 social-menu-icon" onClick={e => { window.location.href = 'https://www.github.com'}}><img src={github} /></div>
            <div className="col-3 col-md-2 col-lg-1 social-menu-icon" onClick={e => { window.location.href = 'https://www.linkedin.com'}}><img src={linkedin} /></div>
          </div>

          <div className="row mt-4">
            <div className="col-3 col-md-2 col-lg-1 social-menu-icon" onClick={e => { window.location.href = 'https://www.instagram.com'}}><img src={instagram} /></div>
            <div className="col-3 col-md-2 col-lg-1 social-menu-icon" onClick={e => { window.location.href = 'https://www.twitter.com'}}><img src={twitter} /></div>
            <div className="col-3 col-md-2 col-lg-1 social-menu-icon" onClick={e => { window.location.href = 'https://www.stackoverflow.com'}}><img src={stackoverflow} /></div>
          </div>
        </div>
    )
  }
}

export default Social;