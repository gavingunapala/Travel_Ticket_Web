import React, {useEffect, useState} from "react";
import firebaseapp from "../firebaseDB/firebase";
import recharge from "../Images/recharge.png";
import {useHistory, useParams} from "react-router-dom";



const RechargeAccount = () =>{

    const { id} = useParams();
    console.log(id)
    const his = useHistory();
    let fulltotle ;

    const[list, setlist] = useState([]);
    const[add, setadd] = useState(0);
    let [balance, setbalance] = useState(0);
    const[date, setdate] = useState("");
    const[Type, setType] = useState("");
    const[ccNumber, setccNumber] = useState("");
    const[cvvNumber, setcvvNumber] = useState("");


    const TotleSetter = (e) => {
        setadd(e.target.value);
    }
    const DateSetter = (e) => {
        setdate(e.target.value);
    }
    const typeSetter = (e) => {
        setType(e.target.value);
    }
    const ccSetter = (e) => {
        setccNumber(e.target.value);
    }
    const cvvSetter = (e) => {
        setcvvNumber(e.target.value);
    }



    useEffect(() => {
        const list = firebaseapp.database().ref('LocalPassnger').child(id);

        const reportedList =[];
        list.on('value',(snapshot)=>{
            console.log(snapshot.val().accBalance);
            setbalance(snapshot.val().accBalance)
            console.log(reportedList)
            setlist(reportedList)
        })
    }, [add]);

    fulltotle = (balance*1)+(add*1)
    const onSubmit = (e) => {
        if(Type == ""){
            alert("Enter Valid Card Type")
        }
        else if(ccNumber == ""){
            alert("Enter Valid Card Number")
        }
        else if(date == ""){
            alert("Enter Expire Date")
        }
        else if(add == ""){
            alert("Enter Amount you want to Add")
        }
        else{
        const d2Ref =firebaseapp.database().ref('LocalPassnger').child(id);
        d2Ref.update({
            accBalance: fulltotle.toString(),
        });

        const d3Ref =firebaseapp.database().ref("credit");
        const d3 = {
            cardHolderName:id,
            cardType:Type,
            ccNumber:ccNumber,
            cvv:cvvNumber,
            expDate:date,
            id:id,
            rechargeAmount:add,
        };
        d3Ref.push(d3);

        alert("Payment added");
        his.push('/');
        }
    }

    return(
        <div className={'background-image'}>
            <div className="row1">
                <div className="col-sm-2"></div>
                <div className=" col-sm-4">
                    <div><strong></strong><label></label></div>
                    <div className=" justify-content-center align-items-center">
                        <div>
                            <form className="card">
                                <br/>
                                <h2 className="text-center">Payment</h2>
                                <br/>
                                <div className="container   ">
                                    <div><label>Customer ID</label><input className="form-control" type="text"
                                                                          value={id} disabled={true}  />
                                    </div>
                                    <div><label>Account Balance</label><input className="form-control" type="text"
                                                                          value={balance} disabled={true}/>
                                    </div>

                                    <div><label>Name On Credit Card</label><input className="form-control" type="text"
                                                                                 />
                                    </div>
                                    <div><label>Card Type</label><br/>
                                        <select  id="Type"className="form-control" onChange={typeSetter}>
                                            <option value="Credit">Select</option>
                                            <option value="Credit">Credit</option>
                                            <option value="Debit">Debit</option>
                                            <option value="visa">Visa</option>
                                            <option value="Master">Master</option>
                                        </select>
                                    </div>
                                    <div className={"row"}>
                                        <div className="col-sm-7">
                                            <label>Card Number</label><br/><input className="form-control" type="number"
                                                                            onChange={ccSetter}      min='0' />
                                        </div>
                                        <div className="col-sm-4">
                                            <label>CVV Number</label><br/><input className="form-control" type="number"
                                                                               onChange={cvvSetter}  min='0' />
                                        </div>
                                    </div>
                                    <div><label>Expire Date</label><input className="form-control" type="date"
                                                                    onChange={DateSetter}     /></div>
                                    <br/>
                                    <div className={"row"}>
                                        <div className="col-sm-7">
                                            <label>Price</label><br/><input className="form-control" type="number" onChange={TotleSetter}/>
                                        </div>
                                        <div className="col-sm-2 pad">
                                            <center>
                                                <button type="button " className="btn btn-primary btn-pay" onClick={onSubmit}>Pay
                                                </button>
                                            </center>
                                        </div>
                                        <br></br>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 image">
                    <img src={recharge} loading="auto" alt="center" height="600"
                         width="500"/>
                </div>
            </div>
        </div>
    );
}
export default RechargeAccount;






