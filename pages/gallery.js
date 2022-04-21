import React from "react";
import ImageGrid from "../components/ImageGrid";
import Layout from "../components/Layout";
import { productList } from "../data/productList";

function GalleryPage() {
  const title = "Gallery page";
  const heading = "For all the things you want to do.";
  const text = "There's a template for everything";

  return (
    <Layout title={title} heading={heading} text={text}>
      <div className="bg-white">
        <div className="lg:container py-20 px-4 lg:py-32">
          <div className="lg:container py-16 lg:px-4 grid lg:grid-cols-3 gap-6">
            {productList.map((product) => (
              <ImageGrid key={product.id} image={product.img} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default GalleryPage;
