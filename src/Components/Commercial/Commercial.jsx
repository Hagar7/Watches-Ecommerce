import React from "react";
import { Link } from "react-router-dom";
import style from "./Commercial.module.scss";

export default function Commercial() {
  return (
    <div className={`${style.commercial}`}>
      <div className="row">
        <div className="col-md-12">
          <div className={`${style.item}`}>
            <h3>Black Friday</h3>
            <h6>SALE UP TO 50% OFF</h6>
            <Link className={`${style.myBtn} btn btn-danger`} to="shop">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
