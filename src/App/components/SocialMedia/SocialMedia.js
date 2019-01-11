import React, { Component } from 'react';
import './SocialMedia.scss';

import facebook from './Assets/Social/fb-black.svg';
import twitter from './Assets/Social/tw-black.svg';
import github from './Assets/Social/git-black.svg';
import linkedIn from './Assets/Social/li-black.svg';
import stackOverflow from './Assets/Social/so-black.svg';
import instagram from './Assets/Social/in-black.svg';

class SocialMedia extends Component {
    state = {
        companyName: 'ledkyb',
    }

    render(){
        return(
          <section id="social" className="row">
              <div className="container d-flex justify-content-around">

                  <img
                      className="socialLogo"
                      src={github}
                      alt={`${this.state.companyName} GitHub page`}
                  />
                  <img
                      className="socialLogo"
                      src={linkedIn}
                      alt={`${this.state.companyName} LinkedIn page`}
                  />
                  <img
                      className="socialLogo"
                      src={stackOverflow}
                      alt={`${this.state.companyName} Stack Overflow page`}
                  />
                  <img
                      className="socialLogo"
                      src={facebook}
                      alt={`${this.state.companyName} Facebook page`}
                  />
                  <img
                      className="socialLogo"
                      src={instagram}
                      alt={`${this.state.companyName} Instagram page`}
                  />
                  <img
                      className="socialLogo"
                      src={twitter}
                      alt={`${this.state.companyName} Twitter page`}
                  />

              </div>
          </section>
        )
    }
}


export default SocialMedia;
