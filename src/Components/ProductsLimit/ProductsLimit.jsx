import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/CartSlice";
import { getProductsData } from "../../store/ProductSlice";
import style from './ProductsLimit.module.scss';
export default function ProductsLimit() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  let [modalData, setModalData] = useState("");
  useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);

  let getData = (state) => {
    setModalData(state);
  };
  return (
    <>
    <div className={`${style.products}`}>
      <div className="container">
        <div className="row">
          {products.slice(0,8).map((product) => (
            <div className="col-lg-3 col-md-6" key={product.id}>
              <div className={`${style.item}`}>
                <div className={`${style.img}`}>
                  <img
                    src={`images/${
                      product.image.split("\\")[
                        product.image.split("\\").length - 1
                      ]
                    }`}
                    className="d-block w-100"
                    alt="product"
                  />
                  <div className={`${style.overlay}`}>
                    <div className={`${style.icons}`}>
                      <div className={`${style.icon}`}>
                        <i
                          className="fa-solid fa-cart-shopping"
                          onClick={() => dispatch(addToCart(product))}
                        ></i>
                        <span className={`${style.msg}`}>Add To Cart</span>
                      </div>
                      <div className={`${style.icon}`}>
                        <i className="fa-solid fa-heart"></i>
                        <span className={`${style.msg}`}>
                          Add To WhishList
                        </span>
                      </div>
                      <div className={`${style.icon}`}>
                        <i
                          className="fa-solid fa-magnifying-glass-plus"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                          onClick={() => getData(product)}
                        ></i>
                        <span className={`${style.msg}`}>Quick View</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 className="text-muted text-center">{product.name}</h6>
                <h6 className={`${style.priceTitle} fw-bold text-center`}>
                  {product.price}$
                </h6>
              </div>
              <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1
                        className={`${style.modalTitle} modal-title`}
                        id="staticBackdropLabel"
                      >
                        {modalData.name}
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="row">
                        <div className="col-md-6">
                          <img
                            src={`images/${
                              modalData?.image?.split("\\")[
                                modalData?.image?.split("\\").length - 1
                              ]
                            }`}
                            className="d-block w-100"
                            alt="product"
                          />
                        </div>
                        <div className="col-md">
                          <div className="py-5">
                            <h3 className={`${style.modalTitle}`}>
                              {modalData.name}
                            </h3>
                            <h5
                              className={`${style.modalCat} text-center text-muted`}
                            >
                              {modalData.category}
                            </h5>
                            <div className="text-center">
                              <button
                                className={`${style.modalBtn} btn btn-danger `}
                              >
                                {modalData.price} $
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className={`${style.modalBtn} btn btn-danger `}
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  )
}
