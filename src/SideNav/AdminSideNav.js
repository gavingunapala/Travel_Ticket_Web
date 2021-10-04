import React from "react"
import {useHistory} from "react-router-dom";
import '../CSS/SideNav.css';

const AdminSideNav = () => {

    const history = useHistory();

    const Logout = () => {
        localStorage.clear();
        history.push('/login');
    };

    return (
        <div>
            <nav id="sidebar">
                <div className="sidebar-header">
                    <h3>Admin Panel</h3>
                </div>
                <ul className="list-unstyled components">
                    <li>
                        <a href="/BusRoute">Manage Bus</a>
                        <a href="/ViewDrivers">Manage Drivers</a>
                        <a href="/ViewLocalPassangers"> View Local Passangers</a>
                        <a href="/ViewRoute">ViewRoute </a>
                        <a href="/ViewAllTokenApplyed">view Physical Token</a>
                        <a href="/ReportedCustomers">Reported Passengers </a>
                        <a href="/PassengerComplain">Passenger Complain </a>
                        <a href="/ViewPayment">Payments</a>
                        <a href="/WebJourney">  Journey Details </a>
                    </li>
                    <li>
                        <a>
                            <button onClick={Logout}>Logout</button>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
export default AdminSideNav;
