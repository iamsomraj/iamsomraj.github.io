import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';

const Home: NextPage = () => {
  // Title of The Page
  const title = `Somraj's Portfolio`;

  return (
    <div className="z z-0 h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden overflow-y-scroll bg-[rgb(36,36,36)] text-white scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary-orange/80">
      <Head>
        <title>{title}</title>
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
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      {/* End: Skills */}

      {/* Begin: Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      {/* End: Projects */}

      {/* Begin: Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>
      {/* End: Contact Me */}

      {/* Begin: Footer */}
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <Image
            height={40}
            width={40}
            className="h-10 w-10 cursor-pointer rounded-full grayscale filter hover:grayscale-0"
            src="https://avatars.githubusercontent.com/u/49872129?v=4"
            alt="footer"
          />
        </div>
      </footer>
      {/* End: Footer */}
    </div>
  );
};

export default Home;
