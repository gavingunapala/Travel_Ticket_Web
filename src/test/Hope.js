import React,{useEffect,useState}from "react";
import firebaseapp from "../firebaseDB/firebase";

const Hope = () => {
    const[Salary, setSalary] = useState("");

    const SalarySetter = (e) => {
        setSalary(e.target.value);
    }

    const onSubmit = (e) => {
        firebaseapp.database().ref("test").push(Salary);
    }

    useEffect(() => {
        const list = firebaseapp.database().ref('test');
        list.on('value',(snapshot)=>{
            console.log(snapshot.val())
            })
    }, []);



    return (
        <div>
            <input type={"text"} onChange={SalarySetter}></input>
            <button onClick={onSubmit}>save</button>
        </div>
    );
}

export default Hope;