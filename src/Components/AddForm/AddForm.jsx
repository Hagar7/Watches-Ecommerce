import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./AddForm.module.scss";
import { insertUserData, removeErorr } from "../../store/AuthSlice";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

export default function AddForm() {
  let navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);
  let dispatch = useDispatch();

  useEffect(() => {
    if (error?.message === "success") {
      dispatch(removeErorr());
      navigate("/login");
      console.log("hello");
    } else {
      setErrormsg(error?.message);
    }
  }, [error, navigate, dispatch]);

  let [errorMsg, setErrormsg] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    age: "",
  });

  // joi validation
  let validationForm = () => {
    let schema = Joi.object({
      first_name: Joi.string().required().alphanum().min(4).max(10),
      last_name: Joi.string().required().alphanum().min(4).max(10),
      email: Joi.string()
        .required()
        .email({ tlds: { allow: ["com", "net"] } }),
      age: Joi.number().required().min(20).max(70),
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
      dispatch(insertUserData(formData));
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
            type="text"
            name="first_name"
            placeholder="Enter Your first_name"
            className="form-control "
            onChange={changeHandler}
          />
        </div>

        <div className={`${style.inputData} my-3`}>
          <input
            type="text"
            name="last_name"
            placeholder="Enter Your last_name"
            className="form-control "
            onChange={changeHandler}
          />
        </div>
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

        <div className={`${style.inputData} my-3`}>
          <input
            type="number"
            name="age"
            placeholder="Enter Your age"
            className="form-control "
            onChange={changeHandler}
          />
        </div>
        <button
          type="reset"
          className={`${style.myBtn} myBtn btn btn-primary my-3 float-start`}
        >
          Reset
        </button>
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
