import React, {useState, useEffect} from "react"
import {useHistory} from "react-router-dom";
import firebaseapp from "../firebaseDB/firebase";
import '../../src/CSS/Login/Login1.css'

const Login = () => {

    const his = useHistory();
    const [Email, setEmail] = useState('0');
    const [Password, setPassword] = useState('');
    const [lenth, setlenth] = useState(0);

    useEffect(() => {

    }, [Email]);

    const EmailSetter = (e) => {
        setEmail(e.target.value);
    }
    const PasswordSetter = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        if(Email == "0"){
            alert("please enter user name")
        }
        else{
        const list = firebaseapp.database().ref('LocalPassnger').child(Email);
        const LPList =[];
        console.log(Email)
        console.log(Password)

        list.on('value',(snapshot)=>{
            if (Email == "admin" && Password == "123") {
                his.push('/AdminSideNav');
            }
            else if(Email == snapshot.val().name){

                if( Password == snapshot.val().password){
                    alert("logged")
                    his.push(`/GetPhysicalToken/${snapshot.val().name}`);
                }else{
                    alert("password is not valid")
                }
            }
            else {
                alert("User name is not valid")
            }
        })
        }
    }

console.log(lenth)
    return (
        <div>
            <div id="login-one" className="login-one">
                <br /><br />
                <a className="foodPrices" href={"/"} >
                    <i className="fa fa-home" style={{fontWeight: "bold"}}>
                    </i> Home
                </a>
                <div className="login-one-form">
                    <div className="col">
                        <div className="login-one-ico"><i className="fa fa-unlock-alt" id="lockico"></i></div>
                        <div className="form-group mb-3">
                            <div>
                                <h3 id="heading"><center>Log in</center></h3>
                            </div>
                            <div><label><b>User Name</b></label>
                            </div>
                            <input className="form-control" type="text" id="input" placeholder=" "
                                   onChange={EmailSetter}
                            /><br></br>
                            <div><label><b>Password</b></label>
                            </div>
                            <input className="form-control" type="password" id="input" placeholder=" "
                                   onChange={PasswordSetter}
                            /><br></br>
                            <button className="btn btn-primary" id="button" type="submit"
                                    onClick={onSubmit}
                            >Log in</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;

