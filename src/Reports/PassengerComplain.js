import React,{useEffect, useState} from 'react';
import AdminSideNav from "../SideNav/AdminSideNav";
import '../CSS/tableEmployee.css';
import firebaseapp from "../firebaseDB/firebase";
import jsPDF from "jspdf";

const PassengerComplain = () => {
    const[list, setlist] = useState([]);
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes() + ":" + (today.getSeconds()<10?'0':'') + today.getSeconds();
    var dateTime = date+' '+time;
    const [SearchWord, setSearchWord] = useState('');

    useEffect(() => {
        const list = firebaseapp.database().ref('PassangerComplain');
        const complainList =[];
        list.on('value',(snapshot)=>{
            console.log(snapshot.val());
            const complains = snapshot.val();

            for (let id in complains){
                complainList.push(complains[id] )
            }
            console.log(complainList)
            setlist(complainList)
        })
    }, [list]);

    const genaratePDF=()=> {
        let doc = new jsPDF('p', 'pt', 'a1');
        doc.html(document.querySelector('#body'), {
            callback: function (doc) {
                doc.save('PassengerComplains.pdf');
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
                            <input type="search" className="form-control" placeholder="Search Date or Inspector Id" onChange={event =>{setSearchWord(event.target.value)}}/>
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
                        {/*    Customer Home*/}
                        {/*</a>*/}
                        <a className="btn btn-success btngena" type="submit" id={"generate"}onClick={genaratePDF}>Generate Report</a>
                        <br /><br />
                        <div className="" id={'body'}>
                            <div><label> Fortune Inn & Suites </label>
                            </div>
                            <div><label>{dateTime} </label><br/><br/>
                            </div>
                        <div className="row1">
                            <div className="col-12">
                                <div className="table-responsive">
                                    <table className="table1  table-hover table-bordered table-striped  tablesorter"
                                           id="ipi-table">
                                        <thead className="thead-dark">
                                        <tr>
                                            <th className="text-center">Date</th>
                                            <th className="text-center col-lg-4">Description</th>
                                            <th className="text-center">InspectorId</th>
                                            <th className="text-center">PassangerId</th>
                                            <th className="text-center">time</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        {/*{Customer.filter((val)=>{*/}
                                        {/*    if(SearchWord ==""){*/}
                                        {/*        return val*/}
                                        {/*    }else if(val.Name.toLowerCase().includes(SearchWord.toLowerCase())||val.NICNumber.toLowerCase().includes(SearchWord.toLowerCase()) ){*/}
                                        {/*        return val*/}
                                        {/*    }*/}

                                        {list.filter((val)=>{
                                            if(SearchWord ==""){
                                                return val
                                            }else if(val.inspectorId.toLowerCase().includes(SearchWord.toLowerCase())||val.date.toLowerCase().includes(SearchWord.toLowerCase()) ){
                                                return val
                                            }
                                        }).map((c)=>(
                                            <tr>
                                                <td>{c.date}</td>
                                                <td>{c.description}</td>
                                                <td>{c.inspectorId}</td>
                                                <td>{c.passengerID}</td>
                                                <td>{c.time}</td>
                                            </tr>
                                        ))}

                                        {/*}).map((customer) => {*/}
                                        {/*    return (*/}
                                        {/*        <tr>*/}
                                        {/*            <td>{customer.Name}</td>*/}
                                        {/*            <td>{customer.Address}</td>*/}
                                        {/*            <td>{customer.PhoneNumber}</td>*/}
                                        {/*            <td>{customer.NICNumber}</td>*/}
                                        {/*            <td>{customer.Email}</td>*/}
                                        {/*            <td>{customer.Password}</td>*/}
                                        {/*            <br />*/}
                                        {/*            <Link class="btn btn-success" role="button" to={`UpdateCustomers/${customer._id}`}>*/}
                                        {/*                <em className="fa fa-edit" id="icon"></em>*/}
                                        {/*            </Link>*/}
                                        {/*            <a className="btn btn-danger" id="icon">*/}
                                        {/*                <em className="fa fa-trash"*/}
                                        {/*                    onClick={() => {*/}
                                        {/*                        if (window.confirm("Are you sure you want to delete this Customer?")) {*/}
                                        {/*                            deleteCustomer(customer._id)*/}
                                        {/*                        }*/}
                                        {/*                        ;*/}
                                        {/*                    }}/></a>*/}
                                        {/*            <br /><br />*/}
                                        {/*        </tr>*/}
                                        {/*    );*/}
                                        {/*})}*/}
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
export default PassengerComplain;