import { motion } from 'framer-motion';
import { urlFor } from '../sanity';
import { ISkill } from '@/types/index';
type Props = {
  skill: ISkill;
  directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
  return (
    <motion.div
      initial={{
        x: directionLeft ? -50 : 50,
        opacity: 0,
      }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="group relative flex cursor-pointer"
    >
      {skill.image && (
        <img
          className="h-14 w-14 flex-shrink-0 rounded-full border border-gray-500 object-cover object-center filter transition duration-300 ease-in-out group-hover:grayscale"
          src={urlFor(skill.image).url()}
        />
      )}
      <div className="absolute z-0 h-14 w-14 rounded-full opacity-0 transition duration-300 ease-in-out group-hover:bg-white group-hover:opacity-80">
        <div className="flex h-full items-center justify-center">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Skill;
