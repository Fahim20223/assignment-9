import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            Signup!
          </h1>
          <form>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input type="text" className="input" placeholder="Name" />
              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input type="text" className="input" placeholder="photo URL" />
              {/* Email */}
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              {/* Password */}
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            <div className="divider divider-success">OR</div>
            <button className="btn btn-outline w-full btn-secondary">
              <FcGoogle size={20}></FcGoogle> Signup With Google
            </button>
            <p className="font-bold mt-3">
              Already Have An Account ?{" "}
              <Link className="text-purple-400" to="/auth/login">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
