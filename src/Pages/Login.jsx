import React, { use, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signInUser, signInWithGoogle, forgetPassword } = use(AuthContext);
  const [error, setError] = useState("");
  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        // console.log(result.user);
        e.target.reset();
        navigate(`${location?.state ? location.state : "/"}`);
      })
      .catch((error) => {
        // console.log(error);
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result.user);
        navigate(`${location?.state ? location.state : "/"}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    forgetPassword(email)
      .then(() => {
        toast("Please Check Your Email");
      })
      .catch();
  };

  return (
    <div className="flex justify-center min-h-screen items-center bg-[#f4f4f4]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          <h1 className="text-2xl md:text-3xl font-bold text-center">Login!</h1>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                ref={emailRef}
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              <label className="label">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                  required
                />
                <button
                  onClick={handleShowPassword}
                  className="btn btn-xs absolute top-2 right-6"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <div onClick={handleForgetPassword}>
                <a className="link link-hover">Forgot password?</a>
              </div>
              {error && <p className="text-red-500 font-semibold">{error}</p>}
              <button
                type="submit"
                className="btn bg-green-600 text-white rounded-lg"
              >
                Login
              </button>
            </fieldset>
            <div className="divider divider-success">OR</div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline w-full rounded-lg"
            >
              <FcGoogle size={20}></FcGoogle> Log in With Google
            </button>
            <p className="font-bold mt-3">
              Don't Have An Account ?{" "}
              <Link className="text-purple-400" to="/auth/register">
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
