import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { urlFor } from '@/utils/sanity';
import { IProject } from '@/types/index';

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
      <div className="relative z-20 flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar scrollbar-track-mint-green/80 scrollbar-thumb-dark-gray/80 dark:scrollbar-track-mint-green/20">
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
              className="flex items-center justify-center overflow-hidden break-words rounded-lg bg-off-white/50 px-4 py-2 text-center text-3xl lowercase tracking-widest text-dark-gray mix-blend-normal shadow dark:bg-off-white/10 dark:text-off-white"
            >
              {project.title}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="cursor-pointer rounded-full dark:bg-mint-green"
            >
              <SocialIcon
                url={project.linkToBuild}
                fgColor="#323232"
                bgColor="transparent"
                className="cursor-pointer"
              />
            </motion.div>

            <div className="max-w-6xl space-y-10 px-0 md:px-10">
              <h4 className="mr-2 text-center font-bold text-dark-gray dark:text-off-white/40">
                Project {index + 1} of {projects.length}
              </h4>

              <motion.div
                initial={{
                  opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex space-x-2"
              >
                {/* Tech Used */}
                {project.technologies.map(
                  (tech) =>
                    tech.image && (
                      <motion.img
                        key={tech._id}
                        className="h-10 w-10 flex-shrink-0 rounded-full border border-dark-gray/60 object-cover object-center dark:border-off-white/20"
                        src={urlFor(tech.image).url()}
                        alt={tech.title}
                      />
                    ),
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-md text-center text-base leading-relaxed text-dark-gray dark:text-off-white"
              >
                {project.summary}
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute left-0 top-[30%] h-[500px] w-full -skew-y-12 bg-mint-green dark:bg-mint-green/10"></div>
    </motion.div>
  );
};

export default Projects;
