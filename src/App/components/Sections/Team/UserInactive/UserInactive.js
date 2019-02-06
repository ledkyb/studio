import React from 'react'

//components
import LearnMore from './LearnMore/LearnMore';
import ErrorBoundry from '../ErrorBoundry';
import TeamLoading from '../TeamLoading';

//lazy load components
const UserList = React.lazy(() => import('./UserList/UserList'));

const UserInactive = ({ loadUser }) => {
  return (
    <div className="row h-100 d-flex flex-column flex-lg-row">
      {/* Left Section */}
      <ErrorBoundry>
        <React.Suspense fallback={<TeamLoading />}>
          <UserList loadUser={loadUser} />
        </React.Suspense>
      </ErrorBoundry>

      {/* Right Section */}
      <LearnMore />
    </div>
  );
};

export default UserInactive;