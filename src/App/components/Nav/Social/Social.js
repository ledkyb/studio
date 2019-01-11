import React, {Component} from 'react';
import facebook from './Assets/fb.svg';
import github from './Assets/git.svg';
import instagram from './Assets/in.svg';
import linkedin from './Assets/li.svg';
import stackoverflow from './Assets/so.svg';
import twitter from './Assets/tw.svg';
import './Social.scss';

class Social extends Component {
  state = {
    companyName: 'ledkyb',
  }
  render(){
    return(
        <div id="socialMenu" className="container-fluid">
            <div className="row">
                <div
                  className="col-3 col-sm-2 col-md-1 col-lg-1 social-menu-icon"
                  onClick={e => { window.location.href = `https://www.facebook.com/${this.state.companyName}`}}>
                    <img
                      src={facebook}
                      alt={`${this.state.companyName}'s facebook page`}
                    />
                </div>
                <div
                  className="col-3 col-sm-2 col-md-1 col-lg-1 social-menu-icon"
                  onClick={e => { window.location.href = `https://www.github.com/${this.state.companyName}`}}>
                    <img
                      src={github}
                      alt={`${this.state.companyName}'s github page`}
                    />
                </div>
                <div
                  className="col-3 col-sm-2 col-md-1 col-lg-1 social-menu-icon"
                  onClick={e => { window.location.href = `https://www.linkedin.com/${this.state.companyName}`}}>
                    <img
                      src={linkedin}
                      alt={`${this.state.companyName}'s linkedin page`}
                    />
                </div>
            </div>

          <div className="row mt-4">
              <div
                className="col-3 col-sm-2 col-md-1 col-lg-1 social-menu-icon"
                onClick={e => { window.location.href = `https://www.instagram.com/${this.state.companyName}`}}>
                  <img
                    src={instagram}
                    alt={`${this.state.companyName}'s instagram page`}
                  />
              </div>
              <div
                className="col-3 col-sm-2 col-md-1 col-lg-1 social-menu-icon"
                onClick={e => { window.location.href = `https://www.twitter.com/${this.state.companyName}`}}>
                  <img
                    src={twitter}
                    alt={`${this.state.companyName}'s twitter page`}
                  />
              </div>
              <div
                className="col-3 col-sm-2 col-md-1 col-lg-1 social-menu-icon"
                onClick={e => { window.location.href = `https://www.stackoverflow.com/${this.state.companyName}`}}>
                  <img
                    src={stackoverflow}
                    alt={`${this.state.companyName}'s stackoverflow page`}
                  />
              </div>
          </div>
        </div>
    )
  }
}

export default Social;
