import React from 'react';

import './ScrollBtn.scss';

//arrow image
import arrowBtn from './Assets/leftBlack.png';

const ScrollBtn = ({ prevBtnStyle, nextBtnStyle, onClickPrev, onClickNext }) => {
  return (
    <div className="team-scroll-btn-container position-absolute d-flex flex-row flex-lg-column justify-content-between align-items-center">
      <img alt="to previous team members" className="team-scroll-up-btn" style={prevBtnStyle} src={arrowBtn} onClick={onClickPrev} />
      <img alt="to more team members" className="team-scroll-down-btn mb-0 mb-lg-5" style={nextBtnStyle} src={arrowBtn} onClick={onClickNext} />
    </div>
  );
};

export default ScrollBtn;
