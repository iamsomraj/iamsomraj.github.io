import { motion } from 'framer-motion';
import { ISkill } from '../type';
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
      className="relative mx-auto flex min-h-screen flex-col items-center justify-center text-center md:flex-row md:text-left"
    >
      {/* Begin: Section Title */}
      <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
        Skills
      </h3>
      {/* End: Section Title */}

      <h3 className="absolute top-36 text-sm uppercase tracking-[3px] text-gray-500">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {skills.map(
          (skill, index) =>
            skill.image && (
              <Skill
                skill={skill}
                key={index}
                directionLeft={index < skills.length / 2}
              />
            )
        )}
      </div>
    </motion.div>
  );
};

export default Skills;
