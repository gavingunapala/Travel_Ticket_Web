import React,{useEffect, useState} from 'react';
import AdminSideNav from "../SideNav/AdminSideNav";
import '../CSS/tableEmployee.css';
import firebaseapp from "../firebaseDB/firebase";
import AddDriver from "./AddDrivers";
import jsPDF from "jspdf";

const ViewDrivers = () => {

    const[list, setlist] = useState([]);
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes() + ":" + (today.getSeconds()<10?'0':'') + today.getSeconds();
    var dateTime = date+' '+time;
    const [SearchWord, setSearchWord] = useState('');

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

    const genaratePDF=()=> {
        let doc = new jsPDF('p', 'pt', 'a1');
        doc.html(document.querySelector('#body'), {
            callback: function (doc) {
                doc.save('DriverReport.pdf');
            },
            margin: [60, 60, 60, 60],
            x: 32,
            y: 32
        });

    }

    return (
        <div>
            <div className="row1">
                <div className="col-2"> <AdminSideNav/></div>
                <div className="col-10"> <br/>
                    {/*<Search/>*/}
                    <div className="col-xs-6">
                        <div className="searchBar">
                            <input type="search" className="form-control" placeholder="Search Name or Driver ID"  onChange={event =>{setSearchWord(event.target.value)}}/>
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
                        <a href="/AddDrivers" className="btn btn-primary " role="button" style={{float: 'left'}} >
                            Add Driver
                        </a>
                        <a className="btn btn-success btngena" type="submit" id={"generate"}onClick={genaratePDF}>Generate Report</a>
                        <br></br>

                        <div className="" id={'body'}>
                            <div><label> Fortune Inn & Suites </label>
                            </div>
                            <div><label>{dateTime} </label><br/>
                            </div>
                        <br />
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
                                        {list.filter((val)=>{
                                            if(SearchWord ==""){
                                                return val
                                            }else if(val.DriverID.toLowerCase().includes(SearchWord.toLowerCase())||val.Name.toLowerCase().includes(SearchWord.toLowerCase()) ){
                                                return val
                                            }
                                        }).map((b)=>(
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
                        </div>
                    </div></div>
            </div>
        </div>
    )
}
export default ViewDrivers;
