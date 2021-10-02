import React,{useEffect, useState} from 'react';
import AdminSideNav from "../SideNav/AdminSideNav";
import '../CSS/tableEmployee.css';
import firebaseapp from "../firebaseDB/firebase";
import jsPDF from "jspdf";

const ViewAllTokenApplyed = () => {


    const[list, setlist] = useState([]);



    useEffect(() => {
        const list = firebaseapp.database().ref('Token');
        const journeyList =[];
        list.on('value',(snapshot)=>{
            console.log(snapshot.val());
            const journeies = snapshot.val();

            for (let id in journeies){
                journeyList.push(journeies[id] )
            }
            console.log(journeyList)
            setlist(journeyList)
        })
    }, []);


    const genaratePDF=()=> {
        let doc = new jsPDF('p', 'pt', 'a4');
        doc.html(document.querySelector('#UserToken'), {
            callback: function (doc) {
                doc.save('Employee Report.pdf');
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
                                            <th className="text-center ">Phone</th>
                                            <th className="text-center">Nic</th>
                                            <th className="text-center">Route</th>
                                            <th className="text-center">Start</th>
                                            <th className="text-center">Distination</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        {/*{Customer.filter((val)=>{*/}
                                        {/*    if(SearchWord ==""){*/}
                                        {/*        return val*/}
                                        {/*    }else if(val.Name.toLowerCase().includes(SearchWord.toLowerCase())||val.NICNumber.toLowerCase().includes(SearchWord.toLowerCase()) ){*/}
                                        {/*        return val*/}
                                        {/*    }*/}

                                        {list.map((j)=>(
                                            <tr id={"UserToken"}>
                                                <td>{j.Name}</td>
                                                <td>{j.Phone}</td>
                                                <td>{j.Nic}</td>
                                                <td>{j.Route}</td>
                                                <td>{j.Start}</td>
                                                <td>{j.Distination}</td>
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
export default ViewAllTokenApplyed;
