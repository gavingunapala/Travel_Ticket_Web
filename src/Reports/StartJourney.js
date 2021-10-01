import React, {useState, useEffect} from "react"
// import {useHistory} from "react-router-dom";
// import axios from "axios";
import img from '../Images/undraw_logic_n6th.png';

//customer
const StartJourney = () => {

    return (
            <div>
                <div className="row">
                    <div className="col-sm-2"></div>
                        <div className=" col-sm-3">
                            <div><strong></strong><label></label></div>
                            <div className=" justify-content-center align-items-center">
                                <div>
                                    <form method="post" className="card">
                                            <br />
                                            <h2 className="text-center">Registration</h2>
                                            <br />
                                            <div className="container   ">
                                                <div><label>Enter Name</label><input className="form-control" type="text" />
                                                </div>
                                                <div className="form-group">
                                                    <div><label>Enter Address</label><input className="form-control" type="text" />
                                                    </div>
                                                    <div><label>Enter Phone Number</label><input className="form-control"
                                                         type="Number" /></div>
                                                    <div><label>Enter NIC Number</label><input className="form-control"
                                                                                                      type="text" /></div>
                                                    <div><label>Enter Email</label><input className="form-control"
                                                                                                     type="text" /></div>
                                                    <div><label>Enter Password</label><input className="form-control"
                                                                                          type="text" /></div>
                                                    <br/>
                                                    <button className="btn btn-primary" type="submit">&nbsp;Register</button>
                                                    <br />
                                                    <br />
                                                </div>
                                            </div>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        <div className="col-sm-6 image">
                            <img src={img} loading="auto" alt="center" height="600"
                                                                      width="500"/>
                        </div>
                </div>
            </div>
    )
}
export default StartJourney;
