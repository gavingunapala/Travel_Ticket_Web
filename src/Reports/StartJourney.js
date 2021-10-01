import React, {useState} from "react"
import img from '../Images/undraw_logic_n6th.png';
import firebaseapp from "../firebaseDB/firebase";

//customer
const StartJourney = () => {

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
                <div className="row">
                    <div className="col-sm-2"></div>
                        <div className=" col-sm-3">
                            <div><strong></strong><label></label></div>
                            <div className=" justify-content-center align-items-center">
                                <div>
                                    <div className="card">
                                            <br />
                                            <h2 className="text-center">Registration</h2>
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
                                                                                    type="Number" onChange={priceSetter}/></div>
                                                    <br/>
                                                    <button className="btn btn-primary" type="submit" onClick={onSubmit}>&nbsp;Start Journey</button>
                                                    <br />
                                                    <br />
                                                </div>
                                            </div>
                                    </div>
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
