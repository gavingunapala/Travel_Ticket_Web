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
        const d3Ref =firebaseapp.database().ref("Bus");
        const d3 = {
            RouteID:route,
            BusID:busNo,
            NoofSeats:busDriver,
            BusType:phoneNo,
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
                                        <div><label>Bus ID</label><input className="form-control" type="text" onChange={busNoSetter}/>
                                        </div>
                                        <div><label>No of Seats</label><input className="form-control"
                                                                        type="number" onChange={busDriverSetter}/></div>
                                        <div><label>Bus Type</label><input className="form-control"
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