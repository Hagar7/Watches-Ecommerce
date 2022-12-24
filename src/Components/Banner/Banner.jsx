import React from "react";
import { Link } from "react-router-dom";
import style from "./Banner.module.scss";

export default function Banner() {
  return (
    <div className={`${style.banner}`}>
      <div className="container">
        <div className="row">
          <div className=" col-lg-9">
            <div className={`${style.bannerLeft}`}>
              <h2>All Products Addition</h2>
              <h4 className="text-muted">for cool people</h4>
              <div>
                <Link className={`${style.mtBtn} btn btn-danger`} to="shop">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={`${style.bannerRight}`}>
              <h5>NOW'S YOUR CHANCE</h5>
              <div className={`${style.bannerOffer}`}>
                <h2>15</h2>
                <h3>%</h3>
              </div>
              <div className="text-center">
                <Link className={`${style.mtBtn} btn btn-danger`} to="shop">
                  Shop Now
                </Link>
              </div>
              <div className={`${style.footer} py-5`}>
                <p className="text-muted">
                  Don’t Miss Out: Coupon Expires Soon. Use It ASAP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
