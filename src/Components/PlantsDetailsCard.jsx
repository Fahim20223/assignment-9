import React from "react";
import { toast, ToastContainer } from "react-toastify";

const PlantsDetailsCard = ({ plants }) => {
  const handleForm = (e) => {
    e.preventDefault();
    toast.success("Successfully Booked");
    e.target.reset();
  };
  console.log(plants);
  return (
    <div className="pb-13">
      <div className="flex flex-col md:flex-row gap-6 py-16 px-7">
        <img src={plants.image} alt="" />
        <div>
          <h2 className="font-bold text-green-500 text-2xl mb-6">
            {plants.plantName}
          </h2>
          <p className="text-gray-500 font-semibold mb-3 lg:w-[50%]">
            {plants.description}
          </p>
          <p className="font-semibold text-xl ">💲{plants.price}</p>
          <h3 className="text-xl font-semibold">⭐{plants.rating}</h3>
        </div>
      </div>
      <div className="p-7 bg-green-600 items-center w-96 h-70 mx-auto rounded-xl ">
        <h2 className="text-white font-bold text-2xl text-center">
          Book Consultation !
        </h2>
        <form onSubmit={handleForm}>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="text-white">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Name"
            />

            {/* Email */}
            <label className="text-white">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />

            <button type="submit" className="btn btn-neutral mt-4">
              Book Now
            </button>
          </fieldset>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PlantsDetailsCard;
