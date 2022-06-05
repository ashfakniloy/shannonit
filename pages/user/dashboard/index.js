import MainSection from "../../../components/UserDashboard/MainSection";
import Layout from "../../../components/UserDashboard/Layout";

function DashboardPage() {
  return (
    <div className="h-screen">
      <Layout>
        <MainSection />
      </Layout>
    </div>
  );
}

export default DashboardPage;
