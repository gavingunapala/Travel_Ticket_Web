import React, {useEffect, useState} from "react"
import endvisual from '../Images/endvisual.png';
import firebaseapp from "../firebaseDB/firebase";
import {useHistory} from "react-router-dom";
import { useLocation } from 'react-router-dom';


const EndVisualFeedback = () => {

    const location1 = useLocation();
    const his = useHistory();

    console.log(location1.state.Name)
    console.log(location1.state.acc)
    console.log(location1.state.setkm)
    console.log(location1.state.location)


    const[name1, setname1] = useState("");
    const[acc, setacc] = useState("");
    const[setkm, setsetkm] = useState("");
    const[location, setlocation] = useState("");
    const[destination, setdestination] = useState("");
    const[value, setvalue] = useState();
    const[route1, setroute1] = useState("");


    useEffect(() => {
        setname1(location1.state.Name)
        setacc(location1.state.acc)
        setsetkm(location1.state.setkm)
        setlocation(location1.state.location)
        setroute1(location1.state.Route)
        console.log(name1)

        if(destination=="Colombo"){
            setvalue(20)
        }else if(destination=="Kandy"){
            setvalue(30)
        }else if(destination=="Gall"){
            setvalue(15)
        }else if(destination=="Jaffna"){
            setvalue(25)
        }else if(destination=="Mathara"){
            setvalue(10)
        }
    }, [destination,value]);

    let abc = setkm*value

    const destinationSetter = (e) => {
        setdestination(e.target.value);
    }

    console.log(destination)

    const onSubmit = (e) => {
        const d2Ref =firebaseapp.database().ref("journey");
        const d2 = {
            Name:name1,
            Destination:destination,
            Price:abc,
            Route:route1,
            Start:location,
        };
        d2Ref.push(d2);
        alert("Ended Journey")
        his.push('/');
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
                                <h2 className="text-center">End Journey</h2>
                                <br />
                                <div className="container   ">
                                    <div><label>Name</label><input className="form-control" type="text" value={name1}/>
                                    </div>
                                    <div className="form-group">
                                        <div><label>AccountBalance</label><input className="form-control" type="Number" value={acc}/>
                                        </div>
                                        <div><label>Location</label><input className="form-control"
                                                                           type="text" value={location}/></div>
                                        <div><label htmlFor="type">Destination</label>
                                            <select className="form-control"
                                                    name="type"
                                                    id="type" onChange={destinationSetter}>
                                                <option>Choose</option>
                                                <option value={"Colombo"}>Colombo</option>
                                                <option value={"Kandy"}>Kandy</option>
                                                <option value={"Gall"}>Gall</option>
                                                <option value={"Jaffna"}>Jaffna</option>
                                                <option value={"Mathara"}>Mathara</option>
                                            </select>
                                        </div>

                                        <div><label>FarePerkm</label><input className="form-control"
                                                                            type="Number" value={setkm}/></div>


                                        <div><label>Total Price for distance</label><input className="form-control"
                                                                                           type="Number" value={abc}/></div>



                                        <br/>
                                        <div className="row">
                                            <div className="col-md-12 text-center content-right">
                                                <button className="btn btn-danger form-btn" onClick={onSubmit}
                                                        type="submit">End Journey
                                                </button>
                                            </div>
                                        </div>
                                        <br />
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 image">
                    <img src={endvisual} loading="auto" alt="center" height="600"
                         width="500"/>
                </div>
            </div>
        </div>
    )
}
export default EndVisualFeedback;