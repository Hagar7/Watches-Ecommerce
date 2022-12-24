import React, { useEffect, useState } from "react";
import style from "./LoginForm.module.scss";
import { LoginUser } from "../../store/AuthSlice";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import { useDispatch, useSelector } from "react-redux";

export default function LoginForm() {
  let [errorMsg, setErrormsg] = useState("");

  const { user, error, token } = useSelector((state) => state.auth);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      const authObject = {
        user: user,
        error: null,
        token: token,
      };
      localStorage.setItem("auth", JSON.stringify(authObject));
      navigate("/");
    } else {
      setErrormsg(error?.message);
    }
  }, [error, navigate, user,token]);
  //joi validation
  let validationForm = () => {
    let schema = Joi.object({
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      password: Joi.string()
        .required()
        .pattern(
          new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/)
        ),
    });
    return schema.validate(formData, { abortEarly: false });
  };

  const submitHandeler = (e) => {
    e.preventDefault();
    let validateResponse = validationForm();
    if (validateResponse.error) {
      alert("failed");
    } else {
      dispatch(LoginUser(formData));
    }
  };

  const changeHandler = (e) => {
    let myForm = { ...formData };
    myForm[e.target.name] = e.target.value;
    setFormData(myForm);
  };

  return (
    <>
      <form onSubmit={submitHandeler}>
      {error?.message ? (
          <div className="alert alert-danger" role="alert">
            {errorMsg}
          </div>
        ) : (
          ""
        )}
        <div className={`${style.inputData} my-3`}>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="form-control "
            onChange={changeHandler}
          />
        </div>
        <div className={`${style.inputData} my-3`}>
          <input
            type="password"
            name="password"
            placeholder="Enter Your password"
            className="form-control "
            onChange={changeHandler}
          />
        </div>
        <button
          className={`${style.myBtn} myBtn btn btn-danger my-3 float-end`}
        >
          Submit
        </button>
        <div className="clear-fix"></div>
      </form>
    </>
  );
}
