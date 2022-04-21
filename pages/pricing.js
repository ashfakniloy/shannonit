import { useState } from "react";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import Pricing from "../components/Pricing";
import Request from "../components/Request";

function PricingPage() {
  const title = "Pricing page";
  const heading = "Pricing";
  const text = "Beautifully Minimal";

  const [showModal, setShowModal] = useState(false);

  return (
    <Layout title={title} heading={heading} text={text}>
      <div className="bg-custom-gray4">
        <div className="lg:container py-12 lg:py-[190px]">
          <Pricing />
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <Request />
      </div>
    </Layout>
  );
}

export default PricingPage;
