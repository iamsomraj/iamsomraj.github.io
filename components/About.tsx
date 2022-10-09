import { motion } from 'framer-motion';
type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly px-10 text-center md:flex-row md:text-left"
    >
      {/* Begin: Section Title */}
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        About
      </h3>
      {/* End: Section Title */}

      {/* Begin: About Page Image */}
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="https://avatars.githubusercontent.com/u/49872129?v=4"
        alt="Somraj Mukherjee"
        className="-mb-20 h-16 w-16 flex-shrink-0 rounded-full object-cover md:mb-0 md:rounded-lg"
      />
      {/* End: About Page Image */}

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-primary-orange/50">little</span>{' '}
          background
        </h4>
        <p className="text-sm">
          3 years of experience in development of applications with React, Vue
          and Express. Equipped with a diverse and promising skill set in
          developing frontend and backend. Proficient in various programming
          languages like Javascript, Typescript, and Java. Able to actively self
          manage during independent creative projects, as well as collaborate as
          part of a productive team. Developed various small to medium sized
          open source projects in the span of the last 3 years.
        </p>
      </div>
    </motion.div>
  );
};

export default About;
