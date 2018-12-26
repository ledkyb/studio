import React, { Component } from 'react';
import { TimelineLite } from 'gsap';  

import './SingleUserImg.scss';

//components
import ScrollBtn from '../ScrollBtn/ScrollBtn';

class SingleUserImg extends Component{
  constructor(props){
    super(props);

    this.imgElement = null;
    this.animScrollDown = null; 
    this.animScrollRight = null; 
    this.animScrollUp = null;
    this.animScrollLeft = null;

    this.state = {
      isMobile: false
    }
  }

  componentDidMount(){
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfMobile);
    this.initScrollAnim();
  }

  checkIfMobile = () => {
    if(window.innerWidth <= 991){
      this.setState({
        isMobile: true
      });
    } else {
      this.setState({
        isMobile: false
      });
    }
  }

  initScrollAnim = () => {
    //Initialize scrolling animations
    this.animScrollDown = new TimelineLite({ 
      paused:true,
      onComplete: () => {
        this.animScrollDown.restart();
        this.animScrollDown.pause();
      }
    })
    .to(this.imgElement, 0.5, {y: -75, opacity: 0})
    .call(this.onNextUser)
    .to(this.imgElement, 0, {y: 75})
    .to(this.imgElement, 0.5, {y: 0, opacity: 1});

    this.animScrollLeft = new TimelineLite({
      paused: true,
      onComplete: () => {
        this.animScrollLeft.restart();
        this.animScrollLeft.pause();
      }
    })
    .to(this.imgElement, 0.5, {x: -35, opacity: 0})
    .call(this.onNextUser)
    .to(this.imgElement, 0, {x: 35})
    .to(this.imgElement, 0.5, {x: 0, opacity: 1});

    this.animScrollUp = new TimelineLite({ 
      paused:true,
      onComplete: () => {
        this.animScrollUp.restart();
        this.animScrollUp.pause();
      }
    })
    .to(this.imgElement, 0.5, {y: 75, opacity: 0})
    .call(this.onPrevUser)
    .to(this.imgElement, 0, {y: -75})
    .to(this.imgElement, 0.5, {y: 0, opacity: 1});

    this.animScrollRight = new TimelineLite({
      paused: true,
      onComplete: () => {
        this.animScrollRight.restart();
        this.animScrollRight.pause();
      }
    })
    .to(this.imgElement, 0.5, {x: 35, opacity: 0})
    .call(this.onPrevUser)
    .to(this.imgElement, 0, {x: -35})
    .to(this.imgElement, 0.5, {x: 0, opacity: 1});
  }

  onNextUser = () => {
    this.props.onNext(this.props.user);
  };

  onPrevUser = () => {
    this.props.onPrev(this.props.user);
  }

  handleAnimScrollNext = () => {
    const endOfList = this.props.endOfNext;
    const checkActiveAnim = (!this.animScrollDown.isActive() && !this.animScrollUp.isActive());
    if(checkActiveAnim && !endOfList){
      if(this.state.isMobile){
        this.animScrollLeft.play();
      } else {
        this.animScrollDown.play();
      }
    }
  }

  handleAnimScrollPrev = () => {
    const startOfList = this.props.endOfPrev;
    const checkActiveAnim = (!this.animScrollDown.isActive() && !this.animScrollUp.isActive());
    if(checkActiveAnim && !startOfList){
      if(this.state.isMobile){
        this.animScrollRight.play();
      } else {
        this.animScrollUp.play();
      }
    }
  }

  render(){
    const { user, onPrev, onNext, showPrevArrow, showNextArrow, loadUser } = this.props;
    return (
      <div className="single-user-img col col-lg-6 h-100 d-flex flex-row justify-content-center justify-content-lg-start align-items-center">
        <img ref={img => this.imgElement = img} src={user.img} alt={user.name} />
        <ScrollBtn 
          onClickPrev={this.handleAnimScrollPrev} 
          onClickNext={this.handleAnimScrollNext} 
          prevBtnStyle={showPrevArrow}
          nextBtnStyle={showNextArrow}
        />
      </div>
    );
  }
};

export default SingleUserImg;
