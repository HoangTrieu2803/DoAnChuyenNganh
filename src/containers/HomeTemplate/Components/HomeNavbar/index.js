import React from "react";
import './index.css'
import {Link} from "react-router-dom"
export default function HomeNavbar() {
  const name = localStorage.getItem("User")
  const handleLogout = () =>{
    localStorage.clear()
    window.location.reload()
  }
  if(localStorage.getItem("User")){
   return(
    <div>
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to={"/"}>
        Navbar
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto center">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Phim <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Tin Tức <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Ứng Dụng
            </a>
          </li>
        </ul>
        <div>
         <span style={{color:"white",marginRight:"5px"}}>{name}</span>
         <button className="btn btn-danger" onClick={handleLogout} type="submit">Dang xuat</button>
        </div>
      </div>
    </nav>
  </div>
   )
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto center">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Phim <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tin Tức <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ứng Dụng
              </a>
            </li>
          </ul>
          <div>
            <Link className="nav-link login" to={"/login"}  >
            <img className="login_img" src="https://i.ibb.co/PCjW83Y/avt.png" alt="user"/>
              &nbsp; Đăng Nhập
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}