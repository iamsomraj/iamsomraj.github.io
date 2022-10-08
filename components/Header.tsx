import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
type Props = {};

const Header = (props: Props) => {
  return (
    <>
      {/* Begin: Top Navigation Bar */}
      <header className="sticky top-0 z-20 mx-auto flex max-w-7xl flex-row items-start justify-between p-5">
        {/* Begin: Left Section */}
        <motion.div
          initial={{
            x: -500,
            opacity: 0.5,
            scale: 0.5,
          }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center"
        >
          <SocialIcon
            url="https://www.linkedin.com/in/iamsomraj/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/iamsomraj/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/iamsomraj/"
            fgColor="gray"
            bgColor="transparent"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/iamsomraj/"
            fgColor="gray"
            bgColor="transparent"
          />
        </motion.div>
        {/* End: Left Section */}

        {/* Begin: Right Section */}
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
          className="flex cursor-pointer flex-row items-center text-gray-300"
        >
          {/* Begin: Mail Icon */}
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          {/* End: Mail Icon */}
          <p className="hidden text-sm uppercase text-gray-400 md:inline-flex">
            Get in Touch
          </p>
        </motion.div>
        {/* End: Right Section */}
      </header>
      {/* End: Top Navigation Bar */}
    </>
  );
};

export default Header;
