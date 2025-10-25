import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, setUser, signInWithGoogle, updateUser } =
    use(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  // const location = useLocation();
  const handleRegister = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    // const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password should at least six characters long must have one uppercase & one lowercase letter"
      );
      return;
    } else {
      setPasswordError("");
    }
    createUser(email, password)
      .then((result) => {
        // console.log(result.user);
        // setUser(result.user);
        navigate("/");
        updateUser({ displayName: name, photoURL: photo, email: email })
          .then(() => {
            setUser({
              ...result.user,
              displayName: name,
              photoURL: photo,
              email: email,
            });
          })
          .catch((error) => {
            console.log(error);
            setUser(result.user);
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center py-8 bg-[#f4f4f4]">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
        <div className="card-body">
          <h1 className="text-2xl md:text-3xl font-bold text-center">
            Signup!
          </h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
              />
              {/* Photo URL */}
              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="photo URL"
              />
              {/* Email */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              {/* Password */}
              <label className="label">Password</label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                />
                <button
                  onClick={handleShowPassword}
                  className="btn btn-xs absolute top-2 right-6"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {passwordError && (
                <p className="text-xs text-error">{passwordError}</p>
              )}

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </fieldset>
            <div className="divider divider-success">OR</div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline w-full btn-secondary"
            >
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
