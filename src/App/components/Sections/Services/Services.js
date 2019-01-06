import React, {Component} from 'react';
import './Services.scss';

import cloud3 from './Assets/cloud-3.svg';
import cloudTwo from './Assets/cloud-two.svg';
import servicesImage from './Assets/services-art.svg';

import Scroller from '../../Scroller/Scroller';

class Services extends Component {
<<<<<<< HEAD
  render() {
    return (
||||||| merged common ancestors
<<<<<<<<< Temporary merge branch 1
  render() {
    return (
        <section id="services" className="row">
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
||||||||| merged common ancestors
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
                  <div>
-                    <img className="d-md-block d-lg-none d-xl-none cloud-3" src={cloud3} />
-                    <img className="d-md-block d-lg-none d-xl-none cloud-two" src={cloudTwo} />
-                  </div>
=========
  render() {
    return (
=======
  render() {
    return ( 
>>>>>>> 090cd9d3b731b0e725e9405113fd49611668d8f6
        <section id="services" className="row" data-bg="light" data-section="services">
 
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


<<<<<<< HEAD
            </div>

           <div className="row services-art-element-mobile">
             <div className="col-12 mt-5">
               <img className=" cloud-two"
                    src={cloudTwo}
                    alt="services cloud art element two"
               />
               <img className=" cloud-3"
                    src={cloud3}
                    alt="services cloud art element three"
               />

             </div>
           </div>

            <div className="row">
              <div className="offset-7 col-md-5 services-art-element">
||||||| merged common ancestors
<<<<<<<<< Temporary merge branch 1
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
||||||||| merged common ancestors
=========
            </div>

           <div className="row services-art-element-mobile">
             <div className="col-12 mt-5">
               <img className=" cloud-two"
                    src={cloudTwo}
                    alt="services cloud art element two"
               />
               <img className=" cloud-3"
                    src={cloud3}
                    alt="services cloud art element three"
               />

             </div>
           </div>

            <div className="row">
              <div className="offset-7 col-md-5 services-art-element">
=======
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

>>>>>>> 090cd9d3b731b0e725e9405113fd49611668d8f6
                <img src={servicesImage} alt="services art element"/>
              </div>
            </div>

            <div className="row">
              <div className="offset-5 col-2 mar">
                <Scroller color="orange" layers={3} />
              </div>
            </div>

          </div>

        </section>
    );
  }
}

export default Services;
