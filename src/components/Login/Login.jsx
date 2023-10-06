import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const { handleGoogleSignIn, signIn } = useContext(AuthContext);

  const googleLogIn = () => {
    handleGoogleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then((result) => {
        alert("Logged in successfully");
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center my-4">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
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
                <button className="btn btn-primary">
                  Login
                </button>
              </div>
              <p>Dont have an acoount? <Link className=" text-orange-600" to="/register">Register</Link></p>
              <div className="my-4 text-center">
                <h3 className="mb-5">Continue with ...</h3>
                <button onClick={googleLogIn} className="btn btn-secondary">
                  Google Login
                </button>
              </div>
            </form>
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
