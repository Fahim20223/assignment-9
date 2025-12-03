import React from "react";
import { Leaf, Sprout, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 min-h-[63vh]">
      <h1 className="text-4xl font-semibold text-green-700 mb-4">
        About GreenNest
      </h1>
      <p className="text-gray-600 leading-relaxed mb-10 max-w-3xl">
        GreenNest is a modern platform dedicated to helping plant lovers
        explore, purchase, and care for indoor plants with confidence. We
        combine plant shopping, expert guidance, and easy-to-follow care tips —
        all in one place.
      </p>

      {/* FEATURES SECTION */}
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <div className="p-6 rounded-xl border shadow-sm hover:shadow-md transition">
          <Leaf className="text-green-600 mb-3" size={40} />
          <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To make plant care simple, enjoyable, and accessible for everyone —
            from beginners to experts.
          </p>
        </div>

        <div className="p-6 rounded-xl border shadow-sm hover:shadow-md transition">
          <Sprout className="text-green-600 mb-3" size={40} />
          <h3 className="text-xl font-semibold mb-2">What We Do</h3>
          <p className="text-gray-600">
            We provide plant shopping, expert consultations, and step-by-step
            guides for healthier living spaces.
          </p>
        </div>

        <div className="p-6 rounded-xl border shadow-sm hover:shadow-md transition">
          <Users className="text-green-600 mb-3" size={40} />
          <h3 className="text-xl font-semibold mb-2">Our Community</h3>
          <p className="text-gray-600">
            A growing community of plant enthusiasts who share knowledge, tips,
            and love for indoor plants.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
