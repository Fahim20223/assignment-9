import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import PlantsDetailsCard from "../Components/PlantsDetailsCard";
import { useLoaderData, useParams } from "react-router";

const PlantsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [plants, setPlants] = useState({});
  //   console.log(data, id, plants);

  useEffect(() => {
    const plantsDetails = data.find((singlePlant) => singlePlant.plantId == id);
    setPlants(plantsDetails);
  }, [data, id]);

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="">
        <section className="bg-[#f4f4f4]">
          <PlantsDetailsCard plants={plants}></PlantsDetailsCard>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default PlantsDetails;
