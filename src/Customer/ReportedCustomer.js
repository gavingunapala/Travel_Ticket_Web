import React, {useEffect, useState} from "react";
import AdminSideNav from "../SideNav/AdminSideNav";
import firebaseapp from "../firebaseDB/firebase";


const ReportedCustomers = () =>{

    const[list, setlist] = useState([]);

    useEffect(() => {
        const list = firebaseapp.database().ref('users');
        const reportedList =[];
        list.on('value',(snapshot)=>{
            console.log(snapshot.val());
            const repotedUser = snapshot.val();

            for (let id in repotedUser){
                    reportedList.push(repotedUser[id] )

            }
            console.log(reportedList)
            setlist(reportedList)
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
                                            <th className="text-center">name</th>
                                            <th className="text-center">status</th>
                                            <th className="text-center">Price</th>
                                            <th className="text-center">Discription</th>
                                            <th className="text-center">Action</th>

                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        {list.filter((val)=>{
                                            if(val.status =="hold"){
                                            return val
                                        }else{
                                            return null
                                        }
                                        }).map((val)=>(
                                            <tr>
                                                <td>{val.username}</td>
                                                <td>{val.status}</td>
                                                <td>{val.accBalance}</td>
                                                <td>{val.phone}</td>
                                                <td><a className="btn btn-success" id="icon">
                                                        <em className="fa fa-edit"/>
                                                    </a>
                                                </td>
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
export default ReportedCustomers;