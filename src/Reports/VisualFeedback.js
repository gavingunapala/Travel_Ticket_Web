import React, {useEffect, useState} from "react"
import img from '../Images/undraw_logic_n6th.png';
import firebaseapp from "../firebaseDB/firebase";

//customer
const VisualFeedback = () => {

    // const[name, setname] = useState("");
    // const[route, setroute] = useState("");
    // const[start, setstart] = useState("");
    // const[destination, setdestination] = useState("null");
    // const[price, setprice] = useState("");
    //
    // const nameSetter = (e) => {
    //     setname(e.target.value);
    // }
    // const routeSetter = (e) => {
    //     setroute(e.target.value);
    // }
    // const startSetter = (e) => {
    //     setstart(e.target.value);
    // }
    // const destinationSetter = (e) => {
    //     setdestination(e.target.value);
    // }
    // const priceSetter = (e) => {
    //     setprice(e.target.value);
    // }
    //
    // const onSubmit = (e) => {
    //     const d2Ref =firebaseapp.database().ref("journey");
    //     const d2 = {
    //         Name:name,
    //         Route:route,
    //         Start:start,
    //         Destination:destination,
    //         Price:price,
    //     };
    //     d2Ref.push(d2);
    // }

    const[list, setlist] = useState([]);

    useEffect(() => {
        const list = firebaseapp.database().ref('Route');
        const routeList =[];
        list.on('value',(snapshot)=>{
            console.log(snapshot.val());
            const routes = snapshot.val();

            for (let id in routes){
                routeList.push(routes[id] )
            }
            console.log(routeList)
            setlist(routeList)
        })
    }, []);


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
                                        <div><label>Account Balance</label><input className="form-control" type="text" />
                                        </div>
                                        <div><label>Location</label><input className="form-control"
                                                                        type="text" /></div>
                                        <div><label htmlFor="type">RouteID</label>
                                            <select className="form-control"
                                                    name="type"
                                                    id="type" >
                                                <option>Choose</option>
                                                <option>R001</option>
                                                <option>R002</option>
                                                <option>R003</option>
                                                <option>R004</option>
                                                <option>R005</option>
                                            </select>
                                        </div>
                                        <div><label>MaximumDistance</label><input className="form-control"
                                                                        type="Number" placeholder={Route.R001}/></div>
                                        <div><label>FarePerkm</label><input className="form-control"
                                                                                  type="Number"/></div>

                                        {list.map((j)=>(
                                            <tr>
                                                <td>{j.R001.RouteID}</td>
                                                <td>{j.MaximumDistance}</td>
                                                <td>{j.FarePerkm}</td>
                                            </tr>
                                        ))}

                                        <div><label>Total Price for distance</label><input className="form-control"
                                                                            type="Number" /></div>
                                        <br/>
                                        <button className="btn btn-primary" type="submit" >&nbsp;Start Journey</button>
                                        <button className="btn btn-warning" type="submit" >&nbsp;Only you </button>
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