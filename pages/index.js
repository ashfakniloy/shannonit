import Layout from "../components/Layout";
import Staff from "../components/common/Staff";
import ContactInfo from "../components/common/ContactInfo";
import Advantages from "../components/Home/Advantages";
import Contact from "../components/Home/Contact";
import Counts from "../components/common/Counts";
import Description from "../components/Home/Description";
import Products from "../components/Home/Products";
import Comments from "../components/common/Comments";
import Search from "../components/Home/Search";

export default function Home() {
  return (
    <Layout>
      <Description />
      <Advantages />
      <Contact />
      <Products />
      <Staff />
      <Counts />
      <Comments />
      <ContactInfo />
      <Search />
    </Layout>
  );
}
