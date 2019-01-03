import React, { Component } from 'react';
import Footer from '../../Footer/Footer.js';
import SocialMedia from '../../SocialMedia/SocialMedia.js';
import Form from '../../Form/Form';
import './Contact.scss';

class Contact extends Component {
    componentWillMount() {

    }

    render(){
        return(
          <section id="contact" className="row">
              <div className="background container">

                  <div className="header row text-center ">
                      <div className="align-self-end col-12 my-md-auto my-lg-auto">
                          <h1 className="text-uppercase">
                              Start Your Project
                          </h1>
                          <span className="headerText">
                              Rather send us an email? Send it to <a href="mailto:support@ledkyb.com?Subject=I%20have%20a%20project">support@ledkyb.com</a>.
                          </span>
                      </div>
                  </div>

                  <div className="form row">
                      <div className="container my-auto">
                          <Form />
                      </div>
                  </div>

                  <div className="footer row justify-content-between align-items-md-end">
                      <div className="col-12 mb-5 col-lg-4">
                          <SocialMedia />
                      </div>
                      <div className="col-12 col-lg-6 order-lg-first align-self-end">
                          <Footer />
                      </div>
                  </div>
              </div>
          </section>
        )
    }
}

export default Contact;
