import React, { Component } from 'react';

import './UserList.scss';

//components
import UserItem from './UserItem/UserItem';
import ScrollBtn from '../../ScrollBtn/ScrollBtn';

//Scroll Animation
import { ScrollAnim } from '../../ScrollAnim/ScrollAnim';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.scrollAnim = null;
    this.groupElement = null;

    this.state = {
      hasError: false,
      teamList: [],
      currentGroup: [],
      showPrevArrow: { opacity: "0", cursor: "default" },
      showNextArrow: { opacity: "1", cursor: "pointer" },
      isMobile: false
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkIfMobile);
    this.scrollAnim = new ScrollAnim(
      this.groupElement,
      this.prevUserGroup,
      this.nextUserGroup
    );
    this.scrollAnim.initScrollAnim();

    //Fetch team data and rerenders screen with team
    fetch('https://api.ledkyb.com/api/members')
    .then(response => response.json())
    .then(team => {
      const componentList = team.map((user, i) => {
        return (<UserItem key={i} user={user} loadUser={this.props.loadUser} />);
      });
      this.setState({ teamList: componentList });
    })
    .then(() => this.checkIfMobile())
    .catch(err => {
      this.setState({ hasError: true });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkIfMobile);
  }

  checkIfMobile = () => {
    if (document.getElementById('team-bg').offsetWidth <= 991) {
      this.setState({
        currentGroup: [this.state.teamList[0], this.state.teamList[1]],
        showPrevArrow: { opacity: "0", cursor: "default" },
        showNextArrow: { opacity: "1", cursor: "pointer" },
        isMobile: true
      });
    } else {
      this.setState({
        currentGroup: [this.state.teamList[0], this.state.teamList[1], this.state.teamList[2], this.state.teamList[3]],
        showPrevArrow: { opacity: "0", cursor: "default" },
        showNextArrow: { opacity: "1", cursor: "pointer" },
        isMobile: false
      });
    }
  }

  //Checks for mobile, active anims & current
  //position to determine which animation to play
  handleAnimScrollNext = () => {
    const endOfList = this.state.teamList[this.state.teamList.length - 1] !== this.state.currentGroup[this.state.currentGroup.length - 1];
    if (this.scrollAnim.checkActiveAnim && endOfList) {
      if (this.state.isMobile) {
        this.scrollAnim.playLeft();
      } else {
        this.scrollAnim.playDown();
      }
    }
  }

  handleAnimScrollPrev = () => {
    const startOfList = this.state.teamList[0] !== this.state.currentGroup[0];
    if (this.scrollAnim.checkActiveAnim && startOfList) {
      if (this.state.isMobile) {
        this.scrollAnim.playRight();
      } else {
        this.scrollAnim.playUp();
      }
    }
  }

  //Checks this.state.teamList for anymore users and changes state if there is
  nextUserGroup = () => {
    let currentPos = this.state.teamList.indexOf(this.state.currentGroup[this.state.currentGroup.length - 1]);
    const remainingUsers = (this.state.teamList.length - 1) - currentPos;
    let groupSize;
    if (this.state.isMobile) {
      groupSize = 2;
    } else {
      groupSize = 4;
    }

    if (remainingUsers > 0) {
      const nextGroup = [];
      let nextElem = currentPos + 1; //First index of next group
      if (remainingUsers > groupSize) {
        for (let i = 0; i < groupSize; i++) {
          nextGroup.push(this.state.teamList[nextElem]);
          nextElem++;
        }
      } else {
        for (let i = 0; i < remainingUsers; i++) {
          nextGroup.push(this.state.teamList[nextElem]);
          nextElem++;
          this.setState({
            showNextArrow: { opacity: "0", cursor: "default" }
          });
        }
      }
      this.setState({
        currentGroup: nextGroup,
        showPrevArrow: { opacity: "1", cursor: "pointer" }
      });
    }
  }

  //Reverse logic of handleNextUserGroup
  prevUserGroup = () => {
    let currentPos = this.state.teamList.indexOf(this.state.currentGroup[0]);
    let groupSize;
    if (this.state.isMobile) {
      groupSize = 2;
    } else {
      groupSize = 4;
    }

    if (currentPos >= groupSize) {
      const prevGroup = [];
      let prevElem = currentPos - 1;
      for (let i = 0; i < groupSize; i++) {
        prevGroup.unshift(this.state.teamList[prevElem]);
        prevElem--;
      }
      if (currentPos === groupSize) {
        this.setState({
          showPrevArrow: { opacity: "0", cursor: "default" }
        })
      }

      this.setState({
        currentGroup: prevGroup,
        showNextArrow: { opacity: "1", cursor: "pointer" }
      });
    }
  }

  render() {
    if(this.state.hasError){
      throw new Error('Failed to load user');
    }
    return (
      <div className=" team-user-container col col-lg-6 d-flex flex-column justify-content-center align-items-center" data-bg="light" data-section="usersTop">

        <h1 className="d-block d-lg-none mt-5 pt-3 mt-md-2">Our Team</h1>
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
