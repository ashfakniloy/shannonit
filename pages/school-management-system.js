// import Image from "next/image";
import Layout from "../components/Layout";
import ERP_Form from "../components/Services/ERP_Form";

function SchoolManagementSystemPage() {
  const title = "School Management System page";
  const heading = "School Management System";
  const text = "There's a template for everything";

  return (
    <Layout title={title} heading={heading} text={text}>
      <div className="bg-white">
        <div className="lg:container py-20 px-4 lg:py-32 ">
          <ERP_Form />
        </div>
      </div>
    </Layout>
  );
}

export default SchoolManagementSystemPage;
