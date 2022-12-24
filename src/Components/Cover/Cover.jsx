import React from "react";
import { useLocation } from "react-router-dom";
import style from "./Cover.module.scss";

export default function Cover() {
  const location = useLocation();
  return (
    <div className={`${style.cover}`}>
      <h3>{location.pathname.split("/")}</h3>
      <img src="images/gallery/wahymya.png" alt="" className="w-25" />
    </div>
  );
}
