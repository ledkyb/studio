import React, { Component } from 'react';
import './Form.scss';
import Button from '../Button/Buttons';

class Form extends Component {

  state = {
    name: '',
    email: '',
    message: '',
  };

  change = e => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  submit = e => {
    e.preventDefault();

    const dataToSend = Object.keys(this.state).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(this.state[key]);
    }).join('&');

    fetch('https://postal.ledkyb.com/', {
      method: 'POST',
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      },
      body: dataToSend
    })
      .then((res) => res.status)
      .then((status) => {
        if (status === 200) {
          console.log('Success!!!');
          alert(`Thank you ${this.state.name}. Your message has been sent.`);
          this.setState({
            name: '',
            email: '',
            message: ''
          });
        }
      })
      .catch(error => console.error('Error:', error));
  };

  render() {
    return (
      <div className="form container col-10 bg-transparent">
        <form>
          <div className="row form-group justify-content-between">
            <div className="col-lg-5 mb-2 mb-lg-0">
              <div className="row form-group border-bot">
                <div className="col-12 pb-1 pl-0">
                  <label
                    className="p-0 m-0 d-inline-block mr-3 text-color"
                    htmlFor="name">Name</label>
                  <input
                    className="p-0 border-0 text-dark d-inline-block w-75"
                    type="text" id="name" value={this.state.name} onChange={this.change} />
                </div>
              </div>
              <div className="row form-group mb-lg-0 border-bot">
                <div className="col-12 pb-1 pl-0 mt-1 mt-lg-4">
                  <label
                    className="p-0 m-0 d-inline-block mr-3 text-color"
                    htmlFor="email">Email</label>
                  <input className="border-0 text-dark d-inline-block w-75"
                    type="text" id="email" value={this.state.email} onChange={this.change} />
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row form-group h-100">
                <textarea
                  className="col-12 form-control rounded-0 text-dark h-100 border-all"
                  id="message" value={this.state.message} onChange={this.change} />
              </div>
            </div>
          </div>
          <div className="row form-group justify-content-end">
            <div onClick={this.submit}>
              <Button link="#contact" label="send" styles="send-button" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
