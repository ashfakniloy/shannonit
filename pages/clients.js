import Comments from "../components/common/Comments";
import Layout from "../components/Layout";
import Clients from "../components/Pages/Clients";

function ClientsPage() {
  const title = "Client page";
  const heading = "Our dear clients";
  const text = "Beautifully Minimal";

  return (
    <Layout title={title} heading={heading} text={text}>
      <Clients />
      <Comments />
    </Layout>
  );
}

export default ClientsPage;
