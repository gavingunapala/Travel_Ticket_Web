import React, {useState} from "react"
import img from '../Images/undraw_logic_n6th.png';
import firebaseapp from "../firebaseDB/firebase";
import AdminSideNav from "../SideNav/AdminSideNav";
import jsPDF from "jspdf";

//customer
const GetPhysicalToken = () => {

    const[name, setname] = useState("Maharagama");
    const[route, setroute] = useState("");
    const[start, setstart] = useState("");
    const[destination, setdestination] = useState("null");
    const[price, setprice] = useState("");

    const nameSetter = (e) => {
        setname(e.target.value);
    }
    const routeSetter = (e) => {
        setroute(e.target.value);
    }
    const startSetter = (e) => {
        setstart(e.target.value);
    }
    const destinationSetter = (e) => {
        setdestination(e.target.value);
    }
    const priceSetter = (e) => {
        setprice(e.target.value);
    }

    const onSubmit = (e) => {
        const d2Ref =firebaseapp.database().ref("journey");
        const d2 = {
            Name:name,
            Route:route,
            Start:start,
            Destination:destination,
            Price:price,
        };
        d2Ref.push(d2);
    }

    const genaratePDF=()=> {
        let doc = new jsPDF('p', 'pt', 'a4');
        doc.html(document.querySelector('#UserToken'), {
            callback: function (doc) {
                doc.save('Employee Report.pdf');
            },
            margin: [60, 60, 60, 60],
            x: 32,
            y: 32
        });

    }
    const[buttonstatus, setbuttonStat] = useState(false);
    return (
        <div>
            <div className={'body'} >

                <div className={"container "}>
                    <br />
                    <div className="card-employee " id={'body'}>
                        <h1 className="text-center">Get Token</h1>
                        <br/>
                        <div className="row1">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-4">
                                <div className="card" id={'UserToken'}>
                                    <br />
                                    <h2 className="text-center">User Token Details</h2>
                                    <br />
                                    <div className="container   ">
                                        <div><label>Name</label><input className="form-control" type="text" onChange={nameSetter}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="cars">Route:</label><br />
                                            <select name="cars" id="cars">
                                                <option value="volvo">178</option>
                                                <option value="saab">220</option>
                                                <option value="opel">123</option>
                                                <option value="audi">17</option>
                                            </select>
                                            <div><label>Start</label><input className="form-control"
                                                                            type="text"value={"Maharagama"} disabled={true}/></div>
                                            <div><label>Destination</label><input className="form-control"
                                                                                  type="text" onChange={destinationSetter}/></div>
                                            <div><label>Price</label><input className="form-control"
                                                                            type="Number" min={0} onChange={priceSetter}/></div>
                                            <br/>
                                            {/*<button className="btn btn-primary" type="submit" onClick={onSubmit}>Start Journey</button>*/}
                                            <br />
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-1"></div>
                            <div className="col-sm-4">
                                <div className="card">
                                    <br/>
                                    <h2 className="text-center">Payment</h2>
                                    <br/>
                                    <div className="container">
                                        <div><label>Name On Credit Card</label><input className="form-control" type="text"/>
                                        </div>
                                        <div><label>Phone Number</label><br/><input className="form-control" type="number"
                                                                                    min='0'/>
                                        </div>
                                        <div><label>NIC Number</label><input className="form-control" type="text" /></div>
                                        <div className={"row"}>
                                            <div className="col-sm-7">
                                                <label>Card Number</label><br/><input className="form-control" type="number"min='0'/>
                                            </div>
                                            <div className="col-sm-4">
                                                <label>CVV Number</label><br/><input className="form-control" type="number"min='0'/>
                                            </div>
                                        </div>
                                        <div><label>Expire Date</label><input className="form-control" type="date" /></div>
                                        <br/>

                                            <div>
                                                <label>Totle price</label><br/><input className="form-control" type="number"/>
                                            </div><br />
                                        <botton className="btn btn-success" role="button" id={"generate"} onClick={genaratePDF}>Pay</botton>
                                            {/*<div className="col-sm-2 pad">*/}
                                            {/*    /!*<center>*!/*/}
                                            {/*    /!*    <button type="button " className="btn btn-primary btn-pay" >Pay</button>*!/*/}
                                            {/*    /!*</center>*!/*/}
                                            {/*</div>*/}
                                        <br/>
                                    </div>
                                </div>
                                {/*<br/> <br/> <br/>*/}
                            </div>

                            <div className="col-sm-1"></div>

                        </div><br/>
                    </div>

                    <botton class="btn btn-success" role="button" id={"generate"} onClick={genaratePDF} >Generate token</botton>
                </div>

            </div>
        </div>
    )
}
export default GetPhysicalToken;
