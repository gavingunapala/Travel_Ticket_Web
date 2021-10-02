import React, {useEffect, useState} from "react";
import firebaseapp from "../firebaseDB/firebase";
import {useParams} from "react-router-dom";
import img from "../Images/undraw_logic_n6th.png";


const ReleaseAccount = () =>{

    const { id} = useParams();
    console.log(id)

    const[list, setlist] = useState([]);

    const[Name, setName] = useState([]);
    const[status, setstatus] = useState([]);
    const[Address, setAddress] = useState([]);
    const[Nic, setNic] = useState([]);




    const statusSetter = (e) => {
        setstatus(e.target.value);
    }

    useEffect(() => {
        const list = firebaseapp.database().ref('LocalPassnger').child(id);
        const reportedList =[];
        list.on('value',(snapshot)=>{
            console.log(snapshot.val());
            const repotedUser = snapshot.val();

            setName(snapshot.val().name)
            setstatus(snapshot.val().accStatus)
            setAddress(snapshot.val().address)
            setNic(snapshot.val().nic)


            console.log(reportedList)
            setlist(reportedList)
        })
    }, []);


    const onSubmit = (e) => {
        const d2Ref =firebaseapp.database().ref('LocalPassnger').child(id);
        const d2 = {
            accStatus:status,

        };
        d2Ref.push(d2);
        alert("added");

    }


    return(
        <div>
            <div className="row">
                <div className="col-sm-2"></div>
                <div className=" col-sm-3">
                    <div><strong></strong><label></label></div>
                    <div className=" justify-content-center align-items-center">
                        <div>
                            <div className="card">
                                <br />
                                <h2 className="text-center">Get Token</h2>
                                <br />
                                <div className="container">
                                    <div><label>Name</label><input className="form-control" type="text" value={Name} />
                                    </div>
                                    <div><label>account status</label><input className="form-control" type="text" onClick={statusSetter} />
                                    </div>
                                    <div><label>Address</label><input className="form-control" type="text" value={Address} />
                                    </div>
                                    <div className="form-group">
                                        <div><label>Nic</label><input className="form-control" type="text"  value={Nic} />
                                        </div>
                                        <br/>
                                        <button className="btn btn-warning" type="submit" onClick={onSubmit} >&nbsp;Add token </button>
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
    );
}
export default ReleaseAccount;