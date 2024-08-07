import { IExperience } from '@/types/index';
import { urlFor } from '@/utils/sanity';
import { motion } from 'framer-motion';
type Props = {
  experience: IExperience;
  index: number;
};

const ExperienceCard = ({ experience, index }: Props) => {
  /**
   * @description formats the date to 'Month Day, Year'
   * @param date
   * @returns the date in the format of 'Month Day, Year'
   */
  const formatDate = (date: string) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

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

      {/* Begin: Experience Number & Company Name */}
      <motion.p
        initial={{ opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center justify-center overflow-hidden break-words rounded-lg px-2 py-1 text-left text-xl font-bold capitalize tracking-widest text-dark-gray dark:text-mint-green/50"
      >
        {/* Begin: Experience Number */}
        <span className="mr-2 text-xs italic tracking-tighter">
          {index < 9 ? `0${index + 1}` : index + 1}
        </span>
        {/* End: Experience Number */}
        {/* Begin: Company Name */}
        <span>{experience.company}</span>
        {/* End: Company Name */}
      </motion.p>
      {/* End: Experience Number & Company Name */}

      <div className="text-left text-sm font-medium text-dark-gray/50 dark:text-off-white/50">
        {formatDate(experience.dateStarted)}
        {' - '}
        {experience.isCurrentlyWorkingHere
          ? 'Present'
          : formatDate(experience.dateEnded)}
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
            ),
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
