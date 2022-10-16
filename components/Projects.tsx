import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { urlFor } from '../sanity';
import { IProject } from '../type';

type Props = {
  projects: IProject[];
};

const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex h-screen max-w-full flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar scrollbar-track-mint-green/80 scrollbar-thumb-dark-gray/80">
        {projects.map((project, index) => (
          <div
            key={project._id}
            className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-2 px-10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center overflow-hidden break-words rounded-lg px-4 py-6 text-left text-5xl lowercase tracking-widest text-dark-gray"
            >
              {project.title}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="cursor-pointer"
            >
              <SocialIcon
                url={project.linkToBuild}
                fgColor="#323232"
                bgColor="transparent"
                className="cursor-pointer"
              />
            </motion.div>

            <div className="max-w-6xl space-y-10 px-0 md:px-10">
              <h4 className="mr-2 text-center font-bold text-dark-gray">
                Project {index + 1} of {projects.length}
              </h4>

              <div className="flex space-x-2">
                {/* Tech Used */}
                {project.technologies.map(
                  (tech, index) =>
                    tech.image && (
                      <motion.img
                        key={tech._id}
                        className="h-10 w-10 flex-shrink-0 rounded-full border border-dark-gray/60 object-cover object-center"
                        src={urlFor(tech.image).url()}
                        alt={tech.title}
                      />
                    )
                )}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center text-base leading-relaxed text-dark-gray"
              >
                {project.summary}
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-[30%] left-0 h-[500px] w-full -skew-y-12 bg-mint-green"></div>
    </motion.div>
  );
};

export default Projects;
