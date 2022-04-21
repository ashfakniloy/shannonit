import React from "react";
import Link from "next/link";
import ImageGrid from "./ImageGrid";
import { productList } from "../data/productList";

function Products() {
  const products = productList.slice(0, 6);

  return (
    <div className="bg-white">
      <div className="lg:container py-20 px-4 lg:py-32">
        <div className="lg:w-2/4">
          <h2 className="heading-lg leading-snug">
            For all the things you want to do. <br />
            For the things you love.
          </h2>
        </div>

        <div className="lg:container py-16 px-4 grid lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ImageGrid key={product.id} image={product.img} />
          ))}
        </div>

        <div className="flex justify-center mt-5">
          <Link href="/gallery" passHref>
            <button className="px-10 lg:px-16 py-3 lg:py-4 bg-white hover:bg-custom-gray text-custom-gray hover:text-white duration-300 text-sm border-2 border-slate-300 hover:border-custom-gray font-Montserrat rounded-full uppercase">
              see more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Products;
