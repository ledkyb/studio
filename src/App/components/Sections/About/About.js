import React, { Component } from 'react';
import './About.scss';
import Scroller from '../../Scroller/Scroller';



class About extends Component {
    componentWillMount(){

    }

    render(){
        return(
            <div className="container" style={{background: 'pink', height: '150px'}} data-bg="dark" data-section="about">
                <p>About</p>
            </div>
          
        )
    }
}


export default About;
