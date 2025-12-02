import React from "react";
import AllPlantsShowCard from "./AllPlantsShowCard";

const AllPlantCard = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 pb-8">
        {data.map((plant) => (
          <AllPlantsShowCard plant={plant}></AllPlantsShowCard>
        ))}
      </div>
    </div>
  );
};

export default AllPlantCard;
