import React from "react";
import AllPlantsShowCard from "./AllPlantsShowCard";

const AllPlantCard = ({ data }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-8">
        {data.map((plant) => (
          <AllPlantsShowCard plant={plant}></AllPlantsShowCard>
        ))}
      </div>
    </div>
  );
};

export default AllPlantCard;
