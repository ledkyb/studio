import React from 'react';
import './Form.scss';


const Form = () => {
    return (
        <div className="form container bg-white py-4">
            <form>
                <div className="row">
                    <div className="col-lg-5 offset-lg-1 pr-lg-5 mb-4">
                        <div className="row form-group border-bot">
                            <label className="col-2 col-sm-1 col-lg-2 my-0 p-0 pt-2 text-color" for="name">Name</label>
                            <input className="col-10 col-lg-9 form-control border-0 text-dark" type="text" id="name" />
                        </div>
                        <div className="row form-group border-bot mb-lg-0 mt-lg-4">
                            <label className="col-2 col-sm-1 col-lg-2 my-0 p-0 pt-2 text-color" for="email">Email</label>
                            <input className="col-10 form-control border-0 text-dark" type="text" id="email" />
                        </div>
                    </div>
                    <div className="col-lg-5 pl-lg-5 mb-4">
                        <div className="row form-group h-100">
                            <textarea className="col-12 form-control border-all rounded-0 text-dark"></textarea>
                        </div>
                    </div>
                </div>
                <div className="row form-group">
                    <button className="form-control col-3 offset-9 col-lg-1 offset-lg-10 border-all text-color rounded-0">send</button>
                </div>
            </form>
        </div>
    );
};

export default Form;