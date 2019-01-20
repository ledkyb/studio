import React from 'react';

//components
import SingleUserImg from './SingleUserImg/SingleUserImg';
import SingleUserDetail from './SingleUserDetail/SingleUserDetail';
import ErrorBoundry from '../ErrorBoundry';

const UserActive = ({ user, onPrev, onNext, showPrevArrow, showNextArrow, endOfPrev, endOfNext, exitUser }) => {
  return (
    <div className="row h-100 d-flex flex-column flex-lg-row">

      <ErrorBoundry>
        {/* Left Section */}
        <SingleUserImg 
            user={user} 
            onPrev={onPrev} 
            onNext={onNext} 
            showPrevArrow={showPrevArrow}
            showNextArrow={showNextArrow}
            endOfNext={endOfNext}
            endOfPrev={endOfPrev}
        />

        {/* Right Section */}
        <SingleUserDetail 
            user={user}
            exitUser={exitUser}
        />
      </ErrorBoundry>

    </div>
  );
};

export default UserActive;