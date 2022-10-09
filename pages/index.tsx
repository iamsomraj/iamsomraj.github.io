import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';

const Home: NextPage = () => {
  return (
    <div className="z-0 h-screen snap-y snap-mandatory overflow-scroll bg-[rgb(36,36,36)] text-white">
      <Head>
        <title>{`Somraj's Portfolio`}</title>
      </Head>

      {/* Begin: Header */}
      <Header />
      {/* End: Header */}

      {/* Begin: Hero Section */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      {/* End: Hero Section */}

      {/* Begin: About Section */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* End: About Section */}

      {/* Begin: Work Experience */}
      <section id="work-experience" className="snap-center">
        <WorkExperience />
      </section>
      {/* End: Work Experience */}

      {/* Begin: Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      {/* End: Skills */}
    </div>
  );
};

export default Home;
