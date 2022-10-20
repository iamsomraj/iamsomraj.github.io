import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { IExperience } from '../type';
type Props = {
  experience: IExperience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <div
      key={experience._id}
      className="flex h-screen w-screen flex-shrink-0 snap-center flex-col items-center justify-center space-y-2 px-10"
    >
      {/* Begin: Company Image */}
      {experience.companyImage && (
        <motion.img
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="h-20 w-20 flex-shrink-0 rounded-full object-cover object-center md:h-32 md:w-32"
          src={urlFor(experience.companyImage).url()}
          alt={experience.company}
        ></motion.img>
      )}
      {/* End: Company Image */}

      {/* Begin: Company Name */}
      <motion.p
        initial={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center overflow-hidden break-words rounded-lg bg-mint-green px-2 py-1 text-left text-xl font-bold capitalize tracking-widest text-dark-gray dark:bg-mint-green/50"
      >
        {experience.company}
      </motion.p>
      {/* End: Company Name */}

      <div className="text-left text-sm font-medium text-dark-gray/50 dark:text-off-white/50">
        {experience.dateStarted}
        {' - '}
        {experience.isCurrentlyWorkingHere ? 'Present' : experience.dateEnded}
      </div>

      {/* Begin: Technologies Used */}
      <div className="flex flex-wrap">
        {/* Tech Used */}
        {experience.technologies.map(
          (tech) =>
            tech.image && (
              <motion.img
                key={tech._id}
                className="m-2 h-10 w-10 flex-shrink-0 rounded-full border border-dark-gray/20 object-cover object-center dark:border-off-white/10"
                src={urlFor(tech.image).url()}
                alt={tech.title}
              />
            )
        )}
      </div>
      {/* End: Technologies Used */}

      {/* Begin: Summary Section */}
      <ul className="flex list-disc flex-col space-y-2">
        {experience.points.map((point, index) => (
          <motion.li
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            key={index}
            className="max-w-lg text-xs font-medium text-dark-gray dark:text-off-white/80 md:text-sm"
          >
            {point}
          </motion.li>
        ))}
      </ul>
      {/* End: Summary Section */}
    </div>
  );
};

export default ExperienceCard;
