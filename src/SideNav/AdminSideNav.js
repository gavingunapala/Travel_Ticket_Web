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
                        <a href="/">Bus Route</a>
                        <a href="/JourneyReport">Journey Details</a>
                        <a href="/AddCredit">Add Payments</a>
                        <a href="/RoomBookingDashboard">Create Physical Token</a>
                        <a href="/PaymentView">Reported Passengers </a>



                        <a href="/">apply for physical token </a>

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
