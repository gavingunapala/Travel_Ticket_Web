// import React,{useEffect, useState} from 'react';
// import AdminSideNav from "../SideNav/AdminSideNav";
// import '../CSS/tableEmployee.css';
// import firebaseapp from "../firebaseDB/firebase";
// import {useParams} from "react-router-dom";
//
//
// const GenaratePDF = () => {
//
//     const { id} = useParams();
//     console.log(id)
//     const[list, setlist] = useState([]);
//     const[jlist, setjlist] = useState([]);
//
//
//
//     useEffect(() => {
//         const list = firebaseapp.database().ref('Route').child(id).child('Buses');
//         const journeyList =[];
//
//
//         list.on('value',(snapshot)=>{
//             console.log(snapshot.val());
//             const journeies = snapshot.val();
//
//             for (let id in journeies){
//                 journeyList.push(journeies[id] )
//
//             }
//             console.log(journeyList)
//             setlist(journeyList)
//         })
//
//
//
//         const jlist = firebaseapp.database().ref('Route').child(id).child('Trips');
//         const TripList =[];
//
//
//         jlist.on('value',(snapshot)=>{
//             console.log(snapshot.val());
//             const journey = snapshot.val();
//
//             for (let id in journey){
//                 TripList.push(journey[id] )
//
//             }
//             console.log(TripList)
//             setjlist(TripList)
//         })
//
//
//     }, []);
//
//
//     return (
//         <div>
//             <div className="row1">
//                 <div className="col-2"> <AdminSideNav/></div>
//                 <div className="col-10"> <br/>
//                     {/*<Search/>*/}
//                     <div className="col-xs-6">
//                         <div className="searchBar">
//                             <input type="search" className="form-control" placeholder="Search Name or NIC NUMBER"/>
//                         </div>
//                     </div>
//                     {/*end*/}
//                     <div className="">
//                         <div className="row1">
//                             <div className="col-12 col-sm-6 col-md-6">
//                             </div>
//                             <span className="counter pull-right"></span>
//                             <br/><br/>
//                         </div>
//                         <a href="/" className="btn btn-primary" role="button">
//                             Customer Home
//                         </a>
//                         <a className="btn btn-success btngena" type="submit">Generate Report</a>
//                         <br /><br />
//                         <div className="row1">
//                             <div className="col-12">
//                                 <div className="table-responsive">
//                                     <table className="table1  table-hover table-bordered table-striped  tablesorter"
//                                            id="ipi-table">
//                                         <thead className="thead-dark">
//                                         <tr>
//
//                                             <th className="text-center ">Buses</th>
//
//                                         </tr>
//                                         </thead>
//                                         <tbody className="text-center">
//
//                                         {list.map((val)=>(
//                                             <tr id={"UserToken"}>
//                                                 <td>{val.BusID}</td>
//
//                                             </tr>
//                                         ))}
//
//
//
//                                         </tbody>
//                                     </table>
//                                     <br/>
//
//                                     <table className="table1  table-hover table-bordered table-striped  tablesorter"
//                                            id="ipi-table">
//                                         <thead className="thead-dark">
//                                         <tr>
//                                             <th className="text-center ">Trip</th>
//                                         </tr>
//                                         </thead>
//                                         <tbody className="text-center">
//                                         {jlist.map((v)=>(
//                                             <tr>
//                                                 <td>{v.TripName}</td>
//                                             </tr>
//                                         ))}
//
//
//
//                                         </tbody>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>
//                     </div></div>
//             </div>
//         </div>
//     )
// }
// export default GenaratePDF;
