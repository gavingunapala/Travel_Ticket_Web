import React, {useState} from "react"
import img from '../Images/undraw_logic_n6th.png';
import firebaseapp from "../firebaseDB/firebase";

//customer
const AddDrivers = () => {

    const[Address, setAddress] = useState("");
    const[Category, setCategory] = useState("");
    const[DriverID, setDriverID] = useState("");
    const[LicenseNo, setLicenseNo] = useState("");
    const[Name, setName] = useState("");
    const[Password, setPassword] = useState("");

    const AddressSetter = (e) => {
        setAddress(e.target.value);
    }
    const CategorySetter = (e) => {
        setCategory(e.target.value);
    }
    const DriverIDSetter = (e) => {
        setDriverID(e.target.value);
    }
    const LicenseNoSetter = (e) => {
        setLicenseNo(e.target.value);
    }
    const NameSetter = (e) => {
        setName(e.target.value);
    }
    const PasswordSetter = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        const d2Ref =firebaseapp.database().ref("Drivers");
        const d2 = {
            Address:Address,
            Category:Category,
            DriverID:DriverID,
            LicenseNo:LicenseNo,
            Name:Name,
            Password:Password,
        };
        d2Ref.push(d2);
    }

    return (
        <div>
            <div className="row">
                <div className="col-sm-2"></div>
                <div className=" col-sm-3">
                    <div><strong></strong><label></label></div>
                    <div className=" justify-content-center align-items-center">
                        <div>
                            <div className="card">
                                <br />
                                <h2 className="text-center">Add Driver</h2>
                                <br />
                                <div className="container   ">
                                    <div><label>Address</label><input className="form-control" type="text" onChange={AddressSetter}/>
                                    </div>
                                    <div className="form-group">
                                        <div><label>Category</label><input className="form-control" type="text" onChange={CategorySetter}/>
                                        </div>
                                        <div><label>DriverID</label><input className="form-control"
                                                                        type="text" onChange={DriverIDSetter}/></div>
                                        <div><label>LicenseNo</label><input className="form-control"
                                                                              type="text" onChange={LicenseNoSetter}/></div>
                                        <div><label>Name</label><input className="form-control"
                                                                        type="text" onChange={NameSetter}/></div>
                                        <div><label>Password</label><input className="form-control"
                                                                        type="text" onChange={PasswordSetter}/></div>
                                        <br/>
                                        <button className="btn btn-primary" type="submit" onClick={onSubmit}>&nbsp;Add Driver</button>
                                        <br />
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 image">
                    <img src={img} loading="auto" alt="center" height="600"
                         width="500"/>
                </div>
            </div>
        </div>
    )
}
export default AddDrivers;