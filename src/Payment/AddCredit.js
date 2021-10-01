import React, {useState} from "react";
import firebaseapp from "../firebaseDB/firebase";
import AdminSideNav from "../SideNav/AdminSideNav";

const AddCredit = () =>{
    const[Name, setName] = useState("");
    const[Phone, setPhone] = useState("");
    const[NIC, setNIC] = useState("");
    const[cc, setcc] = useState("");
    const[CVV, setCVV] = useState("");
    const[Expire, setExpire] = useState("");
    const[price, setprice] = useState("");


    const NameSetter = (e) => {
        setName(e.target.value);
    }
    const PhoneSetter = (e) => {
        setPhone(e.target.value);
    }
    const NICSetter = (e) => {
        setNIC(e.target.value);
    }
    const ccSetter = (e) => {
        setcc(e.target.value);
    }
    const CVVSetter = (e) => {
        setCVV(e.target.value);
    }
    const ExpireSetter = (e) => {
        setExpire(e.target.value);
    }
    const priceSetter = (e) => {
        setprice(e.target.value);
    }

    const onsub = (e) => {
        const d1Ref =firebaseapp.database().ref("credit");
        const d1 = {
            Name,
            Phone,
            NIC,
            cc,
            CVV,
            Expire,
            price,
        }
        d1Ref.push(d1);
        console.log(d1)
    }


    return(
        <div className={'background-image'}>
            <div className="row1">
                <div className="col-2"> <AdminSideNav/></div>
                <div className="col-sm-2"></div>
                <div className=" col-sm-4">
                    <div><strong></strong><label></label></div>
                    <div className=" justify-content-center align-items-center">
                        <div>
                            <div className="card">
                                <br/>
                                <h2 className="text-center">Payment</h2>
                                <br/>
                                <div className="container">
                                    <div><label>Name On Credit Card</label><input className="form-control" type="text"onChange={NameSetter}/>
                                    </div>
                                    <div><label>Phone Number</label><br/><input className="form-control" type="number"
                                                                                min='0' onChange={PhoneSetter}/>
                                    </div>
                                    <div><label>NIC Number</label><input className="form-control" type="text" onChange={NICSetter}/></div>
                                    <div className={"row"}>
                                        <div className="col-sm-7">
                                            <label>Card Number</label><br/><input className="form-control" type="number"min='0'onChange={ccSetter}/>
                                        </div>
                                        <div className="col-sm-4">
                                            <label>CVV Number</label><br/><input className="form-control" type="number"min='0'onChange={CVVSetter}/>
                                        </div>
                                    </div>
                                    <div><label>Expire Date</label><input className="form-control" type="date" onChange={ExpireSetter}/></div>
                                    <br/>
                                    <div className={"row"}>
                                        <div className="col-sm-7">
                                            <label>Totle price</label><br/><input className="form-control" type="number"onChange={priceSetter}/>
                                        </div>
                                        <div className="col-sm-2 pad">
                                            <center>
                                                <button type="button " className="btn btn-primary btn-pay" onClick={onsub}>Pay</button>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddCredit;