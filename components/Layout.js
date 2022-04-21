import Head from "next/head";
import { useRouter } from "next/router";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Header2 from "./Header2";
import ScrollToTop from "./ScrollOnTop";
import Agent from "./Agent";

function Layout({ title, description, keywords, heading, text, children }) {
  const { pathname } = useRouter();

  return (
    <div className="bg-white font-Poppins text-[15px] lg:text-base transition">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <div>
        {pathname === "/" ? <Header /> : <Header2 />}

        <Banner heading={heading} text={text} />

        {children}
        <Agent />

        <ScrollToTop />

        <Footer />
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Shannon It",
  description: "Shannon It",
  keywords: "Shannon It",
};

export default Layout;
