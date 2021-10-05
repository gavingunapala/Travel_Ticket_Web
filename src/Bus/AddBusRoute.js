import React, {useState} from "react"
import img from '../Images/undraw_logic_n6th.png';
import firebaseapp from "../firebaseDB/firebase";
import AddBus from "../Images/AddBus.gif"

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
        <div data-testid="AddBusRoute-1">
            <br />
            <br />
            <br />
            <br />
            <div className="row">
                <div className="col-sm-2"></div>
                <div className=" col-sm-3">
                    <a href="/BusRoute" className="btn btn-success " role="button" style={{float: 'left'}} >
                        Back To Admin Panel
                    </a>
                    <br />
                    <br />
                    <div><strong></strong><label></label></div>
                    <div className=" justify-content-center align-items-center">
                        <div>
                            <div className="card">
                                <br />
                                <h2 className="text-center">Add Bus</h2>
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
                                        <button className="btn btn-primary" type="submit" onClick={onSubmit}>&nbsp;Add Bus</button>
                                        <br />
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 image">
                    <img src={AddBus} loading="auto" alt="center" height="600"
                         width="500"/>
                </div>
            </div>
        </div>
    )
}
export default StartJourney;