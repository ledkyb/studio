import React from 'react';

import './UserItem.scss';

const UserItem = ({ user, loadUser }) => {
  let { id, firstName, lastName, role, image } = user;
  return (
    <div id={id} className="team-user-item">

    {/* Item Hovered */}
    <div onClick={() => {loadUser(user)}} className="team-user-item-hover position-absolute justify-content-center align-items-center">
        <div className="team-user-item-hover-plus d-flex justify-content-center align-items-center">
          <div className="team-user-item-hover-x position-absolute"></div>
          <div className="team-user-item-hover-y position-absolute"></div>
        </div>
      </div>

      {/* Item */}
      <div onClick={() => {loadUser(user)}} >
        <img alt="user" src={image} />
        <div className="mb-5 mb-lg-0 d-flex align-items-center py-4">
          <div className="team-user-item-line mx-1 mx-lg-3"></div>
          <div>
            <p className="font-weight-bold">{firstName} {lastName}</p>
            <p className="team-user-item-title mt-1 mt-lg-0 flex-wrap">{role}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default UserItem;