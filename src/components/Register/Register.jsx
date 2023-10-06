import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { signUp } = useContext(AuthContext); 
  // const [error, setError] = useState(""); 

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signUp(email, password)
    .then(result => {
      console.log(result.user);
      alert("User created successfully.");
    })
  };
  
  

  
  

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center my-4">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Register</button> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
