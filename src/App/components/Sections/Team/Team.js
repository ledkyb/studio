import React, { Component } from 'react'; 

import './Team.scss';

//components
import UserList from './UserList/UserList';
import LearnMore from './LearnMore/LearnMore';

class Team extends Component {
    componentWillMount(){

    }

    render(){
        return(
            <section id="team" className="row">
                <div className="container-fluid">

                    <div className="row h-100 d-flex flex-column flex-lg-row">
                        {/* Left Section */}
                        <UserList />

                        {/* Right Section */}
                        <LearnMore />
                    </div>

                </div>
            </section>
        )
    }
}


export default Team;