import React, { Component } from 'react';
import { TimelineLite } from 'gsap';  

import './UserList.scss';

//List of team members
import {teamInfo} from '../../team-info';

//assets
import userImg from './UserItem/Assets/user.jpg';

//components
import UserItem from './UserItem/UserItem';
import ScrollBtn from '../../ScrollBtn/ScrollBtn';

class UserList extends Component {
  constructor(props){
    super(props);

    this.groupElement = null;
    this.animScrollDown = null; 
    this.animScrollRight = null; 
    this.animScrollUp = null;
    this.animScrollLeft = null;

    //load users from team-info.js
    this.userList = teamInfo.map((user, i) => {
      return (<UserItem key={i} user={user} loadUser={this.props.loadUser} />);
    });

    this.state = {
      currentGroup: [],
      showPrevArrow: {opacity: "0", cursor: "default"},
      showNextArrow: {opacity: "1", cursor: "pointer"},
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
        currentGroup: [this.userList[0], this.userList[1]], 
        showPrevArrow: {opacity: "0", cursor: "default"},
        showNextArrow: {opacity: "1", cursor: "pointer"},
        isMobile: true
      });
    } else {
      this.setState({
        currentGroup: [this.userList[0], this.userList[1], this.userList[2], this.userList[3]], 
        showPrevArrow: {opacity: "0", cursor: "default"},
        showNextArrow: {opacity: "1", cursor: "pointer"},
        isMobile: false
      });
    }
  }

  //Initialize scrolling animations
  initScrollAnim = () => {
    this.animScrollDown = new TimelineLite({ 
      paused:true,
      onComplete: () => {
        this.animScrollDown.restart();
        this.animScrollDown.pause();
      }
    })
    .to(this.groupElement, 0.5, {y: -75, opacity: 0})
    .call(this.nextUserGroup)
    .to(this.groupElement, 0, {y: 75})
    .to(this.groupElement, 0.5, {y: 0, opacity: 1});

    this.animScrollLeft = new TimelineLite({
      paused: true,
      onComplete: () => {
        this.animScrollLeft.restart();
        this.animScrollLeft.pause();
      }
    })
    .to(this.groupElement, 0.5, {x: -15, opacity: 0})
    .call(this.nextUserGroup)
    .to(this.groupElement, 0, {x: 15})
    .to(this.groupElement, 0.5, {x: 0, opacity: 1});

    this.animScrollUp = new TimelineLite({ 
      paused:true,
      onComplete: () => {
        this.animScrollUp.restart();
        this.animScrollUp.pause();
      }
    })
    .to(this.groupElement, 0.5, {y: 75, opacity: 0})
    .call(this.prevUserGroup)
    .to(this.groupElement, 0, {y: -75})
    .to(this.groupElement, 0.5, {y: 0, opacity: 1});

    this.animScrollRight = new TimelineLite({
      paused: true,
      onComplete: () => {
        this.animScrollRight.restart();
        this.animScrollRight.pause();
      }
    })
    .to(this.groupElement, 0.5, {x: 15, opacity: 0})
    .call(this.prevUserGroup)
    .to(this.groupElement, 0, {x: -15})
    .to(this.groupElement, 0.5, {x: 0, opacity: 1});

  }

  //Checks for mobile, active anims & current
  //position to determine which animation to play
  handleAnimScrollNext = () => {
    const endOfList = this.userList[this.userList.length-1] !== this.state.currentGroup[this.state.currentGroup.length-1];
    const checkActiveAnim = (!this.animScrollDown.isActive() && !this.animScrollUp.isActive() && !this.animScrollLeft.isActive() && !this.animScrollRight.isActive());
    if(checkActiveAnim && endOfList){
      if(this.state.isMobile){
        this.animScrollLeft.play();
      } else {
        this.animScrollDown.play();
      }
    }
  }

  handleAnimScrollPrev = () => {
    const startOfList = this.userList[0] !== this.state.currentGroup[0];
    const checkActiveAnim = (!this.animScrollDown.isActive() && !this.animScrollUp.isActive() && !this.animScrollLeft.isActive() && !this.animScrollRight.isActive());
    if(checkActiveAnim && startOfList){
      if(this.state.isMobile){
        this.animScrollRight.play();
      } else {
        this.animScrollUp.play();
      }
    }
  }

  //Checks this.userList for anymore users and changes state if there is
  nextUserGroup = () => {
    let currentPos = this.userList.indexOf(this.state.currentGroup[this.state.currentGroup.length-1]);
    const remainingUsers = (this.userList.length-1) - currentPos;
    let groupSize;
    if(this.state.isMobile){
      groupSize = 2;
    } else {
      groupSize = 4;
    }

    if(remainingUsers > 0){
      const nextGroup = [];
      let nextElem = currentPos + 1; //First index of next group
      if(remainingUsers > groupSize){
        for(let i = 0; i < groupSize; i++){
          nextGroup.push(this.userList[nextElem]);
          nextElem++;
        }
      } else {
        for(let i = 0; i < remainingUsers; i++){
          nextGroup.push(this.userList[nextElem]);
          nextElem++;
          this.setState({
            showNextArrow: {opacity: "0", cursor: "default"}
          });
        }
      }
      this.setState({
        currentGroup: nextGroup,
        showPrevArrow: {opacity: "1", cursor: "pointer"}
      });
    }
  }
  

  //Reverse logic of handleNextUserGroup
  prevUserGroup = () => {
    let currentPos = this.userList.indexOf(this.state.currentGroup[0]);
    let groupSize;
    if(this.state.isMobile){
      groupSize = 2;
    } else {
      groupSize = 4;
    }
    
    if(currentPos >= groupSize){
      const prevGroup = [];
      let prevElem = currentPos-1;
      for(let i = 0; i < groupSize; i++){
        prevGroup.unshift(this.userList[prevElem]);
        prevElem--;
      }
      if(currentPos == groupSize){
        this.setState({
          showPrevArrow: {opacity: "0", cursor: "default"}
        })
      } 

      this.setState({
        currentGroup: prevGroup,
        showNextArrow: {opacity: "1", cursor: "pointer"}
      });
    } 
  }

  render(){
    return (
      <div className=" team-user-container col col-lg-6 d-flex flex-column justify-content-center align-items-center">

        <div ref={div => this.groupElement = div} className="team-user-item-list d-flex flex-wrap justify-content-around justify-content-lg-between align-items-end align-items-lg-start">
          {this.state.currentGroup}
        </div>

        <ScrollBtn 
          prevBtnStyle={this.state.showPrevArrow} 
          nextBtnStyle={this.state.showNextArrow} 
          onClickPrev={this.handleAnimScrollPrev} 
          onClickNext={this.handleAnimScrollNext} 
        />
        
      </div>
    );
  }
};

export default UserList;
