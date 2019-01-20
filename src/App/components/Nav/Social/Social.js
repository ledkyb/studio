import React, {Component} from 'react';
import {ReactComponent as Facebook} from './Assets/fb.svg';
import {ReactComponent as Github} from './Assets/git.svg';
import {ReactComponent as Instagram} from './Assets/in.svg';
import {ReactComponent as Linkedin} from './Assets/li.svg';
import {ReactComponent as Stackoverflow} from './Assets/so.svg';
import {ReactComponent as Twitter} from './Assets/tw.svg';
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
                  className="col-3 col-sm-2 col-md-1 col-lg-1 social-menu-icon">
                    <a href={`https://www.facebook.com/${this.state.companyName}`}>
                      <Facebook
                        className="socialLogo"
                        alt={`${this.state.companyName}'s Facebook page`}
                      />
                    </a>
                </div>
                <div
                  className="col-3 col-sm-2 col-md-1 col-lg-1 social-menu-icon">
                    <a href={`https://www.github.com/${this.state.companyName}`}>
                      <Github
                        className="socialLogo"
                        alt={`${this.state.companyName}'s GitHub page`}
                      />
                    </a>
                </div>
                <div
                  className="col-3 col-sm-2 col-md-1 col-lg-1 social-menu-icon">
                    <a href={`https://www.linkedin.com/${this.state.companyName}`}>
                      <Linkedin
                        className="socialLogo"
                        alt={`${this.state.companyName}'s LinkedIn page`}
                      />
                    </a>
                </div>
            </div>

          <div className="row mt-4">
              <div
                className="col-3 col-sm-2 col-md-1 col-lg-1 social-menu-icon">
                  <a href={`https://www.instagram.com/${this.state.companyName}`}>
                    <Instagram
                      className="socialLogo"
                      alt={`${this.state.companyName}'s Instagram page`}
                    />
                  </a>
              </div>
              <div
                className="col-3 col-sm-2 col-md-1 col-lg-1 social-menu-icon">
                  <a href={`https://www.twitter.com/${this.state.companyName}`}>
                    <Twitter
                      className="socialLogo"
                      alt={`${this.state.companyName}'s Twitter page`}
                    />
                  </a>
              </div>
              <div
                className="col-3 col-sm-2 col-md-1 col-lg-1 social-menu-icon">
                  <a href={`https://www.stackoverflow.com/${this.state.companyName}`}>
                    <Stackoverflow
                      className="socialLogo"
                      alt={`${this.state.companyName}'s Stack Overflow page`}
                    />
                  </a>
              </div>
          </div>
        </div>
    )
  }
}

export default Social;
