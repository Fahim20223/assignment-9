import React from "react";
import PlantsCard from "./PlantsCard";

const PlantsCategory = ({ data }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center p-7">
        Top Rated Indoor Plants
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {data.map((plant) => (
          <PlantsCard plant={plant}></PlantsCard>
        ))}
      </div>
    </div>
  );
};

export default PlantsCategory;
