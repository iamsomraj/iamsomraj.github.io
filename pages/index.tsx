import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import { urlFor } from '../sanity';
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
  // Title of The Page
  const title = `Somraj's Portfolio`;

  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden overflow-y-scroll scroll-smooth bg-off-white text-dark-gray scrollbar scrollbar-track-mint-green/80 scrollbar-thumb-dark-gray/80">
      <Head>
        <title>{title}</title>
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
        <ContactMe />
      </section>
      {/* End: Contact Me */}

      {/* Begin: Footer */}
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <Link href="#contact">
          <div className="flex items-center justify-center">
            {pageInfo.heroImage && (
              <Image
                height={40}
                width={40}
                className="h-10 w-10 cursor-pointer rounded-full object-cover object-center grayscale filter hover:grayscale-0"
                src={urlFor(pageInfo.heroImage).url()}
                alt="footer"
              />
            )}
          </div>
        </Link>
      </footer>
      {/* End: Footer */}
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
