import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faMobileButton } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function HomeNavbar() {
  const name = localStorage.getItem("User");
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  if (localStorage.getItem("User")) {
    return (
      <div>
        <nav className="navbar navbar-expand-lg sticky-top">
          <Link className="navbar-brand" to={"/"}>
            <img
              src="../favicon.ico"
              style={{ width: "45px", height: "45px" }}
            />
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
              <li className="nav-item text-center">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faFilm} /> <br />
                  Phim <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item text-center">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faNewspaper} /> <br />
                  Tin Tức <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item text-center">
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faMobileButton} /> <br />
                  Ứng Dụng
                </a>
              </li>
            </ul>
            <div>
              <span style={{ color: "white", marginRight: "5px" }}>{name}</span>
              <button
                className="btn btn-danger"
                onClick={handleLogout}
                type="submit"
              >
                <FontAwesomeIcon icon={faRightFromBracket} size="xl" />
                &nbsp; Đăng Xuất
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <Link className="navbar-brand" to="/">
        <img src="../favicon.ico" style={{ width: "45px", height: "45px" }} />
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
          <li className="nav-item text-center">
            &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </li>
          <li className="nav-item text-center">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faFilm} /> <br />
              Phim <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item text-center">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faNewspaper} /> <br />
              Tin Tức <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item text-center">
            <a className="nav-link" href="#">
              <FontAwesomeIcon icon={faMobileButton} /> <br />
              Ứng Dụng
            </a>
          </li>
        </ul>
        <div>
          <Link className="nav-link login" to={"/login"}>
            {/* <img
              className="login_img"
              src="https://i.ibb.co/PCjW83Y/avt.png"
              alt="user"
            /> */}
            <FontAwesomeIcon icon={faUser} size="xl" />
            &nbsp; Đăng Nhập
          </Link>
        </div>
      </div>
    </nav>
  );
}
