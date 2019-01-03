import React from 'react';
import './Form.scss';
import Button from '../Button/Buttons';

const Form = () => {
    return (
        <div className="form container py-4">
            <form>
                <div className="row">
                    <div className="col-lg-5 offset-lg-1 pr-lg-5 mb-4">
                        <div className="row form-group border-bot mb-lg-4">
                            <label className="col-2 col-sm-1 col-lg-2 my-0 p-0 pt-2 text-color" htmlFor="name">Name</label>
                            <input className="col-10 col-lg-9 form-control border-0 text-dark" type="text" id="name" />
                        </div>
                        <div className="row form-group border-bot mb-lg-0">
                            <label className="col-2 col-sm-1 col-lg-2 my-0 p-0 pt-2 text-color" htmlFor="email">Email</label>
                            <input className="col-10 form-control border-0 text-dark" type="text" id="email" />
                        </div>
                    </div>
                    <div className="col-lg-5 pl-lg-5 mb-4 pr-lg-2">
                        <div className="row form-group h-100">
                            <textarea className="col-12 form-control border-all rounded-0 text-dark h-100"/>
                        </div>
                    </div>
                </div>
                <div className="row form-group justify-content-end pr-lg-5">

                    <button className="form-control col-3 col-lg-2 mr-lg-4 border-all text-color rounded-0" type="button">send</button>

                </div>
            </form>
        </div>
    );
};

export default Form;
