import React, {useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login=()=>{
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

   const navigate=useNavigate();

   useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth)
    {
     navigate('/')
    }
})

    const handlelogin=async()=>{
        console.log(email,password)
        let result = await fetch("http://localhost:5000/login", {
            method: "post",
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': "application/json"
            },

    })
    result = await result.json();
        console.log(result);
        localStorage.setItem("user",JSON.stringify(result.user));
        localStorage.setItem("token",JSON.stringify(result.auth));
        navigate("/")
        if(result.auth) //1if(result.name)
        
        
        {
            
        }else{
            alert("please enter correct details")
        }
}

    return(
        <div className="login">
            <h1>Login</h1>
            <div className="login-from">
        <input className="inputBox" value={email} onChange={(e)=>setEmail(e.target.value)} 
         type="text" placeholder="Enter Email"></input>

        <input className="inputBox" value={password} onChange={(e)=>setPassword(e.target.value)} 
         type="password" placeholder="Enter Password"></input>

         <button className="appButton" type="button" onClick={handlelogin} >Login</button>
         </div>
        </div>
        
    )
}
export default Login;