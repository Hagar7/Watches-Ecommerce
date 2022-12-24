import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logOut } from "../../store/AuthSlice";

import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from "../../store/CartSlice";
import { getCategories } from "../../store/CategorySlice";
import style from "./Navbar.module.scss";

export default function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const { category } = useSelector((state)=>state.category)
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch,category]);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const close = () => {
    setIsOpen(false);
  };
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  

  return (
    <>
      <nav className={`${style.nav} `}>
        <div className="container">
          <div className={`${style.navContent} py-2 `}>
            <div className={`${style.logo} `}>
              <img src="./images/bk.png" alt="logo" />
            </div>
            <form className={`${style.myForm} d-flex `} role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <div className={`${style.icons}`}>
              <i className="fa-solid fa-cart-shopping" onClick={toggle}>
                <span>{getTotalQuantity() || 0}</span>
              </i>
              <i className="fa-solid fa-heart">
                <span>0</span>
              </i>

              <div className="dropdown">
                <Link
                  className={`${style.myBtn} btn btn-secondary dropdown-toggle`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-user"></i>
                </Link>
                <ul className="dropdown-menu">
                  {user ? (
                  
                      <>
                      <li>
                        <Link className="dropdown-item" to="/profile">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          onClick={()=>dispatch(logOut())}
                          className="dropdown-item"
                        >
                          LogOut
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link className="dropdown-item" to="/login">
                          LogIn
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/register">
                          Register
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className={`${style.mainNav} `}>
        <div className="container">
          <div className={`${style.navy} `}>
            <div className={`${style.left} `}>
              <div className={`${style.leftHead} `}>
                <i className="fa-solid fa-list"></i>
                <h6>All Categories</h6>
              </div>
              <ul className={`${style.leftLinks} `}>
                {category.map((item)=>
                <li className={`${style.item} `} key={item.id}>{item.name}</li>
                )}
              </ul>
            </div>
            <div className={`${style.center} `}>
              <ul className={`${style.items}  `}>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? " nav-link mainBG" : "nav-link"
                    }
                    to=""
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                </li>
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? " nav-link mainBG" : "nav-link"
                    }
                    to="shop"
                  >
                    Shop
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={`${style.right} `}>
              {/* <p>Free Shipping </p> */}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${style.cartSide}`}
        style={{ width: isOpen ? "20%" : "0px", transition: "all 0.5s ease" }}
      >
        <div className={`${style.header}`}>
          <h6>Shopping Cart ({getTotalQuantity() || 0}) </h6>
          <i className="fa-solid fa-xmark" onClick={close}></i>
        </div>

        {cart.map((item) => (
          <>
            <div className={`${style.body} p-3`} key={item.id}>
              <div>
                <img
                  src={`images/${
                    item.image.split("\\")[item.image.split("\\").length - 1]
                  }`}
                  alt=""
                />
              </div>
              <div className={`${style.center}`}>
                <h6>{item.name}</h6>
                <div className={`${style.amount}`}>
                  <span onClick={() => dispatch(decrementQuantity(item.id))}>
                    -
                  </span>
                  <span>{item.quantity}</span>
                  <span onClick={() => dispatch(incrementQuantity(item.id))}>
                    +
                  </span>
                </div>
              </div>
              <div className={`${style.price}`}>
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => dispatch(removeItem(item.id))}
                ></i>
                <span>{item.price} $</span>
              </div>
            </div>
            <div className={`${style.brdr}`}></div>
          </>
        ))}

        <div className={`${style.btns}`}>
          <Link className={`${style.myBtn} btn btn-danger`} to="cart">
            View Cart
          </Link>
        </div>
        <div className={`${style.btns}`}>
          <button className={`${style.myBtn} btn btn-danger`}>
            View Checkout
          </button>
        </div>
      </div>
    </>
  );
}
