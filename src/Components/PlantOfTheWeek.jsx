import React from "react";

const PlantOfTheWeek = ({ data }) => {
  const plantOfWeek = data.find((p) => p.plantName === "Monstera Deliciosa");

  if (!plantOfWeek) return null;

  return (
    <div className="flex flex-col items-center py-20 bg-lime-50">
      <h2 className="text-4xl font-extrabold text-green-700 mb-12 relative after:content-[''] after:block after:w-24 after:h-1 after:bg-green-600 after:rounded-full after:mt-2">
        Plant Of The Week
      </h2>

      <div className="card w-80 md:w-96 bg-white shadow-2xl rounded-3xl border border-green-100 overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-3xl">
        <figure className="overflow-hidden">
          <img
            src={plantOfWeek.image}
            alt={plantOfWeek.plantName}
            className="w-full h-64 object-cover rounded-t-3xl transition-transform duration-700 hover:scale-110"
          />
        </figure>
        <div className="card-body text-center px-6 py-4">
          <h3 className="card-title text-2xl md:text-3xl text-green-700 font-bold mb-2">
            🌿 {plantOfWeek.plantName}
          </h3>
          <p className="text-gray-700 text-sm md:text-base mb-3">
            {plantOfWeek.description}
          </p>
          <p className="text-green-600 text-sm italic">
            {plantOfWeek.careTips}
          </p>
          <button className="mt-6 px-6 py-2 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantOfTheWeek;
