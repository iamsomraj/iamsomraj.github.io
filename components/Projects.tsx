import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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
            key={project}
            className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-5 p-20"
          >
            <motion.img
              initial={{ y: -300, opacity: 0.5 }}
              transition={{ duration: 1.2 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              src="https://avatars.githubusercontent.com/u/17177659?s=200&v=4"
              alt="project image"
              width={100}
              height={100}
              className="h-24 w-24 rounded-full border border-gray-500 object-cover object-center"
            />

            <div className="max-w-6xl space-y-10 px-0 md:px-10">
              <h4>
                <span className="underline decoration-primary-orange/50">
                  Case Study {index + 1} of {projects.length}:
                </span>
                UPS Clone
              </h4>

              <p className="text-center text-lg md:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati ab ipsam mollitia officia beatae consequuntur
                voluptatem culpa commodi, odio iste quos eaque temporibus
                impedit esse doloribus, ratione quasi repudiandae laboriosam.
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
