import React from 'react'

//components
import UserList from './UserList/UserList';
import LearnMore from './LearnMore/LearnMore';
import ErrorBoundry from '../ErrorBoundry';

const UserInactive = ({ loadUser }) => {
  return (
    <div className="row h-100 d-flex flex-column flex-lg-row">
      {/* Left Section */}
      <ErrorBoundry>
        <UserList loadUser={loadUser} />
      </ErrorBoundry>

      {/* Right Section */}
      <LearnMore />
    </div>
  );
};

export default UserInactive;