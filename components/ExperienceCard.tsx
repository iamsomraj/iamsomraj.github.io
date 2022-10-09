import { motion } from 'framer-motion';
type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="w-xl flex max-h-[70vh] flex-shrink-0 cursor-pointer snap-center flex-col items-center space-y-7 overflow-hidden rounded-lg bg-[#292929] p-10 opacity-40 transition-opacity duration-200 hover:opacity-100">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="h-32 w-32 rounded-full object-cover object-center"
        src="https://avatars.githubusercontent.com/u/49872129?v=4"
        alt="experience card image"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-3xl font-light">Software Engineer</h4>
        <p className="mt-1 text-2xl font-bold">Yocket</p>
        <div className="my-2 flex space-x-2">
          {/* Tech Used */}
          <motion.img
            className="h-10 w-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/49872129?v=4"
            alt="tech"
          />
          {/* Tech Used */}
          <motion.img
            className="h-10 w-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/49872129?v=4"
            alt="tech"
          />
          {/* Tech Used */}
          <motion.img
            className="h-10 w-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/49872129?v=4"
            alt="tech"
          />
        </div>

        <p className="py-5 uppercase text-gray-500">Started Work - Ended...</p>

        <ul className="ml-5 list-disc space-y-4 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
