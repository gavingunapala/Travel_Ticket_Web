import React, {useEffect, useState} from "react"
import visual from '../Images/visual.png';
import firebaseapp from "../firebaseDB/firebase";
import {useHistory} from "react-router-dom";

//customer
const VisualFeedback = () => {

    const[list, setlist] = useState([]);
    const history = useHistory();
    const[maxdis, setmasdis] = useState("");
    const[setkm, setsetkm] = useState("");
    const [state, setState] = useState(true);
    const[acc, setacc] = useState("");
    const[total, settotal] = useState("");
    const[Name, setName] = useState("");
    const[location, setlocation] = useState("");

    const accSetter = (e) => {
        setacc(e.target.value);
    }
    const NameSetter = (e) => {
        setName(e.target.value);
    }
    const locationSetter = (e) => {
        setlocation(e.target.value);
    }
    const setkmSetter = (e) => {
        setsetkm(e.target.value);
    }

    // const destinationSetter = (e) => {
    //     setdestination(e.target.value);
    // }
    // console.log(destination)

    const[value, setvalue] = useState("R002");
    console.log(value)
    const startSetter = (e) => {
        setvalue(e.target.value);
    }
    useEffect(() => {
        console.log(value)
        const list = firebaseapp.database().ref('Route').child(value);
        const journeyList =[];
        // const BusesList =[];
        settotal(setkm*maxdis)

        list.on('value',(snapshot)=>{
            console.log(snapshot.val());
            const journeies = snapshot.val();
            console.log(snapshot.val().RouteID)
            setmasdis(snapshot.val().MaximumDistance)
            setsetkm(snapshot.val().FarePerkm)
            // for (let id in journeies){
            //     journeyList.push(journeies[id] )
            //
            // }
            console.log(journeyList)
            setlist(journeyList)
        })
    }, [value,acc]);

    // const routeChange = () => {
    //     let path = `/Payment`;
    //     history.push(path);
    // }



    const changestate = () => {
        if(acc >= total){
            console.log(total)
            setState(false)
        }else{
            console.log(total)
            setState(true)
        }
        // let path = `/Payment`;
        // history.push(path);
    }

    const startjourney = ()=>{
        history.push({
            pathname: '/EndVisualFeedback',
            state: {  //location state
                update: true,
                Name:Name,
                acc:acc,
                setkm:setkm,
                location:location,
                Route:value,
            },
    });
    }

    return (
        <div data-testid="StartJourney-1">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className=" col-sm-3">
                    <div><strong></strong><label></label></div>
                    <div className=" justify-content-center align-items-center">
                        <div>
                            <div className="card">
                                <br />
                                <h2 className="text-center">Start Journey</h2>
                                <br />
                                <div className="container   ">
                                    <div><label>Name</label><input className="form-control" type="text" onChange={NameSetter}/>
                                    </div>
                                    <div className="form-group">
                                        <div><label>AccountBalance</label><input className="form-control" type="Number" value={acc} onChange={accSetter}/>
                                        </div>
                                        <div><label>Location</label><input className="form-control"
                                                                        type="text" onChange={locationSetter} /></div>
                                        <div><label htmlFor="type">RouteID</label>
                                            <select className="form-control"
                                                    name="type"
                                                    id="type" onChange={startSetter}>
                                                <option>Choose</option>
                                                <option value={"R001"}>R001</option>
                                                <option value={"R002"}>R002</option>
                                                <option value={"R003"}>R003</option>
                                                <option value={"R004"}>R004</option>
                                                <option value={"R005"}>R005</option>
                                            </select>
                                        </div>

                                        <br/>
                                        <div className="row">
                                            <div className="col-md-12 text-center content-right">
                                                <button className="btn btn-success form-btn" onClick={changestate}
                                                        type="submit">Click to check Account Balance
                                                </button>
                                            </div>
                                        </div>

                                        <br/>

                                        <div><label>MaximumDistance</label><input className="form-control"
                                                                        type="Number"  value={maxdis} /></div>
                                        <div><label>FarePerkm</label><input className="form-control"
                                                                                  type="Number" value={setkm}/></div>


                                        <div><label>Total Price for distance</label><input className="form-control"
                                                                            type="Number" value={(setkm*maxdis)}/></div>

                                        <br/>
                                        <div className="row">
                                            <div className="col-md-12 text-center content-right">
                                                <button className="btn btn-success form-btn" disabled={state} onClick={startjourney}
                                                        type="submit">Start Journey
                                                </button>
                                            </div>
                                        </div>

                                        {/*onClick={changestate}*/}
                                        {/*<div><label htmlFor="type">Destination</label>*/}
                                        {/*    <select className="form-control"*/}
                                        {/*            name="type"*/}
                                        {/*            id="type" onChange={destinationSetter}>*/}
                                        {/*        <option>Choose</option>*/}
                                        {/*        <option value={25}>Anuradhapura</option>*/}
                                        {/*        <option value={15}>Boralutanna</option>*/}
                                        {/*        <option value={10}>Colombo</option>*/}
                                        {/*        <option value={35}>Dehiowita</option>*/}
                                        {/*        <option value={20}>Ehaliyagoda</option>*/}
                                        {/*    </select>*/}
                                        {/*</div>*/}

                                        {/*<div><label>FarePerkm</label><input className="form-control"*/}
                                        {/*                                    type="Number" value={setkm}/></div>*/}


                                        {/*<div><label>Total Price for distance</label><input className="form-control"*/}
                                        {/*                                                   type="Number" value={(setkm*destination)}/></div>*/}


                                        <br />
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 image">
                    <img src={visual} loading="auto" alt="center" height="600"
                         width="500"/>
                </div>
            </div>
        </div>
    )
}
export default VisualFeedback;