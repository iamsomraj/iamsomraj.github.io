import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { IPageInfo } from '@/types/index';

type Props = {
  pageInfo: IPageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex h-screen flex-col items-center justify-center space-y-2 md:space-y-8"
    >
      {/* Begin: Section Title */}
      <h3 className="text-2xl font-medium uppercase tracking-widest text-dark-gray/50 underline decoration-mint-green underline-offset-4 transition-all duration-300 dark:text-off-white/50 dark:decoration-off-white/20">
        About
      </h3>
      {/* End: Section Title */}

      {/* Begin: About Page Elements */}
      <div className="flex flex-col items-center justify-start space-y-2 md:flex-row md:space-x-8 md:space-y-0">
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
              className="h-32 w-32 flex-shrink-0 rounded-full object-cover md:h-48 md:w-48 md:rounded-lg"
            />
          )}
        </div>
        {/* End: About Page Image */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="flex max-w-lg flex-col space-y-2 px-10 text-dark-gray transition-all duration-300 dark:text-off-white"
        >
          <h4 className="text-center text-2xl font-semibold md:text-left">
            Here is a{' '}
            <span className="rounded-lg bg-mint-green px-2 py-1 transition-all duration-300 dark:text-dark-gray">
              little
            </span>{' '}
            background
          </h4>
          <motion.p
            initial={{ opacity: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="break-words text-center text-xs leading-loose dark:text-off-white/60 md:text-left md:text-sm"
          >
            {pageInfo?.backgroundInformation}
          </motion.p>
        </motion.div>
      </div>
      {/* End: About Page Elements */}
    </motion.div>
  );
};

export default About;
