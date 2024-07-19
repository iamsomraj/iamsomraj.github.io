import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { ISocial } from '../type';
import ThemeButton from './ThemeButton';

type Props = {
  socials: ISocial[];
};

const Header = ({ socials }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-off-white shadow-sm transition-all duration-300 dark:bg-dark-gray dark:shadow dark:shadow-gray-50/10">
      <div className="mx-auto flex max-w-7xl flex-row items-start justify-between p-5 px-10">
        {/* Begin: Left Section */}
        {isMounted && (
          <motion.div
            initial={{
              x: -500,
              opacity: 0.5,
              scale: 0.5,
            }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-row items-center space-x-2"
          >
            {socials.map((social) => (
              <SocialIcon
                key={social._id}
                url={social.url}
                fgColor="#323232"
                bgColor="#dfeeee"
              />
            ))}
          </motion.div>
        )}
        {/* End: Left Section */}

        {/* Begin: Right Section */}
        {isMounted && (
          <motion.div
            initial={{
              x: 500,
              opacity: 0.5,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex cursor-pointer flex-row items-center space-x-2 text-dark-gray"
          >
            {/* Begin: Theme Button */}
            <ThemeButton />
            {/* End: Theme Button */}
            {/* Begin: Mail Icon */}
            <Link href="#contact">
              <div className="flex items-center space-x-2">
                <SocialIcon
                  className="cursor-pointer"
                  network="email"
                  fgColor="#323232"
                  bgColor="#dfeeee"
                />
                {/* End: Mail Icon */}
                <p className="hidden text-sm uppercase dark:text-off-white md:inline-flex">
                  Get in Touch
                </p>
              </div>
            </Link>
          </motion.div>
        )}
        {/* End: Right Section */}
      </div>
    </header>
  );
};

export default Header;
