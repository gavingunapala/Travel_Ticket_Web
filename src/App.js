import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Hope from "./test/Hope";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import AdminSideNav from "./SideNav/AdminSideNav";
import StartJourney from "./Reports/StartJourney";
import GetPhysicalToken from "./Customer/GetPhysicalToken";
import BusRoute from "./Bus/BusRoute";
import AddBusRoute from "./Bus/AddBusRoute";
import ViewPayment from "./Payment/ViewPayment";
import ReportedCustomers from "./Customer/ReportedCustomer";
import ViewAllTokenApplyed from "./Customer/ViewAllTokenApplyed";
import ViewRoute from "./route/ViewRoute";
import ViewOneBusOnRoute from "./Bus/ViewOneBusOnRoute";
import VisualFeedback from "./Reports/VisualFeedback";
import PassengerComplain from "./Reports/PassengerComplain";
import ReleaseAccount from "./Customer/ReleaseAccount";
import ViewDrivers from "./Drivers/ViewDrivers";
import ViewLocalPassangers from "./Customer/ViewLocalPassangers";
import AddDrivers from "./Drivers/AddDrivers";
import EndVisualFeedback from "./Reports/EndVisualFeedback";
import GenerateViewAllTokenApplyed from "./Customer/GenerateViewAllTokenApplyed";
import RechargeAccount from "./Payment/RechargeAccount";
import WebJourney from "./Reports/WebJourney";
import Login from "./login/Login";
import Home from "./Customer/Home";
import LoginUser from "./login/LoginUser";


function App() {
  return (
    <div>
      <Router>
    <div className="App">
        <Header/>
        <Route exact path="/AdminSideNav" component={AdminSideNav}/>
        <Route exact path="/Hope" component={Hope}/>
        <Route exact path="/StartJourney" component={StartJourney}/>
        <Route exact path="/ViewPayment" component={ViewPayment}/>
        <Route exact path="/GetPhysicalToken/:id" component={GetPhysicalToken}/>
        <Route exact path="/BusRoute" component={BusRoute}/>
        <Route exact path="/AddBusRoute" component={AddBusRoute}/>
        <Route exact path="/ReportedCustomers" component={ReportedCustomers}/>
        <Route exact path="/ViewAllTokenApplyed" component={ViewAllTokenApplyed}/>
        <Route exact path="/ViewRoute" component={ViewRoute}/>
        <Route exact path="/PassengerComplain" component={PassengerComplain}/>
        <Route exact path="/ViewOneBusOnRoute/:id" component={ViewOneBusOnRoute}/>
        <Route exact path="/ReleaseAccount/:id" component={ReleaseAccount}/>
        <Route exact path="/ViewDrivers" component={ViewDrivers}/>
        <Route exact path="/ViewLocalPassangers" component={ViewLocalPassangers}/>
        <Route exact path="/GenaratePDF/:id" component={GenaratePDF}/>
        <Route exact path="/VisualFeedback" component={VisualFeedback}/>
        <Route exact path="/AddDrivers" component={AddDrivers}/>
        <Route exact path="/EndVisualFeedback" component={EndVisualFeedback}/>
        <Route exact path="/GenerateViewAllTokenApplyed" component={GenerateViewAllTokenApplyed}/>
        <Route exact path="/RechargeAccount/:id" component={RechargeAccount}/>
        <Route exact path="/WebJourney" component={WebJourney}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/LoginUser" component={LoginUser}/>
    </div>
        </Router>
        <Footer/>
    </div>
);
}

export default App;
