import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { IPageInfo } from '../type';

type Props = {
  pageInfo: IPageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-center space-y-5 px-10 text-center md:flex-row md:space-y-0 md:space-x-5 md:text-left"
    >
      {/* Begin: Section Title */}
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        About
      </h3>
      {/* End: Section Title */}

      {/* Begin: About Page Image */}
      <div className="flex w-full items-center justify-center">
        {pageInfo?.profilePicture && (
          <motion.img
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            src={urlFor(pageInfo?.profilePicture).url()}
            alt={pageInfo.name}
            className="h-32 w-32 flex-shrink-0 rounded-full object-cover md:h-48 md:w-48"
          />
        )}
      </div>
      {/* End: About Page Image */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="flex w-full flex-col space-y-2"
      >
        <h4 className="text-3xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-primary-orange/50">little</span>{' '}
          background
        </h4>
        <p className="text-sm leading-loose">
          {pageInfo?.backgroundInformation}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
