import React, {useEffect, useState} from "react";
import AdminSideNav from "../SideNav/AdminSideNav";
import firebaseapp from "../firebaseDB/firebase";


const ViewPayment = () =>{

    const[list, setlist] = useState([]);

    useEffect(() => {
        const list = firebaseapp.database().ref('credit');
        const paymentList =[];
        list.on('value',(snapshot)=>{
            console.log(snapshot.val());
            const payment = snapshot.val();

            for (let id in payment){
                paymentList.push(payment[id] )
            }
            console.log(paymentList)
            setlist(paymentList)
        })
    }, []);


    return(
        <div>
            <div className="row1">
                <div className="col-2"> <AdminSideNav/></div>
                <div className="col-10"> <br/>
                    {/*<Search/>*/}
                    <div className="col-xs-6">
                        <div className="searchBar">
                            <input type="search" className="form-control" placeholder="Search Name or NIC NUMBER"/>
                        </div>
                    </div>
                    {/*end*/}
                    <div className="">
                        <div className="row1">
                            <div className="col-12 col-sm-6 col-md-6">
                            </div>
                            <span className="counter pull-right"></span>
                            <br/><br/>
                        </div>
                        {/*<a href="/" className="btn btn-primary" role="button">*/}
                        {/*    Add Bus to Route*/}
                        {/*</a>*/}
                        {/*<a className="btn btn-success btngena" type="submit">Bus Root</a>*/}
                        <br /><br />
                        <div className="row1">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table1  table-hover table-bordered table-striped  tablesorter"
                                           id="ipi-table">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th className="text-center">cardHolderName</th>
                                            <th className="text-center">cardType</th>
                                            <th className="text-center">ccNumber</th>
                                            <th className="text-center">cvv</th>
                                            <th className="text-center">expDate</th>
                                            <th className="text-center">id</th>
                                            <th className="text-center">rechargeAmount</th>

                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        {list.map((b)=>(
                                            <tr>
                                                <td>{b.cardHolderName}</td>
                                                <td>{b.cardType}</td>
                                                <td>{b.ccNumber}</td>
                                                <td>{b.cvv}</td>
                                                <td>{b.expDate}</td>
                                                <td>{b.id}</td>
                                                <td>{b.rechargeAmount}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                    <br/>
                                </div>
                            </div>
                        </div>
                    </div></div>
            </div>
        </div>

    );
}
export default ViewPayment;