import React from 'react'
import { useState } from 'react';
import { signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from "./modules/firebase-config";
import { Link } from 'react-router-dom';
import './index.css'
export default function Login(props) {
  const [loginEmail , setloginEmail] = useState("");
  const [loginPassword , setloginPassword] = useState("");
  const handleLogin = async (event) =>{
    try{
      const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);
      localStorage.setItem("User",[loginEmail])
      window.location.replace("/")
    }
    catch (error){
      console.log(error.message);
    }
  }
  if(localStorage.getItem("User")){
    window.location.replace("/")
  }
  return (
    <div className="container col-4 mt-4 text-white ">
      <div className="loginForm py-4 px-4">
        <h1 className="text-center">
          <stroke>Đăng Nhập</stroke>
        </h1>
        <small>
          <i>Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!</i>
        </small>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
            onChange={(event)=>{
              setloginEmail(event.target.value)
            }}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Mật Khẩu</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Mật khẩu"
              onChange={(event)=>{
                setloginPassword(event.target.value)
              }}
            />
          </div>
          <button onClick={handleLogin} type="button" className="btn btn-primary col-12">
            Đăng Nhập
          </button>
        </form>
        <div className="text-center pt-2">
            <Link to={"/signup"}>
              Bạn chưa có tài khoản?
            </Link>
          </div>
      </div>
    </div>
  );
}
