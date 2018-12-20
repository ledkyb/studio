import React, { Component } from 'react';
import { TimelineLite } from 'gsap';  

import './UserList.scss';

//assets
import userImg from './UserItem/Assets/user.jpg';
import arrowBtn from './Assets/left.png'

//components
import UserItem from './UserItem/UserItem';

  //Add More Users HERE
const userList = [
  <UserItem name="test1" title="testTitle1" img={userImg} />, 
  <UserItem name="test2" title="testTitle2" img={userImg} />, 
  <UserItem name="test3" title="testTitle3" img={userImg} />, 
  <UserItem name="test4" title="testTitle4" img={userImg} />,
  <UserItem name="test5" title="testTitle5" img={userImg} />,
  <UserItem name="test6" title="testTitle6" img={userImg} />,
  <UserItem name="test7" title="testTitle7" img={userImg} />,
  <UserItem name="test8" title="testTitle8" img={userImg} />,
  <UserItem name="test9" title="testTitle9" img={userImg} />,
  <UserItem name="test10" title="testTitle10" img={userImg} />,
  <UserItem name="test11" title="testTitle11" img={userImg} />,
  <UserItem name="test12" title="testTitle12" img={userImg} />,
  <UserItem name="test13" title="testTitle13" img={userImg} />,
  <UserItem name="test14" title="testTitle14" img={userImg} />,
  <UserItem name="test15" title="testTitle15" img={userImg} />,
];

class UserList extends Component {
  constructor(props){
    super(props);
    this.groupElement = null;
    this.animScrollDown = null;  
    this.animScrollUp = null;
    this.state = {
      currentGroup: [userList[0], userList[1], userList[2], userList[3]],
      showUpArrow: {opacity: "0"}
    }
  }

  componentDidMount(){
    this.initScrollAnim();
  } 

  initScrollAnim = () => {
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
  }

  handleAnimScrollDown = () => {
    const endOfList = userList[userList.length-1] !== this.state.currentGroup[this.state.currentGroup.length-1];
    const checkActiveAnim = (!this.animScrollDown.isActive() && !this.animScrollUp.isActive());
    if(checkActiveAnim && endOfList){
      this.animScrollDown.play();
    }
  }

  handleAnimScrollUp = () => {
    const startOfList = userList[0] !== this.state.currentGroup[0];
    const checkActiveAnim = (!this.animScrollDown.isActive() && !this.animScrollUp.isActive());
    if(checkActiveAnim && startOfList){
      this.animScrollUp.play();
    }
  }

  nextUserGroup = () => {
    let currentPos = userList.indexOf(this.state.currentGroup[this.state.currentGroup.length-1]);
    const remainingUsers = (userList.length-1) - currentPos;

    //Checks userList for anymore users and changes state if there is
    if(remainingUsers > 0){
      const nextGroup = [];
      let nextElem = currentPos + 1; //First index of next group
      if(remainingUsers >= 4){
        for(let i = 0; i < 4; i++){
          nextGroup.push(userList[nextElem]);
          nextElem++;
        }
      } else {
        for(let i = 0; i < remainingUsers; i++){
          nextGroup.push(userList[nextElem]);
          nextElem++;
        }
      }
      this.setState({
        currentGroup: nextGroup,
        showUpArrow: {opacity: "1"}
      });
    }
  }
  

  //Reverse logic of handleNextUserGroup
  prevUserGroup = () => {
    let currentPos = userList.indexOf(this.state.currentGroup[0]);
    
    //Checks userList for anymore previous users in list
    if(currentPos >= 4){
      const prevGroup = [];
      let prevElem = currentPos-1;
      for(let i = 0; i < 4; i++){
        prevGroup.unshift(userList[prevElem]);
        prevElem--;
      }
      if(currentPos == 4){
        this.setState({
          showUpArrow: {opacity: "0"}
        })
      } 

      this.setState({
        currentGroup: prevGroup
      });
    } 
  }

  render(){
    return (
      <div className=" team-user-container col-6 h-100 d-flex flex-column justify-content-between align-items-center">

        <img className="team-scroll-up-btn" style={this.state.showUpArrow} src={arrowBtn} onClick={this.handleAnimScrollUp} />

        <div ref={div => this.groupElement = div} className="team-user-item-list d-flex flex-wrap justify-content-between align-items-center">
          {this.state.currentGroup}
        </div>

        <img className="team-scroll-down-btn" src={arrowBtn} onClick={this.handleAnimScrollDown} />
      </div>
    );
  }
};

export default UserList;
