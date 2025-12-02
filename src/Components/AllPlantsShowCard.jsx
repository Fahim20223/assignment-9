import React from "react";
import { Link } from "react-router";

const AllPlantsShowCard = ({ plant }) => {
  const { description, plantId, plantName, price, rating, image } = plant;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 rounded-2xl overflow-hidden">
      {/* Image */}
      <figure className="h-48 overflow-hidden">
        <img
          src={image}
          alt={plantName}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body">
        {/* Plant Name */}
        <h2 className="card-title text-lg font-semibold">{plantName}</h2>

        {/* description */}

        <p className="line-clamp-2">{description}</p>

        {/* Price & Rating */}
        <div className="flex justify-between items-center mt-2">
          <span className="badge badge-secondary badge-outline text-sm">
            💲{price}
          </span>
          <span className="badge badge-secondary badge-outline text-sm">
            ⭐ {rating}
          </span>
        </div>

        {/* Action Button */}
        <Link to={`/card-details/${plantId}`} className="mt-4">
          <button className="btn w-full py-2 text-white rounded-full bg-linear-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 transition-all duration-300">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AllPlantsShowCard;
