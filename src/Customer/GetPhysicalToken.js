import React, {useState,useEffect} from "react"
import img from '../Images/undraw_logic_n6th.png';
import firebaseapp from "../firebaseDB/firebase";


//customer
const GetPhysicalToken = () => {

    const[name, setname] = useState("");
    const[Phone, setPhone] = useState("");
    const[Nic, setNic] = useState("");
    const[Route, setRoute] = useState("");
    const[Start, setStart] = useState("");
    const[Distination, setDistination] = useState("");



    const nameSetter = (e) => {
        setname(e.target.value);
    }
    const PhoneSetter = (e) => {
        setPhone(e.target.value);
    }
    const NicSetter = (e) => {
        setNic(e.target.value);
    }
    const RouteSetter = (e) => {
        setRoute(e.target.value);
    }
    const StartSetter = (e) => {
        setStart(e.target.value);
    }
    const DistinationSetter = (e) => {
        setDistination(e.target.value);
    }


    const onSubmit = (e) => {
        const d2Ref =firebaseapp.database().ref("Token");
        const d2 = {
            Name:name,
            Phone:Phone,
            Nic:Nic,
            Route:Route,
            Start:Start,
            Distination:Distination
        };
        d2Ref.push(d2);
        alert("added");

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
                                <h2 className="text-center">Get Token</h2>
                                <br />
                                <div className="container">
                                    <div><label>Name</label><input className="form-control" type="text"  onChange={nameSetter}/>
                                    </div>
                                    <div><label>Phone Number</label><input className="form-control" type="Number" onChange={PhoneSetter}/>
                                    </div>
                                    <div><label>NIC</label><input className="form-control" type="text" onChange={NicSetter}/>
                                    </div>
                                    <div><label htmlFor="type">RouteID</label>
                                        <select className="form-control"
                                                name="type"
                                                id="type"
                                                onChange={RouteSetter}
                                        >
                                            <option>Choose</option>
                                            <option value={"R001"}>R001</option>
                                            <option value={"R002"}>R002</option>
                                            <option value={"R003"}>R003</option>
                                            <option value={"R004"}>R004</option>
                                            <option value={"R005"}>R005</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <div><label>Start</label><input className="form-control" type="text"  onChange={StartSetter} />
                                        </div>

                                        <div><label>Distination</label><input className="form-control"
                                                                                  type="text"   onChange={DistinationSetter}/></div>
                                        <br/>
                                        <button className="btn btn-warning" type="submit" onClick={onSubmit} >&nbsp;Add token </button>
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
export default GetPhysicalToken;
