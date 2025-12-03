import React, { useState } from "react";
import AllPlantCard from "./AllPlantCard";
import { useLoaderData } from "react-router";

const Plants = () => {
  const data = useLoaderData(); // All plants JSON

  const [categoryFilter, setCategoryFilter] = useState("All");
  const [careFilter, setCareFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  // --- FILTER LOGIC ---
  const filteredPlants = data.filter((plant) => {
    const categoryMatch =
      categoryFilter === "All" || plant.category === categoryFilter;
    const careMatch = careFilter === "All" || plant.careLevel === careFilter;

    return categoryMatch && careMatch;
  });

  // --- SORT LOGIC ---
  const sortedPlants = [...filteredPlants].sort((a, b) => {
    if (sortOrder === "price-asc") return a.price - b.price;
    if (sortOrder === "price-desc") return b.price - a.price;
    if (sortOrder === "name-asc") return a.plantName.localeCompare(b.plantName);
    if (sortOrder === "name-desc")
      return b.plantName.localeCompare(a.plantName);
    if (sortOrder === "rating-4.5-4.7")
      return a.rating >= 4.5 && a.rating <= 4.7 ? -1 : 1; // Plants in range come first
    if (sortOrder === "rating-4.7-5")
      return a.rating >= 4.7 && a.rating <= 5 ? -1 : 1; // Plants in range come first
    return 0;
  });

  // --- UNIQUE FILTER OPTIONS ---
  const categories = ["All", ...new Set(data.map((p) => p.category))];
  const careLevels = ["All", ...new Set(data.map((p) => p.careLevel))];

  return (
    <div className="bg-[#f6f6f6] min-h-screen px-2">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold py-8">
          ALL Plants ({sortedPlants.length})
        </h2>

        {/* ---- FILTERS & SORT UI ---- */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 flex-wrap">
          {/* CATEGORY FILTER */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-4 py-2 rounded font-medium transition ${
                  categoryFilter === cat
                    ? "bg-green-600 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-green-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* CARE LEVEL FILTER */}
          <div className="flex gap-2 flex-wrap">
            {careLevels.map((level) => (
              <button
                key={level}
                onClick={() => setCareFilter(level)}
                className={`px-4 py-2 rounded font-medium transition ${
                  careFilter === level
                    ? "bg-green-600 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-green-100"
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          {/* SORT OPTIONS */}
          <div className="flex gap-2 items-center">
            <span className="font-semibold">Sort by:</span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="name-asc">Name: A → Z</option>
              <option value="name-desc">Name: Z → A</option>
              <option value="rating-4.5-4.7">Rating: 4.5 → 4.7</option>
              <option value="rating-4.7-5">Rating: 4.7 → 5</option>
            </select>
          </div>
        </div>

        {/* ---- SHOW PLANTS ---- */}
        <AllPlantCard data={sortedPlants}></AllPlantCard>
      </div>
    </div>
  );
};

export default Plants;
