import React from "react";
import HeroSection from "./HeroSection";
import PlantsCategory from "./PlantsCategory";
import { useLoaderData } from "react-router";
// import RightAside from "./RightAside";
import PlantsCareTips from "./PlantsCareTips";
import PlantsExperts from "./PlantsExperts";
import CustomerReview from "./CustomerReview";
// import Plants from "./Plants";
// import PlantOfTheWeek from "./PlantOfTheWeek";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  return (
    <div>
      <HeroSection></HeroSection>

      <section className="bg-[#f6f6f6] pb-10">
        <section className="w-11/12 mx-auto ">
          <PlantsCategory data={data}></PlantsCategory>
        </section>
      </section>
      <CustomerReview></CustomerReview>
      <PlantsCareTips></PlantsCareTips>
      <PlantsExperts></PlantsExperts>
    </div>
  );
};

export default Home;
