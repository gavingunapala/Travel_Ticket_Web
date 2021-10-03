import React, {useEffect, useState} from "react"
import img from '../Images/undraw_logic_n6th.png';
import firebaseapp from "../firebaseDB/firebase";
import {useHistory} from "react-router-dom";
import { useLocation } from 'react-router-dom';

//customer
const EndVisualFeedback = () => {

    const location1 = useLocation();

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

    // var name1 = location1.set.Name
    // console.log(name1)

    useEffect(() => {
        setname1(location1.state.Name)
        setacc(location1.state.acc)
        setsetkm(location1.state.setkm)
        setlocation(location1.state.location)
        setroute1(location1.state.Route)
        console.log(name1)

        if(destination=="A"){
            setvalue(20)
        }else if(destination=="B"){
            setvalue(30)
        }else if(destination=="C"){
            setvalue(15)
        }else if(destination=="D"){
            setvalue(25)
        }else if(destination=="E"){
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
    }





    // const history = useHistory();
    // const[maxdis, setmasdis] = useState("");
    // const[setkm, setsetkm] = useState("");
    // const [state, setState] = useState(true);
    // const[acc, setacc] = useState("");
    // const[total, settotal] = useState("");
    //
    // const accSetter = (e) => {
    //     setacc(e.target.value);
    // }
    //
    // const[value, setvalue] = useState("R002");
    // console.log(value)
    // const startSetter = (e) => {
    //     setvalue(e.target.value);
    // }
    // useEffect(() => {
    //     console.log(value)
    //     const list = firebaseapp.database().ref('Route').child(value);
    //     const journeyList =[];
    //     // const BusesList =[];
    //     settotal(setkm*maxdis)
    //
    //     list.on('value',(snapshot)=>{
    //         console.log(snapshot.val());
    //         const journeies = snapshot.val();
    //         console.log(snapshot.val().RouteID)
    //         setmasdis(snapshot.val().MaximumDistance)
    //         setsetkm(snapshot.val().FarePerkm)
    //         // for (let id in journeies){
    //         //     journeyList.push(journeies[id] )
    //         //
    //         // }
    //         console.log(journeyList)
    //         setlist(journeyList)
    //     })
    // }, [value,acc]);
    //
    // const changestate = () => {
    //     if(acc >= total){
    //         console.log(total)
    //         setState(false)
    //     }else{
    //         console.log(total)
    //         setState(true)
    //     }
    //     // let path = `/Payment`;
    //     // history.push(path);
    // }

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
                                    <div><label>Name</label><input className="form-control" type="text" value={name1}/>
                                    </div>
                                    <div className="form-group">
                                        <div><label>AccountBalance</label><input className="form-control" type="Number" value={acc}/>
                                        </div>
                                        <div><label>Location</label><input className="form-control"
                                                                           type="text" value={location}/></div>
                                        {/*<div><label>FarePerkm</label><input className="form-control"*/}
                                        {/*                                    type="Number" value={setkm}/></div>*/}
                                        <div><label htmlFor="type">Destination</label>
                                            <select className="form-control"
                                                    name="type"
                                                    id="type" onChange={destinationSetter}>
                                                <option>Choose</option>
                                                <option value={"A"}>A</option>
                                                <option value={"B"}>B</option>
                                                <option value={"C"}>C</option>
                                                <option value={"D"}>D</option>
                                                <option value={"E"}>E</option>
                                            </select>
                                        </div>

                                        <div><label>FarePerkm</label><input className="form-control"
                                                                            type="Number" value={setkm}/></div>


                                        <div><label>Total Price for distance</label><input className="form-control"
                                                                                           type="Number" value={abc}/></div>



                                        <br/>
                                        {/*disabled={state}*/}
                                        {/*<div className="row">*/}
                                        {/*    <div className="col-md-12 text-center content-right">*/}
                                        {/*        <button className="btn btn-success form-btn" onClick={changestate}*/}
                                        {/*                type="submit">Click to check Account Balance*/}
                                        {/*        </button>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}

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
                    <img src={img} loading="auto" alt="center" height="600"
                         width="500"/>
                </div>
            </div>
        </div>
    )
}
export default EndVisualFeedback;