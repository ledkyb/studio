import React, { Component } from 'react';
import './Services.scss';
import cloud3 from './Assets/cloud-3.svg';
import cloudTwo from './Assets/cloud-two.svg';

class Services extends Component {
    componentWillMount(){

    }

      render(){
          return(
              <div className="container bg-white">
                  <div className='row mt-5 mb-5 align-bottom'>
                    <h1 className='d-inline col-xs-4 font-weight-bold'>SERVICES</h1>
                    <span className='heading-span d-inline-block col-1 weight-600 p-3'>/</span>
                    <span className='d-inline col-4 text-nowrap mb-0 weight-600 pt-3 pl-0'>Studio Services</span>
                  </div>

                  <div>

                    <ul className='list-group container'>
                      <div className='row'>
                        <span className='d-inline diamond'></span>
                        <li className='weight-500 d-inline col-10 list-group-item border-0'>
                        Performance Driven Web Apps</li>
                      </div>
                      <div className='row'>
                        <span className='d-inline diamond'></span>
                        <li className='weight-500 d-inline col-10 list-group-item border-0'>
                        Proprietary Tool Development</li>
                      </div>
                      <div className='row'>
                        <span className='d-inline diamond'></span>
                        <li className='weight-500 d-inline col-10 list-group-item border-0'>
                        Strategic Branding & Rebranding</li>
                      </div>
                      <div className='row'>
                        <span className='d-inline diamond'></span>
                        <li className='weight-500 d-inline col-10 list-group-item border-0'>
                        Graphic Design</li>
                      </div>
                      <div className='row pb-1'>
                        <span className='d-inline diamond'></span>
                        <li className='weight-500 d-inline col-10 list-group-item border-0'>
                        On-page Search Engine Optimization</li>
                      </div>
                      <div className='row'>
                        <span className='d-inline diamond'></span>
                        <li className='weight-500 d-inline col-10 list-group-item border-0'>
                        Interactive and Performant Sites</li>
                      </div>
                      <div className='row'>
                        <span className='d-inline diamond'></span>
                        <li className='weight-500 d-inline col-10 list-group-item border-0'>
                        Code Clean-up & Project Refactoring</li>
                      </div>
                      <div className='row'>
                        <span className='d-inline diamond'></span>
                        <li className='weight-500 d-inline col-10 list-group-item border-0'>
                        Printing Services</li>
                      </div>
                      <div className='row mb-5'>
                        <span className='d-inline diamond'></span>
                        <li className='weight-500 d-inline col-10 list-group-item border-0'>
                        Start-up Starter Kits</li>
                      </div>
                    </ul>
                  </div>
                  <div>
                    <img className="cloud-3" src={cloud3} />
                    <img className="cloud-two" src={cloudTwo} />
                  </div>
              </div>
          )
      }
  }



export default Services;
