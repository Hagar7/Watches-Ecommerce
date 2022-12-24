import React from "react";
import { Link } from "react-router-dom";
import style from "./Gallery.module.scss";

export default function Gallery() {
  return (
    <>
      <div className={`${style.gallery} py-5`}>
        <div className="container">
          <div className={`${style.parent}`}>
            <div className={`${style.item}`}>
              <img src="images/gallery/1.jpg" alt="" />
            </div>
            <div className={`${style.item}`}>
              <img src="images/gallery/2.jpg" alt="" />
            </div>
            <div className={`${style.item}`}>
              <img src="images/gallery/3.jpg" alt="" />
            </div>
            <div className={`${style.item}`}>
              <img src="images/gallery/4.jpg" alt="" />
            </div>
            <div className={`${style.item}`}>
              <img src="images/gallery/5.jpg" alt="" />
            </div>
            <div className={`${style.item}`}>
              <img src="images/gallery/6.jpg" alt="" />
            </div>
            <div className={`${style.item}`}>
              <img src="images/gallery/10.jpg" alt="" />
            </div>
            <div className={`${style.item}`}>
              <img src="images/gallery/12.jpg" alt="" />
            </div>
            <div className={`${style.item}`}>
              <img src="images/gallery/7.jpg" alt="" />
            </div>
            <div className={`${style.item}`}>
              <img src="images/gallery/8.jpg" alt="" />
            </div>
            <div className={`${style.item}`}>
              <img src="images/gallery/11.jpg" alt="" />
            </div>
            <div className={`${style.item}`}>
              <img src="images/gallery/9.jpg" alt="" />
            </div>
            <div className={`${style.overlay}`}>
              <h2>Trendy Watches</h2>
              <div>
                <Link className={`${style.myBtn} btn btn-danger`} to="shop">
                  {" "}
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
