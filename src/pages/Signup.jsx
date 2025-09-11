import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//form handling


const SignUp = () => {

  //state define

  const[data,setdata]=useState({username:"" ,userEmail:"" ,userpass:"", conformpass:""})
  const datahandler=(e)=>{
    console.log(e.target.value)

    setdata({...data,[e.target.name]:e.target.value})
  }

  const saveForm=(e)=>{

    //used to prevent by default behaviour of our browser/ avoid reloading

    e.preventDefault()
    alert('sign up sucessfully')
    console.log(data)

    setdata({username:"" ,userEmail:"" ,userpass:"", conformpass:""})
  }

  //id or name same hona chahiye insight input tag
  
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg p-4"
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <h2 className="text-center mb-4">Sign Up</h2>

        <form onSubmit={(e)=>saveForm(e)}>
          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e)=>datahandler(e)}
              id="usename"
              name="username"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              onChange={(e)=>datahandler(e)}
              id="userEmail"
              name="userEmail"
              placeholder="Enter email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e)=>datahandler(e)}
              id="userpass"
              name="userpass"
              placeholder="Enter password"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e)=>datahandler(e)}
              id="conformpass"
              name="conformpass"
              placeholder="Re-enter password"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center mt-3">
            Already have an account? <NavLink to="/Login">Login</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp
