import React from "react";
import './index.css'

export default function HomeNavbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href={"/"}>
          Navbar
        </a>
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
                Cụm Rạp <span className="sr-only">(current)</span>
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
            <a className="nav-link login" href={"/login"}  >
            <img className="login_img" src="https://i.ibb.co/PCjW83Y/avt.png" alt="user"/>
              &nbsp; Đăng Nhập
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}