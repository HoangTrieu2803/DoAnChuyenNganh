import React from "react";
import movie from "../Dashboard/Movie/movie.json";
import "./style.css";
import "../Dashboard/Support";
import Support from "../Dashboard/Support";

export const DetailMovie = () => {
  const movieId = localStorage.getItem("detail");
  const render = () => {
    return movie.map((item) => {
      if (item.id == movieId) {
        return (
          <div>
            <div className="pl-5 pt-5 bg-dark bg-gradient text-white">
              <div className="row container-fluid ">
                <div className="col-3">
                  <img src={item.hinhAnh} />
                </div>
                <div className="col-6 left">
                  <div>
                    <p className="h4">{item.tenPhim}</p>
                    <p className="h6">Thời Lượng: {item.thoiLuong} Phút</p>
                    <button className="btn btn-primary btn-lg">Mua Vé</button>
                  </div>
                </div>
                <div className="col-3 center ">Đánh Giá</div>
              </div>
              <div className="container py-3">
                <p className="h4 text-center py-5">Thông Tin</p>
                <div className="row">
                  <div className="col-md-2">
                    <p>Ngày Công Chiếu</p>
                    <p>Ngày Kết Thúc</p>
                    <p>Đạo Diễn</p>
                    <p>Thể Loại</p>
                  </div>
                  <div className="col-md-4">
                    <p>{item.ngayCongChieu}</p>
                    <p>{item.ngayKetThuc}</p>
                    <p>{item.daoDien}</p>
                    <p>{item.theLoai}</p>
                  </div>
                  <div className="col-md-6">
                    <p>Nội Dung</p>
                    <p className="justify">{item.noiDung}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    });
  };

  return (
    <div>
      {render()}
      <Support />
    </div>
  );
};
