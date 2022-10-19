import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { urlFor } from '../sanity';
import { IPageInfo } from '../type';

type Props = {
  pageInfo: IPageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [attributes] = useTypewriter({
    words: [...pageInfo?.attributes],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="relative flex h-screen snap-start flex-col items-center justify-center overflow-hidden text-center">
      {/* Begin: Background Circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
          borderRadius: ['20%', '20%', '50%', '80%', '20%'],
        }}
        transition={{
          duration: 2.5,
        }}
        className="absolute top-32 flex flex-col items-center justify-center"
      >
        <div className="absolute top-6 h-36 w-36 animate-ping rounded-full border border-dark-gray/10 transition-all duration-300 dark:border-off-white/10"></div>
        <div className="absolute top-0 h-40 w-40 animate-pulse rounded-full border border-dark-gray/20 transition-all duration-300 dark:border-off-white/20"></div>
      </motion.div>
      {/* End: Background Circles */}

      {/* Begin: Personal Details */}
      <div className="absolute top-36 flex flex-col items-center justify-center space-y-4 px-10">
        {/* Begin: Profile Picture */}
        {pageInfo?.heroImage && (
          <Image
            className="h-32 w-32 flex-shrink-0 rounded-full object-cover object-center"
            width={128}
            height={128}
            src={urlFor(pageInfo?.heroImage).url()}
            alt={pageInfo.name}
          />
        )}
        {/* End: Profile Picture */}

        {/* Begin: Name */}
        <h2 className="text-3xl uppercase tracking-tighter text-dark-gray transition-all duration-300 dark:text-off-white">
          {pageInfo?.name}
        </h2>
        {/* End: Name */}

        {/* Begin: Designation */}
        <h2 className="mx-auto max-w-xs text-xs uppercase tracking-widest text-dark-gray transition-all duration-300 dark:text-off-white">
          {pageInfo?.role}
        </h2>
        {/* End: Designation */}

        {/* Begin: Attributes */}
        <h1 className="text-4xl font-semibold transition-all duration-300 dark:text-mint-green">
          <span>{attributes}</span>
          <Cursor cursorColor="#dfeeee" />
        </h1>
        {/* End: Attributes */}

        {/* Begin: Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center">
          <Link href="#about">
            <motion.button
              initial={{ x: -200, opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="m-1 rounded-full border border-dark-gray/20 px-6 py-2 text-sm uppercase tracking-widest text-gray-500 transition-all hover:border-mint-green/40"
            >
              About
            </motion.button>
          </Link>

          <Link href="#experience">
            <motion.button
              initial={{ x: -200, opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="m-1 rounded-full border border-dark-gray/20 px-6 py-2 text-sm uppercase tracking-widest text-gray-500 transition-all hover:border-mint-green/40"
            >
              Experience
            </motion.button>
          </Link>

          <Link href="#skills">
            <motion.button
              initial={{ x: 200, opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="m-1 rounded-full border border-dark-gray/20 px-6 py-2 text-sm uppercase tracking-widest text-gray-500 transition-all hover:border-mint-green/40"
            >
              Skills
            </motion.button>
          </Link>

          <Link href="#projects">
            <motion.button
              initial={{ x: 200, opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              className="m-1 rounded-full border border-dark-gray/20 px-6 py-2 text-sm uppercase tracking-widest text-gray-500 transition-all hover:border-mint-green/40"
            >
              Projects
            </motion.button>
          </Link>
        </div>
        {/* End: Navigation Buttons */}
      </div>
      {/* End: Personal Details */}
    </div>
  );
};

export default Hero;
