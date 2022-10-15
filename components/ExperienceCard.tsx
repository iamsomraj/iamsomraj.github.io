import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { IExperience } from '../type';
type Props = {
  experience: IExperience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex max-h-[70vh] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100">
      {experience.companyImage && (
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="h-32 w-32 flex-shrink-0 rounded-full object-cover object-center"
          src={urlFor(experience.companyImage).url()}
          alt={experience.company}
        />
      )}

      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">{experience.jobTitle}</h4>
        <p className="mt-1 text-2xl font-bold">{experience.company}</p>
        <div className="my-2 flex space-x-2">
          {/* Tech Used */}
          {experience.technologies.map(
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

        <p className="py-5 uppercase text-gray-500">
          {experience.dateStarted}
          {' - '}
          {experience.isCurrentlyWorkingHere ? 'Present' : experience.dateEnded}
        </p>

        <ul className="ml-5 list-disc space-y-4 text-lg">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
