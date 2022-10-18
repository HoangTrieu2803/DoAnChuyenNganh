import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./module/firebase-config";
export default function SignUp() {
  const [signUpEmail, setsignUpEmail] = useState("");
  const [signUpPassword, setsignUpPassword] = useState("");
  const handleSignUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        signUpEmail,
        signUpPassword
      );
      alert("dang ky thanh cong");
      window.location.replace("/login");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <section className="backgroundBody pb-5">
      <div className="container-fluid col-4 mt-4 text-white ">
        <div className="loginForm py-4 px-4">
          <h1 className="text-center">
            <stroke>Đăng Ký</stroke>
            <br />
            <img src="../favicon.ico" className="pt-2" />
          </h1>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
                onChange={(event) => {
                  setsignUpEmail(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Họ tên</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Họ tên"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Mật Khẩu</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Mật khẩu"
                onChange={(event) => {
                  setsignUpPassword(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Nhập Lại Mật Khẩu</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Nhập lại mật khẩu"
              />
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Chấp nhập <a href="">điều khoản</a>
              </label>
            </div>
            <button
              onClick={handleSignUp}
              type="button"
              className="btn btn-primary col-12"
            >
              Đăng Ký
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
