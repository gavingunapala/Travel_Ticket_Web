import React, {useEffect, useState} from "react"
import img from '../Images/undraw_logic_n6th.png';
import firebaseapp from "../firebaseDB/firebase";

//customer
const VisualFeedback = () => {

    let total;

    // const calculate =(maxdis,setkm)=>{
    //     // console.log(a)
    //     // console.log(b)
    //     // console.log(a*b/100);
    //     total = maxdis * setkm ;
    //     // if(total >= AccountBalance){
    //     //
    //     // } else {
    //     //
    //     // }
    // }

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

    // const[list, setlist] = useState([]);
    //
    // useEffect(() => {
    //     const list = firebaseapp.database().ref('Route');
    //     const routeList =[];
    //     list.on('value',(snapshot)=>{
    //         console.log(snapshot.val());
    //         const routes = snapshot.val();
    //
    //         for (let id in routes){
    //             routeList.push(routes[id] )
    //         }
    //         console.log(routeList)
    //         setlist(routeList)
    //     })
    // }, []);

    const[list, setlist] = useState([]);

    const[maxdis, setmasdis] = useState("");
    const[setkm, setsetkm] = useState("");

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
        // total = maxdis * setkm ;
    }, [value]);



    // function changevalue(){
    //     if(value == "R001"){
    //         setvalue("R001")
    //     } else if(value == "R002"){
    //         setvalue("R002")
    //     }else if(value == "R003"){
    //         setvalue("R003")
    //     }
    // }

    // const valuechange = () =>{
    //     console.log(value)
    //     if(){
    //
    //     }
    // }

    //
    // cost val = Route;
    //
    // const valuechange =()=>{
    //     if(val = "R001"){
    //         sets("100")
    //     }else if(val = "R002"){
    //         sets("200")
    //     }
    //     else if (){
    //
    //     }
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
                                    <div><label>Name</label><input className="form-control" type="text" />
                                    </div>
                                    <div className="form-group">
                                        <div><label>AccountBalance</label><input className="form-control" type="text" />
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
                                                                            type="Number"/></div>
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