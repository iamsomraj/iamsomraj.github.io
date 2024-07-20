import type { GetStaticProps } from 'next';
import Head from 'next/head';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import { IExperience, IPageInfo, IProject, ISkill, ISocial } from '../type';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchSocials } from '../utils/fetchSocials';

type Props = {
  pageInfo: IPageInfo;
  experiences: IExperience[];
  projects: IProject[];
  skills: ISkill[];
  socials: ISocial[];
};

const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden overflow-y-scroll scroll-smooth bg-off-white text-dark-gray transition-all duration-300 scrollbar scrollbar-track-mint-green/80  scrollbar-thumb-dark-gray/80 dark:bg-dark-gray dark:text-off-white dark:scrollbar-track-mint-green/20">
      <Head>
        <title>Somraj Mukherjee&apos;s Portfolio</title>
        <meta
          name="description"
          content="Somraj Mukherjee - Full Stack Developer"
        />
      </Head>

      {/* Begin: Header */}
      <Header socials={socials} />
      {/* End: Header */}

      {/* Begin: Hero Section */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      {/* End: Hero Section */}

      {/* Begin: About Section */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      {/* End: About Section */}

      {/* Begin: Work Experience */}
      <section id="experience" className="snap-start">
        <WorkExperience experiences={experiences} />
      </section>
      {/* End: Work Experience */}

      {/* Begin: Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      {/* End: Skills */}

      {/* Begin: Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      {/* End: Projects */}

      {/* Begin: Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>
      {/* End: Contact Me */}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: IPageInfo = await fetchPageInfo();
  const experiences: IExperience[] = await fetchExperiences();
  const projects: IProject[] = await fetchProjects();
  const skills: ISkill[] = await fetchSkills();
  const socials: ISocial[] = await fetchSocials();
  return {
    props: {
      pageInfo,
      experiences,
      projects,
      skills,
      socials,
    },
    revalidate: 10,
  };
};
