import Image from 'next/image';
import { motion } from 'framer-motion';
import { IProject } from '../type';
import { urlFor } from '../sanity';

type Props = {
  projects: IProject[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative z-0 mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden text-left md:flex-row"
    >
      {/* Begin: Section Title */}
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Projects
      </h3>
      {/* End: Section Title */}

      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-primary-orange/80">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20"
          >
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center overflow-hidden break-words rounded-lg px-4 py-6 text-left text-5xl lowercase tracking-widest text-white  underline decoration-primary-orange/50"
            >
              {project.title}
            </motion.div>

            <div className="max-w-6xl space-y-10 px-0 md:px-10">
              <h4>
                <span className="mr-2 underline decoration-primary-orange/50">
                  Case Study {index + 1} of {projects.length}:
                </span>
                {project.title}
              </h4>

              <div className="flex space-x-2">
                {/* Tech Used */}
                {project.technologies.map(
                  (tech, index) =>
                    tech.image && (
                      <motion.img
                        key={index}
                        className="h-10 w-10 rounded-full"
                        src={urlFor(tech.image).url()}
                        alt={tech.title}
                      />
                    )
                )}
              </div>

              <p className="whitespace-pre-line text-center text-base leading-relaxed md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-[30%] left-0 h-[500px] w-full -skew-y-12 bg-primary-orange/10"></div>
    </motion.div>
  );
};

export default Projects;
