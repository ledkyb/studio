import React, { Component } from 'react';
import Footer from '../../Footer/Footer.js';
import SocialMedia from '../../SocialMedia/SocialMedia.js';
import './Contact.scss';

class Contact extends Component {
    componentWillMount(){

    }

    render(){
        return(
          <section id="contact" className="row mb-5">
              <div className="container">

                  <div className=" header row text-center">
                      <div className="col-12 my-auto">
                          <h1 className="text-uppercase font-weight-bold mb-3">
                              Start Your Project
                          </h1>
                          <p>
                              Rather send us an email? Send it to <a href="mailto:support@ledkyb.com?Subject=I%20have%20a%20project">support@ledkyb.com</a>.
                          </p>
                      </div>
                  </div>

                  <div className="form row">
                      <div className="container">
                          <p>Contact us.</p>
                          <p>Under construction...</p>
                      </div>
                  </div>

                  <div className="footer row justify-content-between">
                      <div className="h-50 col-12 my-lg-auto col-lg-4">
                          <SocialMedia />
                      </div>
                      <div className="h-50 col-12 my-lg-auto col-lg-6 order-lg-first">
                          <Footer />
                      </div>
                  </div>
              </div>
          </section>
        )
    }
}


export default Contact;
