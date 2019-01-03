import React, { Component } from 'react';
import './About.scss';
import Scroller from '../../Scroller/Scroller';



class About extends Component {
    componentWillMount(){

    }

    render(){
        return(
          <section id='about'>
          <div className='container p-0' >
            <div className='row p-0'>
              <div className='desktop col-lg-6'>
                <p className='about-title big-john py-4 text-white'>NOT YOUR <br />AVERAGE STUDIO</p>


                <p className='desktop d-none d-lg-block avenir-light text-white'>We take advantage of bleeding edge technology to provide you with the power of an in-house creative team at a fraction of the cost.
                </p>
                <ul className='about-list desktop d-none d-lg-block avenir-light text-white pb-5'>
                  <li className='about-list-item'><span className='diamond diamond-wh'></span>Exclusively Online</li>

                  <li className='about-list-item'><span className='diamond diamond-wh'></span>Customer Centric</li>

                  <li className='about-list-item'><span className='diamond diamond-wh'></span>Heavily Invest in Research & Development</li>

                  <li className='about-list-item'><span className='diamond diamond-wh'></span>Active Non-profit Supporter</li>

                  <li className='about-list-item'><span className='diamond diamond-wh'></span>Honest & Straightforward</li>
                </ul>
            </div>


              <div className='about-content col-lg-6'>
                <p className='avenir-light pb-5'>Ledkyb Studios is based in the Inland Empire and we operate exclusively
                online. This allows us to leverage our low overhead to invest in powerful in-house
                tools. Our team is composed of designers, developers and project managers who are
                passionate about what they do.
                </p>
                <ul className='row about-list d-none d-lg-block'>
                  <li className='about-list-item'><span className='diamond'></span><a href="../Team/Team">Meet Your Team</a></li>

                  <li className='about-list-item'><span className='diamond'></span><a href="../Services/Services">Services We Offer</a></li>

                  <li className='about-list-item'><span className='diamond'></span><a href="../Blog/Blog">Check Our Blog Out</a></li>
                </ul>


                <div className='art-rocket'>

                </div>

              </div>




            </div>
          </div>
          </section>
        )
    }
}


export default About;
