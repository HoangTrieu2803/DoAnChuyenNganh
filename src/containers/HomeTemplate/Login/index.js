import React from 'react'
import { useState } from 'react';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from "./modules/firebase-config";
export default function Login(props) {
  const [loginEmail , setloginEmail] = useState("");
  const [loginPassword , setloginPassword] = useState("");
  const register = async () =>{
    try{
      const user = await createUserWithEmailAndPassword(auth,loginEmail,loginPassword);
      console.log(user);
    }
    catch (error){
      console.log(error.message);
    }
  }
  const handleLogin = async (event) =>{
    try{
      const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
      localStorage.setItem("User",[loginEmail,loginPassword])
    }
    catch (error){
      console.log(error.message);
    }
  }
  const handleLogout = async () =>{

  }
  return (
    <div>
     <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input  type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' onChange={(event) =>{
      setloginEmail(event.target.value)
    }}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' onChange={(event) =>{
      setloginPassword(event.target.value)
    }} />
  </div>
  <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <a href='/' onClick={handleLogin} type="button" className="btn btn-primary">Submit</a>
</form>

    </div>
  )
}
