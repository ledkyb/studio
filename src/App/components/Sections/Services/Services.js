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

                  <div >

                    <ul className='list-group row'>
                      <span className='diamond'></span>
                        <li className='list-group-item border-0'>
                        Performance Driven Web Apps</li>
                        <li className='list-group-item border-0'>Proprietary Tool Development</li>
                        <li className='list-group-item border-0'>Strategic Branding & Rebranding</li>
                        <li className='list-group-item border-0'>Graphic Design</li>
                        <li className='list-group-item border-0'>On-page Search Engine Optimisation</li>
                        <li className='list-group-item border-0'>Interactive and Performant Sites</li>
                        <li className='list-group-item border-0'>Code Clean-up & Project Refactoring</li>
                        <li className='list-group-item border-0'>Printing Services</li>
                        <li className='list-group-item border-0 mb-5'>Start-up Starter Kits</li>
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
