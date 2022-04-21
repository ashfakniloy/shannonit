import React from "react";
import Layout from "../components/Layout";
import Services from "../components/Services";
import Request from "../components/Request";
import Pricing from "../components/Pricing";

function ServicesPage() {
  const title = "Services page";
  const heading = "Get Your Next Project Done With Us.";
  const text = "There's a template for everything";

  return (
    <Layout title={title} heading={heading} text={text}>
      <Services />
      <Request />
      <div className="bg-custom-gray4">
        <div className="lg:container py-12 mx-4 lg:mx-auto lg:py-[120px]">
          <div className="text-center mb-8 lg:mb-16">
            <h1 className="heading-lg">Pricing</h1>
            <p className="mt-1 text-sm text-custom-gray3">
              Beautifully Mininal
            </p>
          </div>
          <Pricing />
        </div>
      </div>
    </Layout>
  );
}

export default ServicesPage;
