import React,{useEffect, useState} from 'react';
import AdminSideNav from "../SideNav/AdminSideNav";
import '../CSS/tableEmployee.css';
import firebaseapp from "../firebaseDB/firebase";

const BusRoute = () => {

    const[list, setlist] = useState([]);
    const [SearchWord, setSearchWord] = useState('');

    useEffect(() => {
        const list = firebaseapp.database().ref('Bus');
        const busrouteList =[];
        list.on('value',(snapshot)=>{
            console.log(snapshot.val());
            const busroutes = snapshot.val();

            for (let id in busroutes){
                busrouteList.push(busroutes[id] )
            }
            console.log(busrouteList)
            setlist(busrouteList)
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
                            <input type="search" className="form-control" placeholder="Search Route ID or Bus ID" onChange={event =>{setSearchWord(event.target.value)}}/>
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
                        <a href="/AddBusRoute" className="btn btn-primary " role="button" style={{float: 'left'}} >
                            Add Bus
                        </a>

                        <br /><br />
                        <div className="row1">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table1  table-hover table-bordered table-striped  tablesorter"
                                           id="ipi-table">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th className="text-center">Route Number</th>
                                            <th className="text-center">Bus ID</th>
                                            <th className="text-center">Bus Type</th>
                                            <th className="text-center">No of Seats</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        {list.filter((val)=>{
                                            if(SearchWord ==""){
                                                return val
                                            }else if(val.BusID.toLowerCase().includes(SearchWord.toLowerCase())||val.RouteID.toLowerCase().includes(SearchWord.toLowerCase()) ){
                                                return val
                                            }
                                        }).map((b)=>(
                                            <tr>
                                                <td>{b.RouteID}</td>
                                                <td>{b.BusID}</td>
                                                <td>{b.BusType}</td>
                                                <td>{b.NoofSeats}</td>
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
export default BusRoute;
