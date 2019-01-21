import React, { Component } from 'react';
import './About.scss';

class About extends Component {
    render(){
        return(
          <section id='about' className='row' data-bg="dark" data-section="about">
            <div className='container-fluid' >
              <div className='row h-100 align-content-start pt-5 align-content-lg-stretch pt-lg-0'>


                <div className="col-12 col-lg-6 orange-bg">

                    <div className='about-content-container float-right pt-5'>
                      <span className='about-title big-john text-white'>NOT YOUR <br />AVERAGE STUDIO</span>


                      <p className='desktop d-none d-lg-block avenir-light text-white'>We take advantage of bleeding edge technology to provide you with the power of an in-house creative team at a fraction of the cost.
                      </p>
                      <ul className='about-list desktop d-none d-lg-block avenir-light text-white pt-3'>
                        <li className='about-list-item about-li-top'><span className='diamond diamond-wh'/>Exclusively Online</li>

                        <li className='about-list-item about-li-top'><span className='diamond diamond-wh'/>Customer Centric</li>

                        <li className='about-list-item about-li-top'><span className='diamond diamond-wh'/>Heavily Invest in Research & Development</li>

                        <li className='about-list-item about-li-top'><span className='diamond diamond-wh'/>Active Non-profit Supporter</li>

                        <li className='about-list-item about-li-top'><span className='diamond diamond-wh'/>Honest & Straightforward</li>
                      </ul>
                    </div>
                </div>


                <div className="col-12 col-lg-6 rocket-background">
                  <div className='about-content'>
                    <div className='about-content-container float-left pt-lg-5'>
                      <span className='avenir-light'>Ledkyb Studios is based in the Inland Empire and we operate exclusively
                      online. This allows us to leverage our low overhead to invest in powerful in-house
                      tools. Our team is composed of designers, developers and project managers who are
                      passionate about what they do.
                      </span>
                      <ul className='row about-list d-none d-lg-block pt-3'>
                        <li className='about-list-item'><span className='diamond' /><a href="../Team/Team">Meet Your Team</a></li>

                        <li className='about-list-item'><span className='diamond' /><a href="../Services/Services">Services We Offer</a></li>

                        <li className='about-list-item'><span className='diamond' /><a href="../Blog/Blog">Check Our Blog Out</a></li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>
        )
    }
}


export default About;
