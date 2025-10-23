import React from "react";
import { Link } from "react-router";

const PlantsCard = ({ plant }) => {
  const { plantId, plantName, price, rating, image } = plant;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-200 ease-out p-5 hover:-translate-y-2">
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
      <Link to={`/card-details/${plantId}`}>
        <button className="mt-3 w-full py-2 bg-linear-to-r from-green-500 to-green-700 text-white rounded-lg btn">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default PlantsCard;
