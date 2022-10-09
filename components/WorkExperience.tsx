import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-full flex-col items-center justify-evenly overflow-hidden px-10 text-left scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-primary-orange/80 md:flex-row"
    >
      {/* Begin: Section Title */}
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Experience
      </h3>
      {/* End: Section Title */}

      {/* Begin: Work Experience List */}
      <div className="flex w-full snap-x snap-mandatory space-x-5 overflow-x-scroll p-10">
        {/* Begin: Experience Card */}
        <ExperienceCard />
        {/* End: Experience Card */}
        {/* Begin: Experience Card */}
        <ExperienceCard />
        {/* End: Experience Card */}
        {/* Begin: Experience Card */}
        <ExperienceCard />
        {/* End: Experience Card */}
        {/* Begin: Experience Card */}
        <ExperienceCard />
        {/* End: Experience Card */}
        {/* Begin: Experience Card */}
        <ExperienceCard />
        {/* End: Experience Card */}
        {/* Begin: Experience Card */}
        <ExperienceCard />
        {/* End: Experience Card */}
      </div>
      {/* End: Work Experience List */}
    </motion.div>
  );
};

export default WorkExperience;
