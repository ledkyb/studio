import React from 'react';

import './LearnMore.scss';

const LearnMore = () => {
  return(
    <div className="team-learn-more col col-lg-6 d-flex h-100 d-flex justify-content-center align-items-center" data-bg="dark" data-section="usersBottom">
      <div className="w-100">
          <h3 className="text-white text-center font-weight-bold">MEET</h3>
          <h2 className="text-center font-weight-bold">YOUR</h2>
          <h3 className="text-white text-center font-weight-bold">AWESOME</h3>
          <h3 className="text-white text-center font-weight-bold">CREATIVE</h3>
          <h2 className="text-white text-center font-weight-bold">TEAM</h2>
          <p className="text-center mt-3 mt-md-5 font-weight-bold">( Click on a team member to learn more )</p>
      </div>
    </div>
  );
};

export default LearnMore;