import React, { Component } from 'react';
import './SocialMedia.scss';

import facebook from './Assets/Social/fb-black.svg';
import twitter from './Assets/Social/tw-black.svg';
import github from './Assets/Social/git-black.svg';
import linkedIn from './Assets/Social/li-black.svg';
import stackOverflow from './Assets/Social/so-black.svg';
import instagram from './Assets/Social/in-black.svg';

class SocialMedia extends Component {
    componentWillMount(){

    }

    render(){
        return(
          <section id="social" className="row">
              <div className="container d-flex justify-content-around">

                  <img className="socialLogo" src={github} alt="Ledkyb GitHub Account link" />
                  <img className="socialLogo" src={linkedIn} alt="Ledkyb LinkedIn Account link" />
                  <img className="socialLogo" src={stackOverflow} alt="Ledkyb Stack Overflow Account link" />
                  <img className="socialLogo" src={facebook} alt="Ledkyb Facebook Account link" />
                  <img className="socialLogo" src={instagram} alt="Ledkyb Instagram Account link" />
                  <img className="socialLogo" src={twitter} alt="Ledkyb Twitter Account link" />

              </div>
          </section>
        )
    }
}


export default SocialMedia;
