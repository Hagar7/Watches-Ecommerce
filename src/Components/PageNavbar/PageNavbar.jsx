import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./PagaeNavbar.module.scss";
import { logOut } from "../../store/AuthSlice";
export default function PageNavbar() {

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  return (
    <>
      <nav className={`${style.pageNav} navbar navbar-expand-lg bg-light`}>
        <div className="container">
          <Link className={`${style.logo} navbar-brand`}>
            <img src="images/bk.png" alt="logo" />{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
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
                  {!user?
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
                  </>:
                  <>
                   <li>
                    <Link className="dropdown-item" to="/" onClick={()=>dispatch(logOut ())}>
                      LogOut
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      Profile
                    </Link>
                  </li>
                  </>
                  }
                
                 
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
