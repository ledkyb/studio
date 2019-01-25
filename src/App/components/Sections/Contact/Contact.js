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
              <div className="background container-fluid">

                      <div className="header row text-center">
                          <div className="col-12 px-5 align-self-end align-self-lg-center">
                              <h1 className="text-uppercase">
                                  Start Your Project
                              </h1>
                              <span className="headerText">
                                  Rather send us an email? Send it to <a href="mailto:support@ledkyb.com?Subject=I%20have%20a%20project">support@ledkyb.com</a>.
                              </span>
                          </div>
                      </div>

                  <div className="container">

                      <div className="formContainer row align-items-center">
                          <Form />
                      </div>

                      <div className="footer row justify-content-between align-items-md-end pb-1 pb-lg-3">
                          <div className="col-12 px-4 align-self-start col-lg-4 align-self-lg-end">
                              <SocialMedia />
                          </div>
                          <div className="col-12 pb-3 align-self-end pb-sm-0 col-lg-6 order-lg-first align-self-lg-end">
                              <Footer />
                          </div>
                      </div>

                  </div>
              </div>
          </section>
        )
    }
}

export default Contact;
