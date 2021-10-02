import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Hope from "./test/Hope";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import AdminSideNav from "./SideNav/AdminSideNav";
import JourneyReport from "./Reports/JourneyReport";
import StartJourney from "./Reports/StartJourney";

import GetPhysicalToken from "./Customer/GetPhysicalToken";
import BusRoute from "./Bus/BusRoute";
import AddBusRoute from "./Bus/AddBusRoute";
import ViewPayment from "./Payment/ViewPayment";
import ReportedCustomers from "./Customer/ReportedCustomer";


function App() {
  return (
    <div>
      <Router>
    <div className="App">
        <Header/>
        <Route exact path="/AdminSideNav" component={AdminSideNav}/>
        <Route exact path="/JourneyReport" component={JourneyReport}/>
        <Route exact path="/Hope" component={Hope}/>
        <Route exact path="/StartJourney" component={StartJourney}/>
        <Route exact path="/ViewPayment" component={ViewPayment}/>
        <Route exact path="/GetPhysicalToken" component={GetPhysicalToken}/>
        <Route exact path="/BusRoute" component={BusRoute}/>
        <Route exact path="/AddBusRoute" component={AddBusRoute}/>
        <Route exact path="/ReportedCustomers" component={ReportedCustomers}/>



    </div>
        </Router>
        <Footer/>
    </div>
);
}

export default App;
