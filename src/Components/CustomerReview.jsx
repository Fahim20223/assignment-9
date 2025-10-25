import React, { use } from "react";
import { FaStar } from "react-icons/fa";
const reviewPromise = fetch("/review.json").then((res) => res.json());
const CustomerReview = () => {
  const review = use(reviewPromise);
  return (
    <div className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Customers Review</h2>
        <p className="text-gray-500 mb-10">
          What our customers say about our indoor plants 🌿
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {review.map((customer) => (
            <div
              key={customer.id}
              className="bg-white p-6 rounded-2xl shadow-md hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={customer.photo}
                  alt="phot of a customer"
                  className="w-12 h-12 rounded-full border-2 border-green-500 mr-3"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">
                    {customer.name}
                  </h4>
                  <p className="text-sm text-gray-500">{customer.company}</p>
                </div>
              </div>

              <h3 className="text-lg font-semibold mb-2">Amazing Plant</h3>
              <p className="text-gray-600 text-sm mb-3">{customer.review}</p>

              <div className="flex items-center justify-between">
                <div className="flex text-yellow-500">
                  {Array.from({ length: customer.rating }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded-lg">
                  {customer.rating}.0 ★
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
