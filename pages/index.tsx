import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-[rgb(36,36,36)] text-white">
      <Head>
        <title>{`Somraj's Portfolio`}</title>
      </Head>

      {/* Begin: Header */}
      <Header />
      {/* End: Header */}

      {/* Begin: Hero Section */}
      <section id="hero">
        <Hero />
      </section>
      {/* End: Hero Section */}
    </div>
  );
};

export default Home;
