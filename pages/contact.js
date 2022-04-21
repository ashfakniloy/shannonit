import React from "react";
import ContactInfo from "../components/ContactInfo";
import Layout from "../components/Layout";
import Request from "../components/Request";

function ContactPage() {
  const title = "Contact page";
  const heading = "Contact information";
  const text = "Beautifully Minimal";

  return (
    <Layout title={title} heading={heading} text={text}>
      <ContactInfo />
      <div className="h-80 bg-custom-gray4"></div>
      <Request />
    </Layout>
  );
}

export default ContactPage;
