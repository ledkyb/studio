import React, { Component } from 'react';
import './Services.scss';
import cloud3 from './Assets/cloud-3.svg';
import cloudTwo from './Assets/cloud-two.svg';
import servicesArt from './Assets/services-art.svg';

class Services extends Component {
    componentWillMount(){

    }



      render(){
          return(
              <div className="container bg-white">
                  <div className='row mt-5 mb-5'>
                    <h1 className='d-inline col-xs-4 font-weight-bold'>SERVICES</h1>
                    <span className='heading-span d-inline-block col-1 weight-600 text-center p-3'>/</span>
                    <span className='d-inline col-4 text-nowrap mb-0 weight-600 pt-3 pl-0'>Studio Services</span>
                  </div>

                  <div className='container'>
                    <div className='row'>
                    <ul className='list-group col-md-6'>


                      <div className='row'>
                        <span className='d-inline diamond'></span>
                        <li className='list-group-item weight-500 d-inline col-10 border-0'>
                          Performance Driven Web Apps</li>
                      </div>

                      <div className='row'>
                        <span className='d-inline diamond'></span>
                        <li className='list-group-item weight-500 d-inline col-10 border-0'>
                        Proprietary Tool Development</li>
                      </div>

                      <div className='row'>
                        <span className='d-inline diamond'></span>
                        <li className='list-group-item weight-500 d-inline col-10 border-0'>
                        Strategic Branding & Rebranding</li>
                      </div>

                      <div className='row'>
                        <span className='d-inline diamond'></span>
                        <li className='list-group-item weight-500 d-inline col-10 border-0'>
                        Graphic Design</li>
                      </div>

                      <div className='row'>
                        <span className='d-inline diamond'></span>
                        <li className='list-group-item weight-500 d-inline col-10 border-0'>
                        On-page Search Engine Optimization</li>
                      </div>
                    </ul>

                    <ul className='list-group col-md-6'>

                      <div className='row'>
                        <span className='d-inline diamond'></span>
                        <li className='list-group-item weight-500 d-inline col-10 border-0'>
                        Interactive and Performant Sites</li>
                        </div>

                        <div className='row'>
                          <span className='d-inline diamond'></span>
                          <li className='list-group-item weight-500 d-inline col-10  border-0'>
                        Code Clean-up & Project Refactoring</li>
                        </div>
                       <div className='row'>
                         <span className='d-inline diamond'></span>
                         <li className='list-group-item weight-500 d-inline col-10  border-0'>
                        Printing Services</li>
                        </div>
                       <div className='row'>
                         <span className='d-inline diamond'></span>
                         <li className='list-group-item weight-500 d-inline col-10 border-0'>
                          Start-up Starter Kits</li>
                        </div>
                    </ul>
                    </div>
                  </div>
                  <div className='mobile-view'>
                    <img className="d-md-block d-lg-none d-xl-none cloud-3" src={cloud3} />
                    <img className="d-md-block d-lg-none d-xl-none cloud-two" src={cloudTwo} />
                 </div>
                  <div className='full-screen-view'>
                    <img className='d-none d-lg-block' src={servicesArt} />
                  </div>
              </div>
          )
      }
  }



export default Services;
