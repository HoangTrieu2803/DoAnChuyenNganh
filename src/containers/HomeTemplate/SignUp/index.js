import React from 'react'

export default function SignUp() {
  return (
    <div className="container col-4 mt-4 text-white ">
      <div className="loginForm py-4 px-4">
        <h1 className="text-center">
          <stroke>Đăng Ký</stroke>
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Họ tên</label>
            <input
              type="password"
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
          <button type="submit" className="btn btn-primary col-12">
            Đăng Ký
          </button>
        </form>
      </div>
    </div>
  )
}