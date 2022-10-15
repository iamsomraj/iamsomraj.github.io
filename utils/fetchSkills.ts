import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';
import { ISkill } from '../type';

const query = groq`*[_type == "skill"]`;

export const fetchSkills = async (): Promise<ISkill[]> => {
  const skills: ISkill[] = await sanityClient.fetch(query);
  return skills;
};
