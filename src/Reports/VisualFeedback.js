import React, {useEffect, useState} from "react"
import img from '../Images/undraw_logic_n6th.png';
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

    const accSetter = (e) => {
        setacc(e.target.value);
    }

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
                                    <div><label>Name</label><input className="form-control" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <div><label>AccountBalance</label><input className="form-control" type="Number" onChange={accSetter}/>
                                        </div>
                                        <div><label>Location</label><input className="form-control"
                                                                        type="text" /></div>
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

                                        <div><label>MaximumDistance</label><input className="form-control"
                                                                        type="Number"  value={maxdis}/></div>
                                        <div><label>FarePerkm</label><input className="form-control"
                                                                                  type="Number" value={setkm}/></div>


                                        <div><label>Total Price for distance</label><input className="form-control"
                                                                            type="Number" value={(setkm*maxdis)}/></div>

                                        <br/>
                                        {/*disabled={state}*/}
                                        <div className="row">
                                            <div className="col-md-12 text-center content-right">
                                                <button className="btn btn-success form-btn" onClick={changestate}
                                                        type="submit">Click to check Account Balance
                                                </button>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12 text-center content-right">
                                                <button className="btn btn-success form-btn" disabled={state} onClick={changestate}
                                                        type="submit">Start Journey
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
export default VisualFeedback;