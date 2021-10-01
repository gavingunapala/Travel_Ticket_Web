import React, {useState} from "react"
import img from '../Images/undraw_logic_n6th.png';
import firebaseapp from "../firebaseDB/firebase";
import AdminSideNav from "../SideNav/AdminSideNav";

//customer
const GetPhysicalToken = () => {

    const[name, setname] = useState("");
    const[route, setroute] = useState("");
    const[start, setstart] = useState("");
    const[destination, setdestination] = useState("null");
    const[price, setprice] = useState("");

    const nameSetter = (e) => {
        setname(e.target.value);
    }
    const routeSetter = (e) => {
        setroute(e.target.value);
    }
    const startSetter = (e) => {
        setstart(e.target.value);
    }
    const destinationSetter = (e) => {
        setdestination(e.target.value);
    }
    const priceSetter = (e) => {
        setprice(e.target.value);
    }

    const onSubmit = (e) => {
        const d2Ref =firebaseapp.database().ref("journey");
        const d2 = {
            Name:name,
            Route:route,
            Start:start,
            Destination:destination,
            Price:price,
        };
        d2Ref.push(d2);
    }


    return (
        <div>
            <div className={'body'} >

                <div className={"container "}>
                    <br />
                    <div className="card-employee " id={'body'}>
                        <h1 className="text-center">Get Token</h1>
                        <br/>
                        <div className="row1">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-4">
                                <div className="card">
                                    <br />
                                    <h2 className="text-center">Your Details</h2>
                                    <br />
                                    <div className="container   ">
                                        <div><label>Name</label><input className="form-control" type="text" onChange={nameSetter}/>
                                        </div>
                                        <div className="form-group">
                                            <div><label>Route</label><input className="form-control" type="text" onChange={routeSetter}/>
                                            </div>
                                            <div><label>Start</label><input className="form-control"
                                                                            type="text" onChange={startSetter}/></div>
                                            <div><label>Destination</label><input className="form-control"
                                                                                  type="text" onChange={destinationSetter}/></div>
                                            <div><label>Price</label><input className="form-control"
                                                                            type="Number" min={0} onChange={priceSetter}/></div>
                                            <br/>
                                            {/*<button className="btn btn-primary" type="submit" onClick={onSubmit}>Start Journey</button>*/}
                                            <br />
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-1"></div>
                            <div className="col-sm-4">
                                <div className="card">
                                    <br/>
                                    <h2 className="text-center">Payment</h2>
                                    <br/>
                                    <div className="container">
                                        <div><label>Name On Credit Card</label><input className="form-control" type="text"/>
                                        </div>
                                        <div><label>Phone Number</label><br/><input className="form-control" type="number"
                                                                                    min='0'/>
                                        </div>
                                        <div><label>NIC Number</label><input className="form-control" type="text" /></div>
                                        <div className={"row"}>
                                            <div className="col-sm-7">
                                                <label>Card Number</label><br/><input className="form-control" type="number"min='0'/>
                                            </div>
                                            <div className="col-sm-4">
                                                <label>CVV Number</label><br/><input className="form-control" type="number"min='0'/>
                                            </div>
                                        </div>
                                        <div><label>Expire Date</label><input className="form-control" type="date" /></div>
                                        <br/>
                                        <div className={"row"}>
                                            <div className="col-sm-7">
                                                <label>Totle price</label><br/><input className="form-control" type="number"/>
                                            </div>
                                            <div className="col-sm-2 pad">
                                                {/*<center>*/}
                                                {/*    <button type="button " className="btn btn-primary btn-pay" >Pay</button>*/}
                                                {/*</center>*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-sm-1"></div>

                        </div>

                    </div>
                    <botton class="btn btn-success" role="button" id={"generate"}>
                        Generate token
                    </botton>
                </div>

            </div>
        </div>
    )
}
export default GetPhysicalToken;
