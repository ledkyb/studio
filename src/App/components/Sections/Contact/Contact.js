import React, { Component } from 'react';
import Footer from '../../Footer/Footer.js';
import SocialMedia from '../../SocialMedia/SocialMedia.js';

class Contact extends Component {
    componentWillMount(){

    }

    render(){
        return(
          <section id="contact" className="row" style={{background: 'white'}}>
              <div className="container" style={{background: 'white', height: '100vh'}}>

                  <div className="row text-center" style={{background: '#EF3C24', height: '30%'}}>
                      <div className="col-12 my-auto">
                          <h1 className="text-uppercase font-weight-bold mb-3" style={{color: 'white'}}>
                              Start Your Project
                          </h1>
                          <p>
                              Rather send us an email? Send it to <a href="mailto:support@ledkyb.com?Subject=I%20have%20a%20project">support@ledkyb.com</a>.
                          </p>
                      </div>
                  </div>

                  <div className="row" style={{border: '1px solid red', height: '60%'}}>
                      <div className="container">
                          <p>Contact us.</p>
                          <p>Under construction...</p>
                      </div>
                  </div>

                  <div className="row justify-content-between" style={{height: '10%'}}>
                      <div className="col-12 mb-5 my-lg-auto col-lg-3" style={{background: 'blue', height: '60%'}} >
                          <SocialMedia />
                      </div>
                      <div className="col-12 mb-5 mt-4 my-lg-auto col-lg-6 order-lg-first" style={{background: 'green', height: '60%'}}>
                          <Footer />
                      </div>
                  </div>
              </div>
          </section>
        )
    }
}


export default Contact;
