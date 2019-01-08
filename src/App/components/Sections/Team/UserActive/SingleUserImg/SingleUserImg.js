import React, { Component } from 'react';

import './SingleUserImg.scss';

//components
import ScrollBtn from '../../ScrollBtn/ScrollBtn';

//Scroll Animation
import { ScrollAnim } from '../../ScrollAnim/ScrollAnim';

class SingleUserImg extends Component{
  constructor(props){
    super(props);

    this.scrollAnim = null;
    this.imgElement = null;

    this.state = {
      isMobile: false
    }
  }

  componentDidMount(){
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfMobile);
    this.scrollAnim = new ScrollAnim(
      this.imgElement, 
      () => this.props.onPrev(this.props.user), 
      () => this.props.onNext(this.props.user)
    );
    this.scrollAnim.initScrollAnim();
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

  //Checks for mobile, active anims & current
  //position to determine which animation to play
  handleAnimScrollNext = () => {
    const endOfList = this.props.endOfNext;
    if(this.scrollAnim.checkActiveAnim && !endOfList){
      if(this.state.isMobile){
        this.scrollAnim.playLeft();
      } else {
        this.scrollAnim.playDown();
      }
    }
  }

  handleAnimScrollPrev = () => {
    const startOfList = this.props.endOfPrev;
    if(this.scrollAnim.checkActiveAnim && !startOfList){
      if(this.state.isMobile){
        this.scrollAnim.playRight();
      } else {
        this.scrollAnim.playUp();
      }
    }
  }

  render(){
    const { user, showPrevArrow, showNextArrow } = this.props;
    return (
      <div className="single-user-img col col-lg-6 h-100 d-flex flex-row justify-content-center align-items-center">
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
