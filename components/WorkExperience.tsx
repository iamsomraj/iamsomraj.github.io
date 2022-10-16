import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { IExperience } from '../type';
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
      <div className="flex w-full snap-x snap-mandatory overflow-y-hidden overflow-x-scroll scrollbar scrollbar-track-mint-green/80 scrollbar-thumb-dark-gray/80">
        {experiences.map((experience) => (
          <ExperienceCard experience={experience} key={experience._id} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
