import Head from "next/head";
import { useRouter } from "next/router";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Header2 from "./Header2";
import Agent from "./Agent";
import ScrollToTop from "./ScrollToTop";
import Header3 from "./Header3";

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

        {/* <Header3 /> */}

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
  title: "Shannon IT",
  description: "Shannon IT",
  keywords: "Shannon IT",
};

export default Layout;
