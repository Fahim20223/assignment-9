import React, { use } from "react";
import logoImg from "../assets/logo.png";
import "./styles.css";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import userImg from "../assets/user.png";

const Header = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("You Logged out successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li className=" mr-3">
        <NavLink to="/">Home</NavLink>
      </li>

      <li className="mr-2">
        <NavLink to="/plants">Plants</NavLink>
      </li>

      {user && (
        <li>
          <NavLink to="/profile">MY Profile</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm p-7 flex flex-col-reverse md:flex-row">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          {" "}
          <img className="w-19 -mr-6" src={logoImg} alt="" />
          GreenNest
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end btn-success flex items-center ">
        <h2 className="mr-2 font-bold text-secondary">
          {user ? user?.displayName : ""}
        </h2>
        <img
          className="mr-2 h-13 object-cover w-13 rounded-full "
          src={user ? user.photoURL : userImg}
          alt="user image"
        />
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn bg-linear-to-r from-green-500 to-green-700 text-white "
          >
            Log Out
          </button>
        ) : (
          <Link
            className="btn bg-linear-to-r from-green-500 to-green-700 text-white "
            to="/auth/login"
          >
            Login
          </Link>
        )}
        {user ? (
          ""
        ) : (
          <Link
            to="/auth/register"
            className="btn bg-linear-to-r from-green-500 to-green-700 text-white  ml-2"
          >
            Register
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
