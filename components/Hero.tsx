import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';
type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [`Hi, The Name's Somraj Mukherjee`, 'Learner', 'Developer'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 overflow-hidden text-center">
      {/* Begin: Background Circles */}
      <BackgroundCircles />
      {/* End: Background Circles */}

      {/* Begin: Profile Picture */}
      <Image
        className="relative mx-auto h-32 w-32 rounded-full object-cover"
        width={128}
        height={128}
        src="https://avatars.githubusercontent.com/u/49872129?v=4"
        alt="Somraj Mukherjee"
      />
      {/* End: Profile Picture */}

      {/* Begin: Personal Details */}
      <div className="z-20">
        {/* Begin: Designation */}
        <h2 className="pb-2 text-sm uppercase tracking-[15px] text-gray-500">
          Software Engineer
        </h2>
        {/* End: Designation */}

        {/* Begin: Name */}
        <h1 className="px-10 text-3xl font-semibold">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        {/* End: Name */}

        {/* Begin: Navigation Buttons */}
        <div className="pt-5">
          <Link href="#about">
            <button className="rounded-full border border-[#242424] px-6 py-2 text-sm uppercase tracking-widest text-gray-500 transition-all hover:border-primary-orange/40">
              About
            </button>
          </Link>

          <Link href="#experience">
            <button className="rounded-full border border-[#242424] px-6 py-2 text-sm uppercase tracking-widest text-gray-500 transition-all hover:border-primary-orange/40">
              Experience
            </button>
          </Link>

          <Link href="#skills">
            <button className="rounded-full border border-[#242424] px-6 py-2 text-sm uppercase tracking-widest text-gray-500 transition-all hover:border-primary-orange/40">
              Skills
            </button>
          </Link>

          <Link href="#projects">
            <button className="rounded-full border border-[#242424] px-6 py-2 text-sm uppercase tracking-widest text-gray-500 transition-all hover:border-primary-orange/40">
              Projects
            </button>
          </Link>
        </div>
        {/* End: Navigation Buttons */}
      </div>
      {/* End: Personal Details */}
    </div>
  );
};

export default Hero;
