import React, { use, useState, useEffect } from "react";
import logoImg from "../assets/logo.png";
import "./styles.css";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import userImg from "../assets/user.png";

const Header = () => {
  const { user, signOutUser } = use(AuthContext);
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success("You Logged out successfully");
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  // Nav Links
  const links = (
    <>
      <li className="mr-2">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mr-2">
        <NavLink to="/plants">Plants</NavLink>
      </li>
      {user && (
        <li className="mr-2">
          <NavLink to="/profile">My Profile</NavLink>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-8 py-4">
        {/* LEFT (LOGO + MOBILE MENU) */}
        <div className="navbar-start">
          {/* Mobile menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          {/* LOGO */}
          <Link
            to={"/"}
            className="text-2xl font-bold text-green-600 flex items-center gap-2"
          >
            <img src={logoImg} alt="Logo" className="w-15 -" />
            <spn className="-ms-5">GreenNest</spn>
          </Link>
        </div>

        {/* CENTER (Desktop Links) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="navbar-end flex items-center gap-3">
          {/* If logged in → avatar dropdown */}
          {user ? (
            <div className="relative">
              <img
                src={user.photoURL || userImg}
                alt="User"
                className="w-12 h-12 rounded-full cursor-pointer object-cover border-green-500 border-4"
                onClick={() => setShowDropdown((prev) => !prev)}
              />

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-base-100 rounded-lg shadow-lg p-3 z-10">
                  <p className="text-sm font-semibold text-center mb-2">
                    {user.displayName || "User"}
                  </p>

                  <button
                    onClick={handleSignOut}
                    className="btn hover:bg-yellow-500 btn-sm w-full text-black font-bold"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link className="btn btn-outline btn-sm mr-2" to="/auth/login">
                Login
              </Link>
              <Link className="btn bg-green-500 btn-sm" to="/auth/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
