import React from "react";
import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section className="max-container" id="products">
      <div className="flex flex-col">
        <h2 className="text-4xl font-palanquin  font-bold">
          Our<span className="text-coral-red"> Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 text-slate-gray font-montserrat">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key= {product.name } {...product} />
            ))}
    

      </div>
    </section>
  );
};

export default PopularProducts;
