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
                  <div className='row mb-5'>
                    <h1 className='col-xs-4 mt-0'>SERVICES</h1>
                    <span className='col-1 style={{color: #ea5132}}'>/</span>
                    <span className='col-4 text-nowrap align-text-bottom'>Studio Services</span>
                  </div>

                  <div>

                    <ul className='list-group container'>
                      <div className='row'>
                        <span className='d-inline diamond'></span>
                        <li className='d-inline col-10 list-group-item border-0'>
                        Performance Driven Web Apps</li>
                      </div>
                      <div className='row'>
                        <span className='d-inline diamond'></span>
                        <li className='d-inline col-10 list-group-item border-0'>
                        Proprietary Tool Development</li>
                      </div>
                      <div className='row'>
                        <span className='d-inline diamond'></span>
                        <li className='d-inline col-10 list-group-item border-0'>
                        Strategic Branding & Rebranding</li>
                      </div>
                      <div className='row'>
                        <span className='d-inline diamond'></span>
                        <li className='d-inline col-10 list-group-item border-0'>
                        Graphic Design</li>
                      </div>
                      <div className='row'>
                        <span className='d-inline diamond'></span>
                        <li className='d-inline col-10 list-group-item border-0'>
                        On-page Search Engine Optimisation</li>
                      </div>
                      <div className='row'>
                        <span className='d-inline diamond'></span>
                        <li className='d-inline col-10 list-group-item border-0'>
                        Interactive and Performant Sites</li>
                      </div>
                      <div className='row'>
                        <span className='d-inline diamond'></span>
                        <li className='d-inline col-10 list-group-item border-0'>
                        Code Clean-up & Project Refactoring</li>
                      </div>
                      <div className='row'>
                        <span className='d-inline diamond'></span>
                        <li className='d-inline col-10 list-group-item border-0'>
                        Printing Services</li>
                      </div>
                      <div className='row'>
                        <span className='d-inline diamond'></span>
                        <li className='d-inline col-10 list-group-item border-0'>
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
