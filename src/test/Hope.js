import React,{useEffect,useState}from "react";
import firebaseapp from "../firebaseDB/firebase";

const Hope = () => {
    const[Salary, setSalary] = useState("");
    const[list, setlist] = useState([]);
    const SalarySetter = (e) => {
        setSalary(e.target.value);
    }

    const onSubmit = (e) => {
        const d1Ref =firebaseapp.database().ref("test");
        const d1 = {
            Salary,
            Name : "sakuni kasuni",
        };
        d1Ref.push(d1);
    }

    useEffect(() => {
        const list = firebaseapp.database().ref('test');
        const hopeList =[];
        list.on('value',(snapshot)=>{
            console.log(snapshot.val());
            const hopes = snapshot.val();

            for (let id in hopes){
                hopeList.push(hopes[id] )
            }
            console.log(hopeList)
            setlist(hopeList)
            })
    }, []);

    return (
        <div>
            <input type={"text"} onChange={SalarySetter}></input>
            <button onClick={onSubmit}>save</button>
            <div>
                <table><th>aa</th><th>Salary</th>
                {list.map((h)=>(
                    <tr>
                        <td>{h.Name}</td>
                        <td>{h.Salary}</td>
                    </tr>
                ))}
                </table>
            </div>

        </div>
    );
}

export default Hope;