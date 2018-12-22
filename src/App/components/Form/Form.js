import React from 'react';
import Button from '../Button/Buttons';
import './Form.scss';

const Form = () => {
    return (
        <section className="row form">
            <div className="container">
                <div className="row">
                    <form className="col-12">
                        <div className="row">
                            <div className="col-5 offset-1">
                                <label>Name</label>
                                <input></input>
                                <hr />
                                <label>Email</label>
                                <input></input>
                                <hr />
                            </div>
                            <div className="col-6">
                                <div className="text-area">
                                    <textarea className="float-right"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2 offset-9">
                                <div className="send-button">
                                    <Button className="send-button-style" label="send" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
};


export default Form;