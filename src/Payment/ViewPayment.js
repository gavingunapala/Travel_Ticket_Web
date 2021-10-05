import React, {useEffect, useState} from "react";
import AdminSideNav from "../SideNav/AdminSideNav";
import firebaseapp from "../firebaseDB/firebase";
import jsPDF from "jspdf";


const ViewPayment = () =>{

    const[list, setlist] = useState([]);
    const [SearchWord, setSearchWord] = useState('');
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + (today.getMinutes()<10?'0':'') + today.getMinutes() + ":" + (today.getSeconds()<10?'0':'') + today.getSeconds();
    var dateTime = date+' '+time;
    useEffect(() => {
        const list = firebaseapp.database().ref('credit');
        const paymentList =[];
        list.on('value',(snapshot)=>{
            console.log(snapshot.val());
            const payment = snapshot.val();

            for (let id in payment){
                paymentList.push(payment[id] )
            }
            console.log(paymentList)
            setlist(paymentList)
        })
    }, [list]);

    const genaratePDF=()=> {
        let doc = new jsPDF('p', 'pt', 'a1');
        doc.html(document.querySelector('#body'), {
            callback: function (doc) {
                doc.save('LocalPassenger.pdf');
            },
            margin: [60, 60, 60, 60],
            x: 32,
            y: 32
        });
    }

    return(
        <div data-testid="ViewPayment-1">
            <div className="row1">
                <div className="col-2"> <AdminSideNav/></div>
                <div className="col-10"> <br/>
                    {/*<Search/>*/}
                    <div className="col-xs-6">
                        <div className="searchBar">
                            <input type="search" className="form-control" placeholder="Search Id or Name"  onChange={event =>{setSearchWord(event.target.value)}}/>
                        </div>
                    </div>
                    {/*end*/}
                    <div className="" >
                        <div className="row1">
                            <div className="col-12 col-sm-6 col-md-6">
                            </div>
                            <span className="counter pull-right"></span>
                            <br/>
                        </div>
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
                                            <th className="text-center">ID</th>
                                            <th className="text-center">Card Holder Name</th>
                                            <th className="text-center">Card Type</th>
                                            <th className="text-center">CC Number</th>
                                            <th className="text-center">CVV</th>
                                            <th className="text-center">Exp Date</th>
                                            <th className="text-center">rechargeAmount</th>
                                        </tr>
                                        </thead>
                                        <tbody className="text-center">
                                        {list.filter((val)=>{
                                            if(SearchWord ==""){
                                                return val
                                            }else if(val.id.toLowerCase().includes(SearchWord.toLowerCase())||val.cardHolderName.toLowerCase().includes(SearchWord.toLowerCase()) ){
                                                return val
                                            }
                                        }).map((b)=>(
                                            <tr>
                                                <td>{b.id}</td>
                                                <td>{b.cardHolderName}</td>
                                                <td>{b.cardType}</td>
                                                <td>{b.ccNumber}</td>
                                                <td>{b.cvv}</td>
                                                <td>{b.expDate}</td>
                                                <td>{b.rechargeAmount}</td>
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

    );
}
export default ViewPayment;