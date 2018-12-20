import React, { Component } from 'react'; 

import './Team.scss';

//components
import UserList from './UserList/UserList';
import LearnMore from './LearnMore/LearnMore';
import NavBar from '../../Nav/Nav';

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
        let navBar;
        if(this.state.isMobile){
            navBar = <NavBar />
        } else {
            navBar = null;
        }
        return(
            <section id="team" className="row">
                <div className="container-fluid">

                    <div className="row h-100 d-flex flex-column flex-lg-row">

                        {navBar}

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