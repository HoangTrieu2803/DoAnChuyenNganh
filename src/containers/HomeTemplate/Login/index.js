import React from "react";
import './index.css'

export default function Login() {
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
            />
          </div>
          <button type="submit" className="btn btn-primary col-12">
            Đăng Nhập
          </button>
        </form>
        <div className="text-center pt-2">
            <a href={"/signup"}>
              Bạn chưa có tài khoản?
            </a>
          </div>
      </div>
    </div>
  );
}
