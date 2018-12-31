import React, { Component } from 'react';
import './Form.scss';
import Button from '../Button/Buttons';

class Form extends Component {
    state = {
        name: "",
        email: "",
        message: ""
    };

    change = e => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    // TODO: Need to use submit function to email
    submit = e => {
        console.log('Submitted');
        console.log(this.state);
    }

    render() {
        return (
            <div className="form container bg-white py-4">
                <form>
                    <div className="row">
                        <div className="col-lg-5 offset-lg-1 pr-lg-5 mb-4">
                            <div className="row form-group border-bot mb-lg-4">
                                <label className="col-2 col-sm-1 col-lg-2 my-0 p-0 pt-2 text-color" for="name">Name</label>
                                <input className="col-10 col-lg-9 form-control border-0 text-dark" type="text" id="name" onChange={this.change} />
                            </div>
                            <div className="row form-group border-bot mb-lg-0">
                                <label className="col-2 col-sm-1 col-lg-2 my-0 p-0 pt-2 text-color" for="email">Email</label>
                                <input className="col-10 form-control border-0 text-dark" type="text" id="email" onChange={this.change} />
                            </div>
                        </div>
                        <div className="col-lg-5 pl-lg-5 mb-4 pr-lg-2">
                            <div className="row form-group h-100">
                                <textarea className="col-12 form-control border-all rounded-0 text-dark h-100" id="message" onChange={this.change}></textarea>
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