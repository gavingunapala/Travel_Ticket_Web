import React,{useEffect, useState} from 'react';
import AdminSideNav from "../SideNav/AdminSideNav";
import '../CSS/tableEmployee.css';
import firebaseapp from "../firebaseDB/firebase";
import AddDriver from "./AddDrivers";

const ViewDrivers = () => {

    const[list, setlist] = useState([]);

    useEffect(() => {
        const list = firebaseapp.database().ref('Drivers');
        const DriverList =[];
        list.on('value',(snapshot)=>{
            console.log(snapshot.val());
            const driver = snapshot.val();

            for (let id in driver){
                DriverList.push(driver[id] )
            }
            console.log(DriverList)
            setlist(DriverList)
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
                        <a href="/AddDrivers" className="btn btn-primary " role="button" style={{float: 'left'}} >
                            Add Driver
                        </a>

                        <br /><br />
                        <div className="row1">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table1  table-hover table-bordered table-striped  tablesorter"
                                           id="ipi-table">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th className="text-center">Driver ID</th>
                                            <th className="text-center">Name</th>
                                            <th className="text-center">Licences NO</th>
                                            <th className="text-center">Address</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        {list.map((b)=>(
                                            <tr>
                                                <td>{b.DriverID}</td>
                                                <td>{b.Name}</td>
                                                <td>{b.LicenseNo}</td>
                                                <td>{b.Address}</td>
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
export default ViewDrivers;
