import Layout from "../components/Layout";
import Pricing from "../components/Pages/Pricing";
import Request from "../components/common/Request";

function PricingPage() {
  const title = "Pricing page";
  const heading = "Pricing";
  const text = "Beautifully Minimal";

  return (
    <Layout title={title} heading={heading} text={text}>
      <div className="bg-custom-gray4">
        <Pricing />
        <Request />
      </div>
    </Layout>
  );
}

export default PricingPage;
