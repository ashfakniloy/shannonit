import Advantages from "../components/Advantages";
import Contact from "../components/Contact";
import Counts from "../components/Counts";
import Description from "../components/Description";
import Layout from "../components/Layout";
import Products from "../components/Products";
import Staff from "../components/Staff";
import Comments from "../components/Comments";
import ContactInfo from "../components/ContactInfo";
import Search from "../components/Search";

export default function Home() {
  return (
    <Layout>
      <Description />
      <Advantages />
      <Contact />
      <Products />
      <Staff />
      <Counts />
      <div className="bg-[#f8f8f8]">
        <Comments />
      </div>
      <ContactInfo />
      <Search />
    </Layout>
  );
}
