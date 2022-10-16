import { motion } from 'framer-motion';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';
import { ISocial } from '../type';

type Props = {
  socials: ISocial[];
};

const Header = ({ socials }: Props) => {
  return (
    <header className="sticky top-0 z-20 w-full shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-row items-start justify-between p-5">
        {/* Begin: Left Section */}
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
        {/* End: Left Section */}

        {/* Todo: Add Theme Toggle Button */}
        {/* Begin: Right Section */}
        <Link href="#contact">
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
            {/* Begin: Mail Icon */}
            <SocialIcon
              className="cursor-pointer"
              network="email"
              fgColor="#323232"
              bgColor="#dfeeee"
            />
            {/* End: Mail Icon */}
            <p className="hidden text-sm uppercase md:inline-flex">
              Get in Touch
            </p>
          </motion.div>
        </Link>
        {/* End: Right Section */}
      </div>
    </header>
  );
};

export default Header;
