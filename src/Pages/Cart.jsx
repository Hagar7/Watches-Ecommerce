import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cover from "../Components/Cover/Cover";
import PageNavbar from "../Components/PageNavbar/PageNavbar";
import {
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from "../store/CartSlice";
import style from "../Styles/Cart.module.scss";

export default function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  return (
    <>
      <PageNavbar />
      <Cover />
      {cart.length === 0 ? (
        <div className="container py-5">
          {" "}
          <div className="alert alert-secondary" role="alert">
            Your Cart is Empty!
          </div>{" "}
        </div>
      ) : (
        <div className={`${style.cart} py-5`}>
          <div className="container">
            <h3>Shopping Cart</h3>

            <table className="table caption-top">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <>
                    <tr key={item.id}>
                      <th scope="row">#1</th>
                      <td>
                        <div className={`${style.tableContent}`}>
                          <img
                            src={`images/${
                              item.image.split("\\")[
                                item.image.split("\\").length - 1
                              ]
                            }`}
                            alt=""
                          />
                          <h6>{item.name}</h6>
                        </div>
                      </td>
                      <td>
                        <h5>{item.price}$</h5>
                      </td>
                      <td>
                        {" "}
                        <div className={`${style.price}`}>
                          <span
                            onClick={() => dispatch(decrementQuantity(item.id))}
                          >
                            -
                          </span>
                          <span>{item.quantity}</span>
                          <span
                            onClick={() => dispatch(incrementQuantity(item.id))}
                          >
                            +
                          </span>
                        </div>
                      </td>
                      <td>
                        <i
                          className="fa-solid fa-xmark"
                          onClick={() => dispatch(removeItem(item.id))}
                        ></i>
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
            <div className="float-end">
              <button className="btn btn-danger m-2">
                {getTotal().totalQuantity} items{" "}
              </button>
              <button className="btn btn-danger">
                {getTotal().totalPrice}$
              </button>
            </div>
            <div className="clearfix"></div>
            <button className="btn btn-dark my-3 float-end">
              Go To CheckOut
            </button>
            <div className="clearfix"></div>
          </div>
        </div>
      )}
    </>
  );
}
