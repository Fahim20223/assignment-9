import React from "react";
import HeroSection from "./HeroSection";
import PlantsCategory from "./PlantsCategory";
import { useLoaderData } from "react-router";
import RightAside from "./RightAside";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <HeroSection></HeroSection>

      <section className="bg-[#f6f6f6] pb-10">
        <section className="w-11/12 mx-auto ">
          <PlantsCategory data={data}></PlantsCategory>
        </section>
      </section>
    </div>
  );
};

export default Home;
