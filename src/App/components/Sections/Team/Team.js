import React, { Component } from 'react';

import './Team.scss';

import {teamInfo} from './team-info';

//components
import UserInactive from './UserInactive/UserInactive';
import UserActive from './UserActive/UserActive';

import { underline } from 'ansi-colors';

const teamList = teamInfo;

class Team extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: '',
            showPrevArrow: {opacity: "0", cursor: "default"},
            showNextArrow: {opacity: "1", cursor: "pointer"},
            endOfNext: false,
            endOfPrev: true
        }
    }

    //Loads selected active user into state
    loadUser = (user) => {
        if(teamList[0] === user){
            this.setState({ 
                currentUser: user,
                showNextArrow: {opacity: "1", cursor: "pointer"},
                showPrevArrow: {opacity: "0", cursor: "default"},
                endOfNext: false,
                endOfPrev: true
            });
        } else if (teamList[teamList.length -1] === user){
            this.setState({
                currentUser: user,
                showPrevArrow: {opacity: "1", cursor: "pointer"},
                showNextArrow: {opacity: "0", cursor: "default"},
                endOfNext: true,
                endOfPrev: false
            });
        } else {
            this.setState({ 
                currentUser: user,
                showPrevArrow: {opacity: "1", cursor: "pointer"},
                showNextArrow: {opacity: "1", cursor: "pointer"},
                endOfNext: false,
                endOfPrev: false
            })
        }
        
    }

    //Loads previous active user into state
    prevUser = (user) => {
        let userIndex = teamList.findIndex(teamUser => {
            return teamUser === user;
        });
        if(userIndex > 0){
            const prevIndex = userIndex - 1;
            if(prevIndex > 0){
                this.setState({ 
                    currentUser: teamList[prevIndex], 
                    showNextArrow: {opacity: "1", cursor: "pointer"},
                    endOfNext: false
                });
            } else {
                this.setState({ 
                    currentUser: teamList[prevIndex],
                    showPrevArrow: {opacity: "0", cursor: "default"},
                    endOfPrev: true
                });
            }
        }
    }

    //Loads next active user into state
    nextUser = (user) => {
        let userIndex = teamList.findIndex(teamUser => {
            return teamUser.id === user.id;
        });
        if(userIndex < teamList.length - 1){
            const nextIndex = userIndex + 1;
            if(nextIndex < teamList.length -1 ){
                this.setState({ 
                    currentUser: teamList[nextIndex], 
                    showPrevArrow: {opacity: "1", cursor: "pointer"},
                    endOfPrev: false
                });
            } else {
                this.setState({ 
                    currentUser: teamList[nextIndex],
                    showNextArrow: {opacity: "0", cursor: "default"},
                    endOfNext: true 
                });
            }
        } 
    }

    exitUser = () => {
        this.setState({currentUser: ''});
    }

    render(){

        //If a user is clicked this will render UserActive component
        const teamContent = (this.state.currentUser === '' ? 
            (
                <UserInactive loadUser={this.loadUser}/>
            ) 
            :(
                <UserActive 
                    user={this.state.currentUser}
                    onPrev={this.prevUser}
                    onNext={this.nextUser}
                    showPrevArrow={this.state.showPrevArrow}
                    showNextArrow={this.state.showNextArrow}
                    endOfNext={this.state.endOfNext}
                    endOfPrev={this.state.endOfPrev}
                    exitUser={this.exitUser}
                />
            )
        )

        return(
            <section id="team" className="row">

                {/* Team Section Background */}
                <div className="team-bg position-absolute w-100 d-flex flex-column flex-lg-row">
                    <div className="team-left-bg w-100 h-100 d-flex align-items-end">
                        <div className="team-btn-bg d-flex d-lg-none w-100"></div>
                    </div>
                    <div className="team-right-bg w-100 h-100"></div>
                </div>

                {/* Team Section Content */}
                <div className="container">
                    {teamContent}
                </div>

            </section>
        )
    }
}


export default Team;
