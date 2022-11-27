import { React, useEffect } from "react";
import "./style.css";
import "../Dashboard/Support";
import Support from "../Dashboard/Support";
import Footer from "../Dashboard/Footer";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { actFetchDetail } from "./modules/action";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgVideo from "lightgallery/plugins/video";

export const DetailMovie = () => {
  const movieId = useParams(); //trả về 1 object, không cần map
  //const movieId = localStorage.getItem("detail");
  //console.log(data);
  //console.log(movieId.id);
  const dispatch = useDispatch();
  useEffect(() => dispatch(actFetchDetail(movieId.id)), []);
  const data = useSelector((state) => state.movieReducer.data);
  console.log(data);
  return (
    <div>
      <div>
        <div className="pl-5 pt-5 bg-dark bg-gradient text-white">
          <div className="row container-fluid ">
            <div className="col-3">
              <LightGallery
                plugins={[lgVideo]}
              >
                <a
                  data-video={`{"source": [{"src":"../trailer/${data?.trailer}", "type":"video/mp4"}], "attributes": {"preload": false, "playsinline": true, "controls": true}}`}
                  className="container"
                >
                  <img
                    className="img-responsive"
                    src={`../images/movie/${data?.img}`}
                    alt={data?.name}
                  />
                </a>
              </LightGallery>
            </div>
            <div className="col-6 left">
              <div>
                <p className="h4">{data?.name}</p>
                {/* <p className="h6">Thời Lượng: {item.thoiLuong} Phút</p> */}
                {/* <button className="btn btn-primary btn-lg">Mua Vé</button> */}
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
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p>{data?.director}</p>
                <p>{data?.genres}</p>
              </div>
              <div className="col-md-6">
                <p>Nội Dung</p>
                <p className="justify">{data?.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Support />
      <Footer />
    </div>
  );
};
