import React from "react";

import AllPlantCard from "./AllPlantCard";
import { useLoaderData } from "react-router";

const Plants = () => {
  const data = useLoaderData();
  return (
    <div className="bg-[#f6f6f6]">
      <div className="w-11/12 mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold py-8">
          ALL Plants ({data.length})
        </h2>

        <AllPlantCard data={data}></AllPlantCard>
      </div>
    </div>
  );
};

export default Plants;
