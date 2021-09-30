import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Hope from "./test/Hope";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";


function App() {
  return (
    <div>
      <Router>
    <div className="App">
        <Header/>

        <Hope />
    </div>
        </Router>
        <Footer/>
    </div>
);
}

export default App;
