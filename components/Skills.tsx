import { motion } from 'framer-motion';
import { ISkill } from '@/types/index';
import Skill from './Skill';
type Props = {
  skills: ISkill[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex h-screen flex-col items-center justify-center space-y-2 px-10 md:space-y-8"
    >
      {/* Begin: Section Title */}
      <h3 className="text-2xl font-medium uppercase tracking-widest text-dark-gray/50 underline decoration-mint-green underline-offset-4 transition-all duration-300 dark:text-off-white/50 dark:decoration-off-white/20">
        Skills
      </h3>
      {/* End: Section Title */}

      <h3 className="text-center text-sm uppercase tracking-wider text-gray-500">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills.map(
          (skill, index) =>
            skill.image && (
              <Skill
                skill={skill}
                key={skill._id}
                directionLeft={index < skills.length / 2}
              />
            ),
        )}
      </div>
    </motion.div>
  );
};

export default Skills;
