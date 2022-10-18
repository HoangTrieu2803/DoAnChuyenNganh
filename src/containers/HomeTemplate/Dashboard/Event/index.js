import React from "react";
import "./index.css";

export default function Event() {
  return (
    <div className="container col-md-8 text-white">
      <h2 className="text-center">Khuyến Mãi</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col mb-3">
          <a href="#" className="text-decoration-none text-body">
            <div className="box card border-light">
              <img
                src="../images/promotion/promotion1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  CGV & BHD Star – Mua 2 vé tính tiền 1 khi thanh toán qua
                  ZaloPay
                </h5>
                <p className="card-text">
                  Áp dụng cho khách hàng mới của ZaloPay khi mua tại CGV HOẶC
                  BHD Star các suất chiếu Thứ 6, Thứ 7, Chủ Nhật.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="#" className="text-decoration-none text-body">
            <div className="box card border-light">
              <img
                src="../images/promotion/promotion2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Mua vé phim BHD Star - Nhận ngay Hoàn Tiền 20%
                </h5>
                <p className="card-text">
                  Mua vé BHD Star thả ga, nhận ngay hoàn tiền xả láng 20% khi
                  thanh toán qua ZaloPay.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3">
        <div className="col">
          <a href="#" className="text-decoration-none text-body">
            <div className="box card h-80 border-light">
              <img
                src="../images/promotion/promotion_s1.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Đãi Hấp Dẫn Tại CGV Cinemas Việt Nam - CGV Culture Day
                </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="#" className="text-decoration-none text-body">
            <div className="box card h-80 border-light">
              <img
                src="../images/promotion/promotion_s2.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  CGV Chào hè - Ưu đãi 50K Khi đặt vé Online
                </h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col">
          <a href="#" className="text-decoration-none text-body">
            <div className="box card h-80 border-light">
              <img
                src="../images/promotion/promotion_s3.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">THỨ TƯ VUI VẺ - VÉ PHIM ƯU ĐÃI</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <hr className="container gach" />
    </div>
  );
}
