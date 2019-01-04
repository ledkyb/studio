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
    fetch('https://postal.ledkyb.com/', {
      method: 'POST',
      body: data  //Bodypaser used in server, no need to JSON.stringify
    })
      .then((res) => res.json())
      .then(response => console.log('Success!!!'))
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
      <div className="form container bg-transparent">
        <form>
          <div className="row">
            <div className="col-lg-5 offset-lg-1 pr-lg-5 mb-4">
              <div className="row form-group border-bot mb-lg-5">
                <label
                  className="col-2 col-sm-1 col-lg-2 my-0 p-0 pt-2 text-color"
                  htmlFor="name">Name</label>
                <input
                  className="col-10 col-lg-9 form-control border-0 text-dark"
                  type="text" id="name" onChange={this.change} />
              </div>
              <div className="row form-group border-bot mb-lg-0">
                <label
                  className="col-2 col-sm-1 col-lg-2 my-0 p-0 pt-2 text-color"
                  htmlFor="email">Email</label>
                <input className="col-10 form-control border-0 text-dark"
                  type="text" id="email" onChange={this.change} />
              </div>
            </div>
            <div className="col-lg-5 pl-lg-5 mb-4 pr-lg-2">
              <div className="row form-group h-100">
                <textarea
                  className="col-12 form-control border-all rounded-0 text-dark h-100"
                  id="message" onChange={this.change} />
              </div>
            </div>
          </div>
          <div className="row form-group pr-lg-5 pt-lg-2">
            <div className="ml-auto pr-lg-5">
              <div onClick={this.submit}>
                <Button link="#contact" label="send" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
