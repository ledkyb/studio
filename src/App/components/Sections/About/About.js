import React, { Component } from 'react';
import './About.scss';
import Scroller from '../../Scroller/Scroller';


class About extends Component {
    componentWillMount(){

    }

    render(){
        return(
          <section className='row' style={{background: '#ef3c24'}}>
            <div className='container desktop col-lg-6'>
              <p className='section-title big-john py-3 text-white'>NOT YOUR <br />AVERAGE STUDIO</p>

              <div className='desktop d-none d-lg-block avenir-light text-white'>
                <p>We take advantage of bleeding edge technology to provide you with the power of an in-house creative team at a fraction of the cost.
                </p>
                <ul className='row services-list'>
                  <li className='services-list-item'><span className='diamond'></span>Exclusively Online</li>

                  <li className='services-list-item'><span className='diamond'></span>Customer Centric</li>

                  <li className='services-list-item'><span className='diamond'></span>Heavily Invest in Research & Development</li>

                  <li className='services-list-item'><span className='diamond'></span>Active Non-profit Supporter</li>

                  <li className='services-list-item'><span className='diamond'></span>Honest & Straightforward</li>
                </ul>


              </div>
            </div>
            <div className='container about-content col-lg-6'>
              <p className='avenir-light mr-3 py-3'>Ledkyb Studios is based in the Inland Empire and we operate exclusively
              online. This allows us to leverage our low overhead to invest in powerful in-house
              tools. Our team is composed of designers, developers and project managers who are
              passionate about what they do.
              </p>
              <ul className='row services-list d-none d-lg-block'>
                <li className='services-list-item'><span className='diamond'></span>Meet Your Team</li>

                <li className='services-list-item'><span className='diamond'></span>Services We Offer</li>

                <li className='services-list-item'><span className='diamond'></span>Check Our Blog Out</li>
              </ul>
            </div>

            <div className='art-rocket'>

            </div>

            <div className="row min-height-100">
              <div className="mt-md-4">
                <Scroller/>
              </div>
            </div>
          </section>
        )
    }
}


export default About;
