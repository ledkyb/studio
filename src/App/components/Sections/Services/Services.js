import React, {Component} from 'react';
import './Services.scss';

class Services extends Component {
  render() {
    return (
        <section id="services" className="row " data-bg="light" data-section="services">
          <div className="container-fluid services-art">
            <div className="container">

              <div className='row mt-5 mb-3'>
                <p className='section-title big-john pl-3'>SERVICES
                  <span
                      className='avenir-light p-3'>/</span>
                  <span
                      className='avenir-light pt-3 pl-0'>Studio Services</span>
                </p>
              </div>

              <div className='row services-list col-xl-12'>

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

                    <li className='services-list-item pb-5'>
                      <span className='diamond'/>Start-up Starter Kits
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          </div>

        </section>
    );
  }
}

export default Services;
