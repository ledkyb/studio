import React, { Component } from 'react';
import Footer from '../../Footer/Footer.js';
import SocialMedia from '../../SocialMedia/SocialMedia.js';
import Form from '../../Form/Form';
import './Contact.scss';

class Contact extends React.Component {
    componentWillMount() {

    }

    render(){
        return(
          <section id="contact" className="row mb-5 mb-lg-0">
              <div className="background container">

                  <div className="header row text-center">
                      <div className="col-12 my-auto">
                          <h1 className="text-uppercase mb-3">
                              Start Your Project
                          </h1>
                          <p>
                              Rather send us an email? Send it to <a href="mailto:support@ledkyb.com?Subject=I%20have%20a%20project">support@ledkyb.com</a>.
                          </p>
                      </div>
                  </div>

                  {/*
                    ** Section for Form Component
                    ** TODO: Insert form component
                    */}
                  <div className="form row">
                      <div className="container">
                          <Form />
                      </div>
                  </div>

                  <div className="footer row justify-content-between">
                      <div className="h-75 col-12 my-lg-auto col-lg-3">
                          <SocialMedia />
                      </div>
                      <div className="h-25 col-12 my-lg-auto col-lg-6 order-lg-first">
                          <Footer />
                      </div>
                  </div>
              </div>
          </section>
}


export default Contact;
