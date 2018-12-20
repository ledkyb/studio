import React, { Component } from 'react';
import { TimelineLite } from 'gsap';  

import './UserList.scss';

//assets
import userImg from './UserItem/Assets/user.jpg';
import arrowBtn from './Assets/leftBlack.png';

//components
import UserItem from './UserItem/UserItem';

  //Add More Users HERE
const userList = [
  <UserItem name="test1" title="Title1" img={userImg} />, 
  <UserItem name="test2" title="Title2" img={userImg} />, 
  <UserItem name="test3" title="Title3" img={userImg} />, 
  <UserItem name="test4" title="Title4" img={userImg} />,
  <UserItem name="test5" title="Title5" img={userImg} />,
  <UserItem name="test6" title="Title6" img={userImg} />,
  <UserItem name="test7" title="Title7" img={userImg} />,
  <UserItem name="test8" title="Title8" img={userImg} />,
  <UserItem name="test9" title="Title9" img={userImg} />,
  <UserItem name="test10" title="Title10" img={userImg} />,
  <UserItem name="test11" title="Title11" img={userImg} />,
  <UserItem name="test12" title="Title12" img={userImg} />,
  <UserItem name="test13" title="Title13" img={userImg} />,
  <UserItem name="test14" title="Title14" img={userImg} />,
  <UserItem name="test15" title="Title15" img={userImg} />,
];

class UserList extends Component {
  constructor(props){
    super(props);
    this.groupElement = null;
    this.list = null;
    this.animScrollDown = null; 
    this.animScrollRight = null; 
    this.animScrollUp = null;
    this.animScrollLeft = null;
    this.state = {
      currentGroup: [userList[0], userList[1], userList[2], userList[3]],
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
        currentGroup: [userList[0], userList[1]], 
        showPrevArrow: {opacity: "0", cursor: "default"},
        showNextArrow: {opacity: "1", cursor: "pointer"},
        isMobile: true
      });
    } else {
      this.setState({
        currentGroup: [userList[0], userList[1], userList[2], userList[3]], 
        showPrevArrow: {opacity: "0", cursor: "default"},
        showNextArrow: {opacity: "1", cursor: "pointer"},
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
    .to(this.groupElement, 0.5, {y: -200, opacity: 0})
    .call(this.nextUserGroup)
    .to(this.groupElement, 0, {y: 200})
    .to(this.groupElement, 0.5, {y: 0, opacity: 1});

    this.animScrollLeft = new TimelineLite({
      paused: true,
      onComplete: () => {
        this.animScrollLeft.restart();
        this.animScrollLeft.pause();
      }
    })
    .to(this.groupElement, 0.5, {x: -200, opacity: 0})
    .call(this.nextUserGroup)
    .to(this.groupElement, 0, {x: 200})
    .to(this.groupElement, 0.5, {x: 0, opacity: 1});

    this.animScrollUp = new TimelineLite({ 
      paused:true,
      onComplete: () => {
        this.animScrollUp.restart();
        this.animScrollUp.pause();
      }
    })
    .to(this.groupElement, 0.5, {y: 200, opacity: 0})
    .call(this.prevUserGroup)
    .to(this.groupElement, 0, {y: -200})
    .to(this.groupElement, 0.5, {y: 0, opacity: 1});

    this.animScrollRight = new TimelineLite({
      paused: true,
      onComplete: () => {
        this.animScrollRight.restart();
        this.animScrollRight.pause();
      }
    })
    .to(this.groupElement, 0.5, {x: 200, opacity: 0})
    .call(this.prevUserGroup)
    .to(this.groupElement, 0, {x: -200})
    .to(this.groupElement, 0.5, {x: 0, opacity: 1});

  }

  handleAnimScrollNext = () => {
    const endOfList = userList[userList.length-1] !== this.state.currentGroup[this.state.currentGroup.length-1];
    const checkActiveAnim = (!this.animScrollDown.isActive() && !this.animScrollUp.isActive());
    if(checkActiveAnim && endOfList){
      if(this.state.isMobile){
        this.animScrollLeft.play();
      } else {
        this.animScrollDown.play();
      }
    }
  }

  handleAnimScrollPrev = () => {
    const startOfList = userList[0] !== this.state.currentGroup[0];
    const checkActiveAnim = (!this.animScrollDown.isActive() && !this.animScrollUp.isActive());
    if(checkActiveAnim && startOfList){
      if(this.state.isMobile){
        this.animScrollRight.play();
      } else {
        this.animScrollUp.play();
      }
    }
  }

  nextUserGroup = () => {
    let currentPos = userList.indexOf(this.state.currentGroup[this.state.currentGroup.length-1]);
    const remainingUsers = (userList.length-1) - currentPos;
    let groupSize;
    if(this.state.isMobile){
      groupSize = 2;
    } else {
      groupSize = 4;
    }

    //Checks userList for anymore users and changes state if there is
    if(remainingUsers > 0){
      const nextGroup = [];
      let nextElem = currentPos + 1; //First index of next group
      if(remainingUsers >= groupSize){
        for(let i = 0; i < groupSize; i++){
          nextGroup.push(userList[nextElem]);
          nextElem++;
        }
      } else {
        for(let i = 0; i < remainingUsers; i++){
          nextGroup.push(userList[nextElem]);
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
    let currentPos = userList.indexOf(this.state.currentGroup[0]);
    let groupSize;
    if(this.state.isMobile){
      groupSize = 2;
    } else {
      groupSize = 4;
    }
    
    //Checks userList for anymore previous users in list
    if(currentPos >= groupSize){
      const prevGroup = [];
      let prevElem = currentPos-1;
      for(let i = 0; i < groupSize; i++){
        prevGroup.unshift(userList[prevElem]);
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
      <div className=" team-user-container col col-lg-6 h-100 d-flex flex-column justify-content-center align-items-center">

        <div ref={div => this.groupElement = div} className="team-user-item-list d-flex flex-wrap justify-content-around justify-content-lg-between align-items-end align-items-lg-start">
          {this.state.currentGroup}
        </div>

        <div className="team-scroll-btn-container position-absolute d-flex flex-row flex-lg-column justify-content-between align-items-center">
          <img className="team-scroll-up-btn" style={this.state.showPrevArrow} src={arrowBtn} onClick={this.handleAnimScrollPrev} />
          <img className="team-scroll-down-btn mb-0 mb-lg-5" style={this.state.showNextArrow} src={arrowBtn} onClick={this.handleAnimScrollNext} />
        </div>
        
      </div>
    );
  }
};

export default UserList;
