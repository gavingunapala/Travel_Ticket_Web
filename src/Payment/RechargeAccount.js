import React, {useEffect, useState} from "react";
import firebaseapp from "../firebaseDB/firebase";
import img from "../Images/undraw_logic_n6th.png";
import {useHistory, useParams} from "react-router-dom";



const RechargeAccount = () =>{

    const { id} = useParams();
    console.log(id)
    const his = useHistory();

    // const[id, setid] = useState("");

    let fulltotle ;

    const[list, setlist] = useState([]);
    const[add, setadd] = useState(0);
    let [balance, setbalance] = useState(0);

    //
    // const[Name, setName] = useState([]);
    // const[status, setstatus] = useState([]);
    // const[Address, setAddress] = useState([]);
    // const[Nic, setNic] = useState([]);




    const TotleSetter = (e) => {
        setadd(e.target.value);
    }
    // const nameSetter = (e) => {
    //     setid(e.target.value);
    // }

    useEffect(() => {
        const list = firebaseapp.database().ref('LocalPassnger').child(id);


        const reportedList =[];
        list.on('value',(snapshot)=>{
            console.log(snapshot.val().accBalance);
            // const repotedUser = snapshot.val();
            setbalance(snapshot.val().accBalance)
            //
            // setName(snapshot.val().name)
            // setstatus(snapshot.val().accStatus)
            // setAddress(snapshot.val().address)
            // setNic(snapshot.val().nic)


            console.log(reportedList)
            setlist(reportedList)
        })


    }, [add]);




    fulltotle = (balance*1)+(add*1)
    const onSubmit = (e) => {
        const d2Ref =firebaseapp.database().ref('LocalPassnger').child(id);
        d2Ref.update({
            accBalance: fulltotle.toString(),
        });
        alert("Payment added");
        his.push('/');
    }
    return(
        <div className={'background-image'}>
            <div className="row1">
                <div className="col-sm-2"></div>
                <div className=" col-sm-4">
                    <div><strong></strong><label></label></div>
                    <div className=" justify-content-center align-items-center">
                        <div>
                            <div className="card">
                                <br/>
                                <h2 className="text-center">Payment</h2>
                                <br/>
                                <div className="container   ">
                                    <div><label>Customer ID</label><input className="form-control" type="text"
                                                                          value={id}   />
                                    </div>
                                    <div><label>Account Balance</label><input className="form-control" type="text"
                                                                          value={balance}/>
                                    </div>

                                    <div><label>Name On Credit Card</label><input className="form-control" type="text"
                                                                                 />
                                    </div>
                                    <div><label>Phone Number</label><br/><input className="form-control" type="number"
                                                                                min='0' />
                                    </div>
                                    <div className={"row"}>
                                        <div className="col-sm-7">
                                            <label>Card Number</label><br/><input className="form-control" type="number"
                                                                                  min='0' />
                                        </div>
                                        <div className="col-sm-4">
                                            <label>CVV Number</label><br/><input className="form-control" type="number"
                                                                                 min='0' />
                                        </div>
                                    </div>
                                    <div><label>Expire Date</label><input className="form-control" type="date"
                                                                         /></div>
                                    <br/>
                                    <div className={"row"}>
                                        <div className="col-sm-7">
                                            <label>Totle price</label><br/><input className="form-control" type="number" onChange={TotleSetter}/>
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
    );
}
export default RechargeAccount;






