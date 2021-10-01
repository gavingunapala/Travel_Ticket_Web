import React,{useEffect, useState} from 'react';
import AdminSideNav from "../SideNav/AdminSideNav";
import '../CSS/tableEmployee.css';
import firebaseapp from "../firebaseDB/firebase";

const JourneyReport = () => {

    const[name, setname] = useState("");

    useEffect(() => {
        const list = firebaseapp.database().ref('journey');
        list.on('value',(snapshot)=>{
            console.log(snapshot.val())
            // setname(snapshot.val().name)
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
                    <a href="/" className="btn btn-primary" role="button">
                        Customer Home
                    </a>
                    <a className="btn btn-success btngena" type="submit">Generate Report</a>
                    <br /><br />
                    <div className="row1">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table1  table-hover table-bordered table-striped  tablesorter"
                                       id="ipi-table">
                                    <thead className="thead-dark">
                                    <tr>
                                        <th className="text-center">Name</th>
                                        <th className="text-center col-lg-4">Address</th>
                                        <th className="text-center">Phone number</th>
                                        <th className="text-center">NIC Number</th>
                                        <th className="text-center">Email</th>
                                        <th className="text-center">Password</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-center">
                                    {/*{Customer.filter((val)=>{*/}
                                    {/*    if(SearchWord ==""){*/}
                                    {/*        return val*/}
                                    {/*    }else if(val.Name.toLowerCase().includes(SearchWord.toLowerCase())||val.NICNumber.toLowerCase().includes(SearchWord.toLowerCase()) ){*/}
                                    {/*        return val*/}
                                    {/*    }*/}
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
                </div></div>
        </div>
        </div>
    )
}
export default JourneyReport;
