import React from 'react'

//components
import UserList from './UserList/UserList';
import LearnMore from './LearnMore/LearnMore';

const UserInactive = ({ loadUser }) => {
  return (
    <div className="row h-100 d-flex flex-column flex-lg-row">
      {/* Left Section */}
      <UserList loadUser={loadUser} />

      {/* Right Section */}
      <LearnMore />
    </div>
  );
};

export default UserInactive;