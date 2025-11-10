import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  const {  signInUser,signInWithGoogle } = use(AuthContext);
//   const emailRef =useRef();

  const location = useLocation();
  const navigate = useNavigate()

  const [error, setError] =useState('')
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        toast.success('Sign in successfully',result.user);
        navigate(`${location.state?location.state : '/'}`)
      })
      .catch((error) => {
        switch(error.code){
        case 'auth/user-not-found':
          setError("User not found. Please check your email.");
          break;
        case 'auth/wrong-password':
          setError("Incorrect password. Please try again.");
          break;
        case 'auth/invalid-email':
          setError("Invalid email address.");
          break;
        default:
          setError("Login failed. Please try again.");
      }
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("sign in with google", result.user);
        navigate(`${location.state?location.state : '/'}`);
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className=" font-bold text-2xl text-center pt-4">
          Login your Account
        </h2>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
           
            {/* email field */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
            //   ref={emailRef}
              required
            />
            {/* password field */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              required
            />
            {/* {passwordError && (
              <p className="text-red-500 text-xs">{passwordError}</p>
            )} */}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="btn btn-outline bg-linear-to-r from-[#28EBE8] to-[#468CE8]  mt-4"
            >
              Register
            </button>
            {/* Google */}
            <button
              onClick={handleGoogleSignIn}
              type="button"
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <p className=" font-semibold text-center py-4">
              Are you a new user?..
              <Link className=" text-secondary " to="/register">
              Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
