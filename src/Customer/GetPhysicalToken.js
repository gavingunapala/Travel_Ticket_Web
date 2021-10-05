import React, {useState,useEffect} from "react"
import physical from '../Images/physical.png';
import firebaseapp from "../firebaseDB/firebase";
import {useHistory, useParams} from "react-router-dom";


//customer
const GetPhysicalToken = () => {


    const { id} = useParams();
    console.log(id)
    const his = useHistory();

    const[name, setname] = useState("");
    const[Phone, setPhone] = useState("");
    const[Nic, setNic] = useState("");
    const[Route, setRoute] = useState("");
    const[Start, setStart] = useState("");
    const[Distination, setDistination] = useState("");

    const[jlist, setjlist] = useState([]);

    // setname(id)

    // const nameSetter = (e) => {
    //     setname(e.target.value);
    // }
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

    useEffect(() => {
        const jlist = firebaseapp.database().ref('LocalPassnger').child(id);
        const TripList =[];


        jlist.on('value',(snapshot)=>{
            setjlist(snapshot.val().nic)
        })


    }, []);


    const onSubmit = (e) => {

        if(Phone==""){
            alert('phone number must be add')
        }
        else if(Route == ""){
            alert('Route number must be add')
        }
        else if(Start== ""){
            alert('Starting point must be add')
        }
        else if(Distination== ""){
            alert('Destination point must be add')
        }
        else {
            const d2Ref =firebaseapp.database().ref("Token");
            const d2 = {
                Name:id,
                Phone:Phone,
                Nic:jlist,
                Route:Route,
                Start:Start,
                Distination:Distination
            };
            d2Ref.push(d2);
            alert("added");
            his.push('/');
        }





    }


    return (
        <div data-testid = "GetPhysicalTokenTest-1-1">
            <br />
            <div className="row">
                <div className="col-sm-2"></div>
                <div className=" col-sm-3">
                    <div><strong></strong><label></label></div>
                    <div className=" justify-content-center align-items-center">
                        <div>
                            <form className="card">
                                <br />
                                <h2 className="text-center">Get Token</h2>
                                <br />
                                <div className="container">
                                    <div><label>Name</label><input className="form-control" type="text"  value={id} disabled={true}/>
                                    </div>
                                    <div><label>Phone Number</label><input className="form-control" type="Number" onChange={PhoneSetter} />
                                    </div>
                                    <div><label>NIC</label><input className="form-control" type="text" value={jlist} disabled={true}/>
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
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 image">
                    <img src={physical} loading="auto" alt="center" height="600"
                         width="500"/>
                </div>
            </div>

        </div>
    )
}
export default GetPhysicalToken;
