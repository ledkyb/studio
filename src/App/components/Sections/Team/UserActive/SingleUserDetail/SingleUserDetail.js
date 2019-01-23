import React from 'react';

import './SingleUserDetail.scss';

//components
import SocialNetworks from './SocialNetworks/SocialNetworks';

const SingleUserDetail = ({ user, exitUser }) => {
  const findMe = (Object.keys(user.links).length > 0 ? <h4>Find me on</h4> : null);
  return (
    <div className="single-user-detail col col-lg-6 d-flex h-100 d-flex justify-content-center justify-content-lg-end align-items-lg-center">
      <div className="single-user-detail-text d-flex flex-column mt-3">

          <h5 className="single-user-detail-exit mr-3 text-white align-self-end h-0" onClick={exitUser} >x</h5>

          <h2 className="font-weight-bold">{user.name}</h2>
          <h3 className="text-white font-weight-bold">{user.title}</h3>
          <p className="mt-0 mt-lg-3">{user.desc}</p>
          {findMe}
          <SocialNetworks links={user.links} />
      </div>
    </div>
  );
}

export default SingleUserDetail;