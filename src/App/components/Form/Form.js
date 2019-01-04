import React from 'react';
import './Form.scss';

const Form = () => {
    return (
        <div className="form container">
            <form>
                <div className="row form-group justify-content-between">
                    <div className="col-lg-5">
                        <div className="row form-group border-bot">
                            <label className="col-2 col-sm-1 col-lg-2 p-0 text-color" htmlFor="name">Name</label>
                            <input className="col-10 col-lg-9 form-control border-0 text-dark" type="text" id="name" />
                        </div>
                        <div className="row form-group border-bot">
                            <label className="col-2 col-sm-1 col-lg-2 p-0 text-color" htmlFor="email">Email</label>
                            <input className="col-10 form-control border-0 text-dark" type="text" id="email" />
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="row form-group h-100">
                            <textarea className="col-12 form-control border-all rounded-0 text-dark h-100"/>
                        </div>
                    </div>
                </div>
                <div className="row form-group justify-content-end">
                    <button className="button form-control col-3 col-lg-2 border-all text-color rounded-0" type="button">send</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
