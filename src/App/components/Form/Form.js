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
    console.log('Submitted');
    let data = this.state;
    console.log(data);
    let dataToSend = new FormData(data);
    console.log()
    fetch('https://postal.ledkyb.com/', {
      method: 'POST',
      body: dataToSend,  //Bodypaser used in server, no need to JSON.stringify
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      }
    })
      .then((res) => {
        window.test1 = res;
        let response = res.json();
        console.log(response);
        window.test2 = response;
      })
      // .then(response => {
      //   console.log('Success!!!');
      //   console.log(response);
      //   window.test = response;
      // })
      .then(() => {
        this.setState({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch(error => console.error('Error:', error));
  };

  render() {
    return (
      <div className="form container col-10 bg-transparent">
        <form>
          <div className="row form-group justify-content-between">
            <div className="col-lg-5">
              <div className="row form-group border-bot">
                <label
                  className="col-2 p-0 text-color"
                  htmlFor="name">Name</label>
                <input
                  className="col-10 col-lg-9 form-control border-0 text-dark"
                  type="text" id="name" onChange={this.change} />
              </div>
              <div className="row form-group border-bot">
                <label
                  className="col-2 p-0 text-color"
                  htmlFor="email">Email</label>
                <input className="col-10 form-control border-0 text-dark"
                  type="text" id="email" onChange={this.change} />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row form-group h-100">
                <textarea
                  className="col-12 form-control border-all rounded-0 text-dark h-100"
                  id="message" onChange={this.change} />
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
