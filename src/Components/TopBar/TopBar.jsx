import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import style from "./TopBar.module.scss";

export default function TopBar() {
  const { error } = useSelector((state) => state.products);
  return (
    <>
      <Fragment>
        {error ? (
          <div className="alert alert-danger mb-0" role="alert">
            {error}
          </div>
        ) : (
          <div className={`${style.topBar} `}>
            <div className="container">
              <div className={`${style.content} py-2`}>
                <div className={`${style.topLeft} my-1`}>
                  <h6>Free shipping for orders over $59 !</h6>
                </div>
                <div className={`${style.topRight} my-1`}>
                  <div className={`${style.icon}`}>
                    <i className="fa fa-map-marker-alt"></i>
                    <h6>Store Location</h6>
                  </div>
                  <div className={`${style.icon}`}>
                    <i className="fa fa-truck"></i>
                    <h6>Order Status</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Fragment>
    </>
  );
}
