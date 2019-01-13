import React, { Component } from 'react';

import './SocialNetworks.scss';

//assets
import fbIcon from './Assets/fb.png';
import gitIcon from './Assets/git.png';
import linkedInIcon from './Assets/li.png';
import instagramIcon from './Assets/in.png';
import twitterIcon from './Assets/tw.png';
import stackIcon from './Assets/so.png';

class SocialNetworks extends Component{
  render(){
    const { links } = this.props;

    //These conditions only render available social networks
    const gitElem = (links.github == null ? null : <img src={gitIcon} alt="github" onClick={() => window.open(links.github)} />);
    const fbElem = (links.facebook == null ? null : <img className="ml-1 ml-lg-2" src={fbIcon} alt="facebook" onClick={() => window.open(links.facebook)} />);
    const linkedInElem = (links.linkedin == null ? null : <img className="ml-1 ml-lg-2" src={linkedInIcon} alt="linkedin" onClick={() => window.open(links.linkedin)} />);
    const igElem = (links.instagram == null ? null : <img className="ml-1 ml-lg-2" src={instagramIcon} alt="instagram" onClick={() => window.open(links.instagram)} />);
    const twitterElem = (links.twitter == null ? null : <img className="ml-1 ml-lg-2" src={twitterIcon} alt="twitter" onClick={() => window.open(links.twitter)} />);
    const stackElem = (links.stackoverflow == null ? null : <img className="ml-1 ml-lg-2" src={stackIcon} alt="stackoverflow" onClick={() => window.open(links.stackoverflow)} />);

    return(
      <div className="team-social-networks d-flex">
        {gitElem}
        {fbElem}
        {linkedInElem}
        {igElem}
        {twitterElem}
        {stackElem}
      </div>
    );
  }
};

export default SocialNetworks;