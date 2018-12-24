import React, { Component } from 'react'; 

import './Team.scss';

//components
import UserList from './UserList/UserList';
import LearnMore from './LearnMore/LearnMore';

class Team extends Component {
    constructor(props){
        super(props);
        this.state = {
            isMobile: false
        }
    }
    componentWillMount(){
        this.checkIfMobile();
        window.addEventListener('resize', this.checkIfMobile)
    }

    checkIfMobile = () => {
        if(window.innerWidth <= 991){
            this.setState({ isMobile: true });
        } else {
            this.setState({ isMobile: false });
        }
    }

    render(){
        return(
            <section id="team" className="row">

                {/* Team Section Background */}
                <div className="team-bg position-absolute w-100 d-flex flex-column flex-lg-row">
                    <div className="team-left-bg w-100 h-100 d-flex align-items-end">
                        <div className="team-btn-bg d-flex d-lg-none w-100"></div>
                    </div>
                    <div className="team-right-bg w-100 h-100"></div>
                </div>

                <div className="container">
                    <div className="row h-100 d-flex flex-column flex-lg-row">
                        {/* Left Section */}
                        <UserList checkIfMobile={this.checkIfMobile} />

                        {/* Right Section */}
                        <LearnMore />
                    </div>
                </div>

            </section>
        )
    }
}


export default Team;