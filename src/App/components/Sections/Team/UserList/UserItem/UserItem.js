import React from 'react';

import './UserItem.scss';

const UserItem = ({ name, title, img }) => {
  return (
    <div className="team-user-item">

    {/* Item Hovered */}
    <div className="team-user-item-hover position-absolute justify-content-center align-items-center">
        <div className="team-user-item-hover-plus d-flex justify-content-center align-items-center">
          <div className="team-user-item-hover-x position-absolute"></div>
          <div className="team-user-item-hover-y position-absolute"></div>
        </div>
      </div>

      {/* Item */}
      <div>
        <img alt="user" src={img} />
        <div className="w-100 d-flex align-items-center py-4">
          <div className="team-user-item-line mx-3"></div>
          <div>
            <p className="font-weight-bold">{name}</p>
            <p className="team-user-item-title">{title}</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default UserItem;