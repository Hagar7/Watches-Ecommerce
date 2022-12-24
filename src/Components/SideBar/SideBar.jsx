import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./SideBar.module.scss";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <i className="fa-solid fa-house"></i>,
    },
    {
      path: "about",
      name: "About",
      icon: <i className="fa-solid fa-address-card"></i>,
    },
    {
      path: "shop",
      name: "Shop",
      icon: <i className="fa-solid fa-shop"></i>,
    },
    {
      path: "blog",
      name: "Blog",
      icon: <i className="fa-solid fa-blog"></i>,
    },
    {
      path: "contact",
      name: "Contact",
      icon: <i className="fa-solid fa-address-book"></i>,
    },
  ];
  return (
    <>
      <div className={`${style.sideBar} py-1`}>
        <div className="container">
          <div className={`${style.mainSideBar}`}>
            <div className={`${style.logo}`}>
              <img src="images/bk.png" alt="" />
            </div>
            <div className={`${style.icons}`}>
              <i className="fa-solid fa-cart-shopping">
                <span>0</span>
              </i>
              <i className="fa-solid fa-bars" onClick={toggle}></i>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${style.side}`}
        style={{
          width: isOpen ? "120px" : "40px",
          transition: "all 0.5s ease",
        }}
      >
        <div className={`${style.list} py-3`}>
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? " nav-link mylinks activelinks" : "nav-link mylinks"
              }
              key={index}
            >
              <div className={`${style.icon}`}>{item.icon}</div>
              <div
                className={`${style.linkText}`}
                style={{
                  display: isOpen ? "block" : "none",
                  transition: "all 2s ease-in-out",
                }}
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
