import React from "react";
import "./index.css";

export default function Support() {
  return (
    <div className="container-fluid pt-1" style={{backgroundColor: '#212121'}}>
      <section class="">
        <div class="container text-center text-md-start mt-5 text-white">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-2">
                <i class="fas fa-gem me-3 text-secondary"></i>Company name
              </h6>
              <p>
                <a href="#" className="text-decoration-none text brighter">
                  FAQ
                </a>
                <br />
                <a href="#" className="text-decoration-none text brighter">
                  Thỏa thuận sử dụng
                </a>
                <br />
                <a href="#" className="text-decoration-none text brighter">
                  Chính sách bảo mật
                </a>
              </p>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-2">Đối Tác</h6>
              <div className="mx-4">
                <a href="#" class="text-reset">
                  <img
                    src="../images/companion/bhd.png"
                    className="box2"
                    alt="BHD"
                  />
                </a>
                <a href="#" class="text-reset">
                  <img
                    src="../images/companion/cgv.png"
                    className="box2"
                    alt="CGV"
                  />
                </a>
                <a href="#" class="text-reset">
                  <img
                    src="../images/companion/dongdacinema.png"
                    className="box2"
                    alt="DD"
                  />
                </a>
                <a href="#" class="text-reset">
                  <img
                    src="../images/companion/galaxy.png"
                    className="box2"
                    alt="GLX"
                  />
                </a>
                <br />
                <a href="#" class="text-reset">
                  <img
                    src="../images/companion/lotte.png"
                    className="box2"
                    alt="LTE"
                  />
                </a>
                <a href="#" class="text-reset">
                  <img
                    src="../images/companion/VCB.png"
                    className="box2"
                    alt="VCB"
                  />
                </a>
                <a href="#" class="text-reset">
                  <img
                    src="../images/companion/viettin.png"
                    className="box2"
                    alt="VTI"
                  />
                </a>
                <a href="#" class="text-reset">
                  <img
                    src="../images/companion/zalopay-icon.png"
                    className="box2"
                    alt="ZLP"
                  />
                </a>
              </div>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">Social Media</h6>
              <a href="#!" class="text-reset">
                <img src="../images/facebook.png" alt="FB" className="box2" />
              </a>
              <a href="#!" class="text-reset">
                <img src="../images/discord.png" alt="DC" className="box2" />
              </a>
              <a href="#!" class="text-reset">
                <img src="../images/zalo.png" alt="ZL" className="box2" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <hr style={{backgroundColor: '#949491'}}/>
    </div>
  );
}
