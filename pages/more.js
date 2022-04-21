import React from "react";
import Layout from "../components/Layout";
import { moreList } from "../data/moreList";

function morePage() {
  const title = "More page";
  const heading = "We are creative";
  const text = "There's a template for everything";

  return (
    <Layout title={title} heading={heading} text={text}>
      <div className="bg-white">
        <div className="container py-12 lg:py-[190px] px-4">
          <div className="heading-lg">
            <h2>More</h2>
          </div>
          <div className="mt-14 flex flex-col gap-14">
            {moreList.map((item) => (
              <div key={item.id}>
                <h3 className="heading-sm">{item.name}</h3>
                <p className="mt-5 text-custom-gray3">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default morePage;
