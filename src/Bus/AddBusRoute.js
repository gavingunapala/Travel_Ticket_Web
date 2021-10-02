import React, {useState} from "react"
import img from '../Images/undraw_logic_n6th.png';
import firebaseapp from "../firebaseDB/firebase";

//customer
const StartJourney = () => {

    const[route, setroute] = useState("");
    const[busNo, setbusNo] = useState("");
    const[busDriver, setbusDriver] = useState("");
    const[phoneNo, setphoneNo] = useState("");

    const routeSetter = (e) => {
        setroute(e.target.value);
    }
    const busNoSetter = (e) => {
        setbusNo(e.target.value);
    }
    const busDriverSetter = (e) => {
        setbusDriver(e.target.value);
    }
    const phoneNoSetter = (e) => {
        setphoneNo(e.target.value);
    }

    const onSubmit = (e) => {
        let id = busDriver;
        const d3Ref =firebaseapp.database().ref("BusRoute");
        const d3 = {
            Route:route,
            BusNo:busNo,
            BusDriver:busDriver,
            PhoneNo:phoneNo,
        };
        d3Ref.push(d3);
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
                                <h2 className="text-center">Add Bus Route</h2>
                                <br />
                                <div className="container   ">
                                    <div><label>Route</label><input className="form-control" type="text" onChange={routeSetter}/>
                                    </div>
                                    <div className="form-group">
                                        <div><label>Bus Number</label><input className="form-control" type="text" onChange={busNoSetter}/>
                                        </div>
                                        <div><label>Bus Driver</label><input className="form-control"
                                                                        type="text" onChange={busDriverSetter}/></div>
                                        <div><label>Phone Number</label><input className="form-control"
                                                                              type="text" onChange={phoneNoSetter}/></div>
                                        <br/>
                                        <button className="btn btn-primary" type="submit" onClick={onSubmit}>&nbsp;Add Bus Route</button>
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