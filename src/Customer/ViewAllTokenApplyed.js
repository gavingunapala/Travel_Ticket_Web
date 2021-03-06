import React,{useEffect, useState} from 'react';
import AdminSideNav from "../SideNav/AdminSideNav";
import '../CSS/tableEmployee.css';
import firebaseapp from "../firebaseDB/firebase";
import jsPDF from "jspdf";

const ViewAllTokenApplyed = () => {
    const[list, setlist] = useState([]);
    const [SearchWord, setSearchWord] = useState('');
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes() + ":" + (today.getSeconds()<10?'0':'') + today.getSeconds();
    var dateTime = date+' '+time;


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
                            <input type="search" className="form-control" placeholder="Search Name or NIC NUMBER" onChange={event =>{setSearchWord(event.target.value)}}/>
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
                        <a href="/GenerateViewAllTokenApplyed" className="btn btn-success " role="button" style={{float: 'left'}} >
                            Generate Report
                        </a>
                        <br></br>
                        <div className="" id={'body'}>
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
                                            <th className="text-center">Destination</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        {list.filter((val)=>{
                                            if(SearchWord ==""){
                                                return val
                                            }else if(val.Name.toLowerCase().includes(SearchWord.toLowerCase())||val.Nic.toLowerCase().includes(SearchWord.toLowerCase()) ){
                                                return val
                                            }
                                        }).map((j)=>(
                                            <tr>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewAllTokenApplyed;
