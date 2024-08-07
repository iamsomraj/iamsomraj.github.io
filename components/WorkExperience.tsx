import { motion } from 'framer-motion';
import { IExperience } from '@/types/index';
import ExperienceCard from './ExperienceCard';
type Props = {
  experiences: IExperience[];
};

const WorkExperience = ({ experiences }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex h-screen max-w-full items-center justify-center"
    >
      <div className="flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar scrollbar-track-mint-green/80 scrollbar-thumb-dark-gray/80 dark:scrollbar-track-mint-green/20">
        {experiences.map((experience, index) => (
          <ExperienceCard
            experience={experience}
            key={experience._id}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
