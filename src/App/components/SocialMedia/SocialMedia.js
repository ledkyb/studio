import React, { Component } from 'react';
import './SocialMedia.scss';

import {ReactComponent as FbLogo} from './Assets/Social/fb-black.svg';
import {ReactComponent as TwLogo} from './Assets/Social/tw-black.svg';
import {ReactComponent as GhLogo} from './Assets/Social/git-black.svg';
import {ReactComponent as LiLogo} from './Assets/Social/li-black.svg';
import {ReactComponent as SoLogo} from './Assets/Social/so-black.svg';
import {ReactComponent as InLogo} from './Assets/Social/in-black.svg';

class SocialMedia extends Component {
    state = {
        companyName: 'ledkyb',
    }

    render(){
        return(
          <section id="social" className="row">
              <div className="container d-flex flex-wrap justify-content-between">

                  <a href={`https://www.github.com/${this.state.companyName}`}>
                      <GhLogo
                          className="socialLogo"
                          alt={`${this.state.companyName} GitHub page`}
                      />
                  </a>
                  <a href={`https://www.linkedin.com/${this.state.companyName}`}>
                      <LiLogo
                          className="socialLogo"
                          alt={`${this.state.companyName} LinkedIn page`}
                      />
                  </a>
                  <a href={`https://www.stackoverflow.com/${this.state.companyName}`}>
                      <SoLogo
                          className="socialLogo"
                          alt={`${this.state.companyName} Stack Overflow page`}
                      />
                  </a>
                  <a href={`https://www.facebook.com/${this.state.companyName}`}>
                      <FbLogo
                          className="socialLogo"
                          alt={`${this.state.companyName} Facebook page`}
                          title={this.state.companyName}
                      />
                  </a>
                  <a href={`https://www.instagram.com/${this.state.companyName}`}>
                      <InLogo
                          className="socialLogo"
                          alt={`${this.state.companyName} Instagram page`}
                      />
                  </a>
                  <a href={`https://www.twitter.com/${this.state.companyName}`}>
                      <TwLogo
                          className="socialLogo"
                          alt={`${this.state.companyName} Twitter page`}
                      />
                  </a>

              </div>
          </section>
        )
    }
}


export default SocialMedia;
