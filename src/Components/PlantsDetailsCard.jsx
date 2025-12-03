import React from "react";
import { useNavigate } from "react-router";

const PlantsDetailsCard = ({ plants }) => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[63vh] bg-[#f6f6f6] py-12">
      <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
          <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
            {/* Image Section */}
            <div className="shrink-0 w-full md:w-1/2">
              <img
                src={plants.image}
                alt={plants.plantName}
                className="w-full h-full object-cover rounded-xl shadow-md"
              />
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
              <h1 className="text-3xl md:text-4xl font-bold text-green-600">
                {plants.plantName}
              </h1>
              <div className="flex gap-3 flex-wrap">
                <div className="badge badge-lg badge-outline text-green-600 border-green-600 font-medium">
                  Category: {plants.category}
                </div>
                <div className="badge badge-lg badge-outline text-yellow-500 border-yellow-500 font-medium">
                  ⭐ {plants.rating}
                </div>
                <div className="badge badge-lg badge-outline text-gray-700 border-gray-700 font-medium">
                  Stock: {plants.availableStock}
                </div>
              </div>
              <p className="text-gray-700 font-medium text-lg mt-4">
                {plants.description}
              </p>
              <p className="text-xl font-semibold text-green-600">
                Price: 💲{plants.price}
              </p>
              <div className="flex gap-2 flex-wrap mt-2">
                <div className="badge badge-outline text-blue-600 border-blue-600">
                  Care Level: {plants.careLevel}
                </div>
                <div className="badge badge-outline text-purple-600 border-purple-600">
                  Provider: {plants.providerName}
                </div>
              </div>
              <button
                onClick={() => navigate(-1)}
                className="btn bg-green-600 text-white w-1/2 rounded-lg"
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantsDetailsCard;
