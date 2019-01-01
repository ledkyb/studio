import React, { Component } from 'react';
import './About.scss';
import Scroller from '../../Scroller/Scroller';


class About extends Component {
    componentWillMount(){

    }

    render(){
        return(
          <section className='row about' >
            <div className='container desktop col-lg-6 m-0' style={{background: '#ef3c24'}}>
              <p className='section-title big-john py-3 text-white'>NOT YOUR <br />AVERAGE STUDIO</p>

              <div className='desktop d-none d-lg-block avenir-light text-white'>
                <p>We take advantage of bleeding edge technology to provide you with the power of an in-house creative team at a fraction of the cost.
                </p>
                <ul className='about-list'>
                  <li className='about-list-item'><span className='diamond'></span>Exclusively Online</li>

                  <li className='about-list-item'><span className='diamond'></span>Customer Centric</li>

                  <li className='about-list-item'><span className='diamond'></span>Heavily Invest in Research & Development</li>

                  <li className='about-list-item'><span className='diamond'></span>Active Non-profit Supporter</li>

                  <li className='about-list-item'><span className='diamond'></span>Honest & Straightforward</li>
                </ul>
              </div>


            </div>
            <div className='container about-content col-lg-6'>
              <p className='avenir-light'>Ledkyb Studios is based in the Inland Empire and we operate exclusively
              online. This allows us to leverage our low overhead to invest in powerful in-house
              tools. Our team is composed of designers, developers and project managers who are
              passionate about what they do.
              </p>
              <ul className='row about-list d-none d-lg-block'>
                <li className='about-list-item'><span className='diamond orange'></span><a href="#">Meet Your Team</a></li>

                <li className='about-list-item'><span className='diamond orange'></span><a href="#">Services We Offer</a></li>

                <li className='about-list-item'><span className='diamond orange'></span><a href="#">Check Our Blog Out</a></li>
              </ul>
            </div>

            <div className='art-rocket'>

            </div>


            <Scroller/>

          </section>
        )
    }
}


export default About;
