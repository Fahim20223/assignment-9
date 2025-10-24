import React from "react";
import errorImg from "../assets/error.png";

const Error = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <div className="flex items-center justify-center">
          <h2 className="text-2xl font-bold text-center mb-3">Error </h2>
          <img className="ml-2 w-10" src={errorImg} alt="" />
        </div>
        <h3 className="text-2xl mt-2 font-bold ">404 NOT FOUND</h3>
      </div>
    </div>
  );
};

export default Error;
