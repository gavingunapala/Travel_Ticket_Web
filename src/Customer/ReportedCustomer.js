import React, {useEffect, useState} from "react";
import AdminSideNav from "../SideNav/AdminSideNav";
import firebaseapp from "../firebaseDB/firebase";


const ReportedCustomers = () =>{

    const[list, setlist] = useState([]);
    const [SearchWord, setSearchWord] = useState('');

    useEffect(() => {
        const list = firebaseapp.database().ref('LocalPassnger');
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
                            <input type="search" className="form-control" placeholder="Search Name or NIC NUMBER" onChange={event =>{setSearchWord(event.target.value)}}/>
                        </div>
                    </div>
                    {/*end*/}
                    <div className="">
                        <div className="row1">
                            <div className="col-12 col-sm-6 col-md-6">
                            </div>
                            <span className="counter pull-right"></span>
                            <br/>
                        </div>
                        <br />
                        <div className="row1">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table1  table-hover table-bordered table-striped  tablesorter"
                                           id="ipi-table">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th className="text-center">name</th>
                                            <th className="text-center">nic</th>
                                            <th className="text-center">Account Balance</th>
                                            <th className="text-center">address</th>
                                            <th className="text-center">Status</th>
                                            <th className="text-center">Action</th>

                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        {list.filter((val)=>{
                                            if(val.accStatus =="hold"){
                                                // if(SearchWord ==""){
                                                //     return val
                                                // }else if(val.name.toLowerCase().includes(SearchWord.toLowerCase())||val.nic.toLowerCase().includes(SearchWord.toLowerCase()) ){
                                                //     return val
                                                // }
                                            return val
                                        }else{
                                            return null
                                        }
                                        }).map((val)=>(
                                            <tr>
                                                <td>{val.name}</td>
                                                <td>{val.nic}</td>
                                                <td>{val.accBalance}</td>
                                                <td>{val.address}</td>
                                                <td>{val.accStatus}</td>
                                                <td><a className="btn btn-success" id="icon" href={`/ReleaseAccount/${val.name}`}>
                                                        <em className="fa fa-edit" />
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