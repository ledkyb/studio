import React, {Component} from 'react';
import './Services.scss';

import cloud3 from './Assets/cloud-3.svg';
import cloudTwo from './Assets/cloud-two.svg';
import servicesImage from './Assets/services-art.svg';

import Scroller from '../../Scroller/Scroller';

class Services extends Component {
  render() {
    return (
        <section id="services" className="row bg-white">
          <div className="container">

            <div className='row mt-5 mb-3'>
              <p className='section-title big-john pl-3'>SERVICES
                <span
                    className='avenir-light p-3'>/</span>
                <span
                    className='avenir-light pt-3 pl-0'>Studio Services</span>
              </p>
            </div>

            <div className='row services-list'>

              <div className='col-md-6'>
                <ul >
                  <li className='services-list-item'>
                    <span className='diamond'/> Performance Driven Web Apps
                  </li>

                  <li className='services-list-item'>
                    <span className='diamond'/>Proprietary Tool Development
                  </li>

                  <li className='services-list-item'>
                    <span className='diamond'/>Strategic Branding & Rebranding
                  </li>

                  <li className='services-list-item'>
                    <span className='diamond'/>Graphic Design
                  </li>

                  <li className='services-list-item'>
                    <span className='diamond'/>On-page Search Engine
                    Optimization
                  </li>
                </ul>
              </div>

              <div className='col-md-6'>
                <ul>
                  <li className='services-list-item'>
                    <span className='diamond'/>Interactive and Performant Sites
                  </li>

                  <li className='services-list-item'>
                    <span className='diamond'/>Code Clean-up & Project
                    Refactoring
                  </li>

                  <li className='services-list-item'>
                    <span className='diamond'/>Printing Services
                  </li>

                  <li className='services-list-item'>
                    <span className='diamond'/>Start-up Starter Kits
                  </li>
                </ul>
              </div>


            </div>

           <div className="row services-art-element-mobile">
             <div className="col-12 mt-5">
               <img className=" cloud-two"
                    src={cloudTwo}/>
               <img className=" cloud-3"
                    src={cloud3}/>

             </div>
           </div>

            <div className="row">
              <div className="offset-7 col-md-5 services-art-element">
                <img src={servicesImage}/>
              </div>
            </div>

            <div className="row min-height-100">
              <div className="mt-md-4">
                <Scroller/>
              </div>
            </div>

          </div>

        </section>
    );
  }
}

export default Services;
