import type { NextPage } from "next";
import Head from "next/head";
import Follow from "../components/Follow";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import Services from "../components/Services";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>OLIVE GRACE - Photographer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <Hero />

      {/* Services */}
      <Services />

      {/* Reviews */}
      <Reviews />

      {/* Follow us */}
      <Follow />
    </div>
  );
};

export default Home;
