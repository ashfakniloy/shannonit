import React from "react";
import Layout from "../components/Layout";
import Creatives from "../components/About/Creatives";
import Counts from "../components/common/Counts";
import Staff from "../components/common/Staff";
import ServicesAccordion from "../components/About/ServicesAccordion";

function AboutPage() {
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

export default AboutPage;
