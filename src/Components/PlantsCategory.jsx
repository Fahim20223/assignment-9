import React from "react";
import PlantsCard from "./PlantsCard";
import Plants from "./Plants";

const PlantsCategory = ({ data }) => {
  const rating = data.filter((plant) => plant.rating > 4.7);
  return (
    <div>
      <h2 className="text-2xl md:text-4xl mb-10 font-bold text-center p-7">
        Top Rated Indoor Plants
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 ">
        {rating.map((plant) => (
          <PlantsCard key={plant.plantId} plant={plant}></PlantsCard>
        ))}
        {/* {data.map((plant) => (
          <Plants plant={plant}></Plants>
        ))} */}
      </div>
    </div>
  );
};

export default PlantsCategory;
