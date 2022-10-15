import { ISkill } from '../type';

export const fetchSkills = async (): Promise<ISkill[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skills`);
  const data = await res.json();
  const skills: ISkill[] = data.skills;
  return skills;
};
