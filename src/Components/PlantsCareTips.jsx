import React, { use } from "react";
const tipsPromise = fetch("/tips.json").then((res) => res.json());
const PlantsCareTips = () => {
  const tips = use(tipsPromise);
  return (
    <div className="py-10 bg-linear-to-r from-green-50 to green-100">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
        🌼 Plant Care Tips
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 text-center"
          >
            <div className="text-5xl mb-4">{tip.icon}</div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              {tip.title}
            </h3>
            <p className="text-gray-600">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantsCareTips;
