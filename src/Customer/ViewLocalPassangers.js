import React,{useEffect, useState} from 'react';
import AdminSideNav from "../SideNav/AdminSideNav";
import '../CSS/tableEmployee.css';
import firebaseapp from "../firebaseDB/firebase";

const ViewLocalPassangers = () => {

    const[list, setlist] = useState([]);

    useEffect(() => {
        const list = firebaseapp.database().ref('LocalPassnger');
        const LPList =[];
        list.on('value',(snapshot)=>{
            console.log(snapshot.val());
            const lp = snapshot.val();

            for (let id in lp){
                LPList.push(lp[id] )
            }
            console.log(LPList)
            setlist(LPList)
        })
    }, []);

    return (
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

                        <br /><br />
                        <div className="row1">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table1  table-hover table-bordered table-striped  tablesorter"
                                           id="ipi-table">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th className="text-center">Name</th>
                                            <th className="text-center">NIC</th>
                                            <th className="text-center">Address</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        {list.map((b)=>(
                                            <tr>
                                                <td>{b.name}</td>
                                                <td>{b.nic}</td>
                                                <td>{b.address}</td>
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
    )
}
export default ViewLocalPassangers;
