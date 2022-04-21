import React from "react";
import Layout from "../components/Layout";

function BlogPage() {
  const title = "Blog page";
  const heading = "We are creative";
  const text = "There is a template for everything";

  return (
    <Layout title={title} heading={heading} text={text}>
      <div className="bg-custom-gray4">
        <div className="container py-12 lg:py-[190px] px-4">blog</div>
      </div>
    </Layout>
  );
}

export default BlogPage;
