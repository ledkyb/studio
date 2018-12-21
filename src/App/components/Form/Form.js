import React from 'react';
import Button from '../Button/Buttons';
import './Form.scss';

const Form = () => {
    return (
        <section id="form" className="row">
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
                            <div className="col-5">
                                <textarea className="float-right"></textarea>
                                {/* <Button label="Send" /> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
};


export default Form;