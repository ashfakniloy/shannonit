import React from "react";
import Layout from "../components/Layout";
import Creatives from "../components/Creatives";
import Counts from "../components/Counts";
import Staff from "../components/Staff";
import ServicesAccordion from "../components/ServicesAccordion";

function about() {
  const title = "About page";
  const heading = "We are creative";
  const text = "There is a template for everything";

  return (
    <Layout title={title} heading={heading} text={text}>
      <Creatives />
      <Counts />
      <Staff />
      <ServicesAccordion />
    </Layout>
  );
}

export default about;
