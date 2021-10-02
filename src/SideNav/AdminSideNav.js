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
                        <a href="/">a</a>
                        <a href="/BusRoute">Bus Route</a>
                        <a href="/JourneyReport">Journey Details</a>
                        <a href="/ViewPayment">Payments</a>
                        <a href="/ViewAllTokenApplyed">view Physical Token</a>
                        <a href="/ReportedCustomers">Reported Passengers </a>
                        <a href="/GetPhysicalToken">apply for physical token </a>

                        <a href="/ViewRoute">ViewRoute </a>

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
