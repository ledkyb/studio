import React from 'react';
import Button from '../Button/Buttons';
import './Form.scss';


const Form = () => {
    return (
        <div className="container bg-white">
            <form>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="row form-group border-bottom border-dark">
                            <label className="col-2 my-0 pt-2 text-dark" for="name">Name</label>
                            <input className="col-10 form-control border-0" type="text" id="name" />
                        </div>
                        <div className="row form-group border-bottom border-dark">
                            <label className="col-2 my-0 pt-2" for="email">Email</label>
                            <input className="col-10 form-control border-0" type="text" id="email" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="row form-group">
                            <textarea className="col-12 form-control border border-dark rounded-0 h-100"></textarea>
                        </div>
                    </div>
                </div>
                <div className="row form-group">
                    <button className="form-control col-3 ml-auto border-dark text-dark rounded-0">send</button>
                </div>
            </form>
        </div>
    );
};

// const Form = () => {
//     return (
//         <section className="row form">
//             <div className="container">
//                 <div className="row">
//                     <form className="col-12">
//                         <div className="row">
//                             <div className="col-5 offset-1">
//                                 <label>Name</label>
//                                 <input></input>
//                                 <hr />
//                                 <label>Email</label>
//                                 <input></input>
//                                 <hr />
//                             </div>
//                             <div className="col-6">
//                                 <div className="text-area">
//                                     <textarea className="float-right"></textarea>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="row">
//                             <div className="col-2 offset-9">
//                                 <div className="send-button">
//                                     <Button className="send-button-style" label="send" />
//                                 </div>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     )
// };


export default Form;