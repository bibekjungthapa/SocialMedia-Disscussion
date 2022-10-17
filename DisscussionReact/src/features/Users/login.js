import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { Formik, Form, Field } from "formik";
import React from "react";
function Login() {
  const finalFunc = (values) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: values.username,
        email: values.email,
      }),
    };
    fetch("http://localhost:8080/login", requestOptions);
  };
 
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  function validateUsername(value) {
    let error;
    if (value === "admin") {
      error = "Nice try!";
    }
    return error;
  }

  return (
    <div className="App-Login">
      <h1>Signup</h1>
      <Formik
        initialValues={{
          username: "",
          email: "",
        }}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
          finalFunc(values);
        }}
      >
        {({ errors, touched, isValidating }) => (
          <Form>
            <label>Email: </label>
            <Field
              name="email"
              validate={validateEmail}
              placeholder="Enter Your Email"
            />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <br></br>
            <label>Username:</label>
            <Field
              name="username"
              validate={validateUsername}
              placeholder="Enter Your UserName"
            />
            {errors.username && touched.username && (
              <div>{errors.username}</div>
            )}

            <br></br>
            <button
              type="submit"
              onSubmit={() => {
                <Link to="/home"></Link>
              }}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <p>New here?</p>
      <Link to="/register">Register</Link>
      <br />
      <Link to="/sidebar">SideBar</Link>
    </div>
  );
}

export default Login;
