import React from "react";

const AllPlantsShowCard = ({ plant }) => {
  const { plantName, price, rating, image } = plant;
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 p-5 transition-transform duration-200 ease-out hover:-translate-y-2">
      <img
        src={image}
        alt={plantName}
        className="w-full h-68 object-contain mb-4"
      />
      <h2 className="text-xl font-semibold text-green-800">{plantName}</h2>
      <div className="flex justify-between">
        <p className="text-gray-600">💲{price}</p>
        <p className="text-yellow-500">⭐ {rating}</p>
      </div>
      <button className="mt-3 w-full py-2 bg-linear-to-r from-green-500 to-green-700 text-white rounded-lg">
        View Details
      </button>
    </div>
  );
};

export default AllPlantsShowCard;
