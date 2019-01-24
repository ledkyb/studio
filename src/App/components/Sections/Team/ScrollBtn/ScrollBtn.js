import React from 'react';

import './ScrollBtn.scss';

//arrow image
import arrowBtn from './Assets/leftBlack.png';
import arrowBtnW from './Assets/leftWhite.png';

const ScrollBtn = ({ prevBtnStyle, nextBtnStyle, onClickPrev, onClickNext }) => {
  const arrows = window.screen && window.screen.width <= 991 ? arrowBtnW : arrowBtn;
  return (
    <div className="team-scroll-btn-container position-absolute d-flex flex-row flex-lg-column justify-content-between align-items-center">
      <img alt="to previous team members" className="team-scroll-up-btn" style={prevBtnStyle} src={arrows} onClick={onClickPrev} />
      <img alt="to more team members" className="team-scroll-down-btn mb-0 mb-lg-5" style={nextBtnStyle} src={arrows} onClick={onClickNext} />
    </div>
  );
};

export default ScrollBtn;
