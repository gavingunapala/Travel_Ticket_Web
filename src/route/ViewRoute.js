import React,{useEffect, useState} from 'react';
import AdminSideNav from "../SideNav/AdminSideNav";
import '../CSS/tableEmployee.css';
import firebaseapp from "../firebaseDB/firebase";


const ViewRoute = () => {
    const[list, setlist] = useState([]);
    const [SearchWord, setSearchWord] = useState('');

    useEffect(() => {
        const list = firebaseapp.database().ref('Route');
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


    return (
        <div>
            <div className="row1">
                <div className="col-2"> <AdminSideNav/></div>
                <div className="col-10"> <br/>
                    {/*<Search/>*/}
                    <div className="col-xs-6">
                        <div className="searchBar">
                            <input type="search" className="form-control" placeholder="Search StartTerminal or Route ID" onChange={event =>{setSearchWord(event.target.value)}}/>
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

                        <div className="row1">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table1  table-hover table-bordered table-striped  tablesorter"
                                           id="ipi-table">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th className="text-center">Route Id</th>
                                            <th className="text-center">Start Terminal</th>
                                            <th className="text-center ">End terminal</th>
                                            <th className="text-center">Fare p/km</th>
                                            <th className="text-center">Max Distance</th>
                                            <th className="text-center">View Buses</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        {list.filter((val)=>{
                                            if(SearchWord ==""){
                                                return val
                                            }else if(val.StartTerminal.toLowerCase().includes(SearchWord.toLowerCase())||val.RouteID.toLowerCase().includes(SearchWord.toLowerCase()) ){
                                                return val
                                            }
                                        }).map((val)=>(
                                            <tr id={"UserToken"}>
                                                <td>{val.RouteID}</td>
                                                <td>{val.StartTerminal}</td>
                                                <td>{val.EndTerminal}</td>
                                                <td>{val.FarePerkm}</td>
                                                <td>{val.MaximumDistance}</td>
                                                <td>
                                                    <a className="btn btn-success" id="icon" href={`/ViewOneBusOnRoute/${val.RouteID}`}>
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
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewRoute;
