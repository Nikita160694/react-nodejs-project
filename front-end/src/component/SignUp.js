import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        const auth=localStorage.getItem('user');
        if(auth)
        {
         navigate('/')
        }
    })

    const collectData = async () => {
        console.warn(name, email, password)
        let result = await fetch("http://localhost:5000/register", {
            method: "post",
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': "application/json"
            },

        });
        result = await result.json();
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result.result));
        localStorage.setItem("token",JSON.stringify(result.auth));
        if (result) 
        {
      navigate('/')
        }
    }
    return (
        <div className="inputBox-register ">
            <h1>Register</h1>
            <div className="signup-from">
            <input className="inputBox" value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name"></input>
            <input className="inputBox" value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Email"></input>
            <input className="inputBox" value={password} onChange={(e) => setPassword(e.target.value)} type="Password" placeholder="Enter Password"></input>
            <button className="appButton" onClick={collectData} type="button">SignUp</button>
            </div>
        </div>
    )
}
export default SignUp;