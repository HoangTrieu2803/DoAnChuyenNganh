import React from "react";
import './index.css';

export default function Footer() {
  return (
    <footer className="container-fluid pt-1" style={{backgroundColor: '#212121'}}>
      <div className="container-fluid text-center justify-content-center align-items-center row">
        <div className="col-3">
          <img src="../favicon.ico" />
        </div>
        <div className="col-7">
          <h5 className="text">Hệ Thống Bán Vé Xem Phim</h5>
          <h6 className="text">Số Điện Thoại: 1234567890</h6>
          <h6 className="text">Email: example@email.com</h6>
        </div>
        <div className="col-2">
          <img src="../images/bo-cong-thuong.png" className="image"/>
        </div>
      </div>
    </footer>
  );
}
