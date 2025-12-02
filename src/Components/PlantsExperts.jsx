import React, { use } from "react";
const expertsPromise = fetch("/experts.json").then((res) => res.json());

const PlantsExperts = () => {
  const experts = use(expertsPromise);
  return (
    <div className="py-10 bg-linear-to-r from-green-100 to-green-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
          👩‍🌾 Meet Our Green Experts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {experts.map((expert) => (
            <div
              key={expert.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-5 text-center"
            >
              <img
                src={expert.image}
                alt={expert.name}
                className="w-40 h-40 object-cover rounded-full mx-auto mb-8"
              />
              <h3 className="text-lg font-semibold text-green-800">
                {expert.name}
              </h3>
              <p className="text-gray-600">{expert.specialization}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantsExperts;
