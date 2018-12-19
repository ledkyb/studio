import React, { Component } from 'react';

import './UserList.scss';

import userImg from './UserItem/Assets/user.jpg';

//components
import UserItem from './UserItem/UserItem';

class UserList extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentGroup: [this.userList[0], this.userList[1], this.userList[2], this.userList[3]],
    }
  }

  //Add More Users HERE
  userList = [
    <UserItem name="test1" title="testTitle1" img={userImg} />, 
    <UserItem name="test2" title="testTitle2" img={userImg} />, 
    <UserItem name="test3" title="testTitle3" img={userImg} />, 
    <UserItem name="test4" title="testTitle4" img={userImg} />,
    <UserItem name="test5" title="testTitle5" img={userImg} />,
    <UserItem name="test6" title="testTitle6" img={userImg} />,
    <UserItem name="test4" title="testTitle4" img={userImg} />,
    <UserItem name="test5" title="testTitle5" img={userImg} />,
    <UserItem name="test6" title="testTitle6" img={userImg} />,
    <UserItem name="test4" title="testTitle4" img={userImg} />,
    <UserItem name="test5" title="testTitle5" img={userImg} />,
    <UserItem name="test6" title="testTitle6" img={userImg} />,
    <UserItem name="test7" title="testTitle7" img={userImg} />,
    <UserItem name="test8" title="testTitle8" img={userImg} />,
    <UserItem name="test7" title="testTitle7" img={userImg} />,
  ];

  handleNextUserGroup = () => {
    let currentPos = this.userList.indexOf(this.state.currentGroup[this.state.currentGroup.length-1]);
    const remainingUsers = (this.userList.length-1) - currentPos;

    //Checks userList for anymore users and changes state if there is
    if(remainingUsers > 0){
      const nextGroup = [];
      let nextElem = currentPos + 1; //First index of next group
      if(remainingUsers >= 4){
        for(let i = 0; i < 4; i++){
          nextGroup.push(this.userList[nextElem]);
          nextElem++;
        }
      } else {
        for(let i = 0; i < remainingUsers; i++){
          nextGroup.push(this.userList[nextElem]);
          nextElem++;
        }
      }
      this.setState({
        currentGroup: nextGroup
      });
    }

  }
  

  //Reverse logic of handleNextUserGroup
  handlePrevUserGroup = () => {
    let currentPos = this.userList.indexOf(this.state.currentGroup[0]);
    
    //Checks userList for anymore previous users in list
    if(currentPos >= 4){
      const prevGroup = [];
      let prevElem = currentPos-1;
      if(currentPos >= 4){
        for(let i = 0; i < 4; i++){
          prevGroup.unshift(this.userList[prevElem]);
          prevElem--;
        }
      } 

      this.setState({
        currentGroup: prevGroup
      });
    }

  }

  render(){
    return (
      <div className=" team-user-container col-6 h-75 d-flex flex-column align-items-center">

        <button onClick={this.handlePrevUserGroup}>Up</button>

        <div ref={div => this.myElement = div} className="team-user-item-list d-flex flex-wrap justify-content-between align-items-center">
          {this.state.currentGroup}
        </div>

        <button onClick={this.handleNextUserGroup}>Down</button>
      </div>
    );
  }
};

export default UserList;
