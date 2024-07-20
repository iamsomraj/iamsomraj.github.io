import { groq } from 'next-sanity';
import { sanityClient } from '@/utils/sanity';
import { ISkill } from '@/types/index';

const query = groq`*[_type == "skill"]`;

export const fetchSkills = async (): Promise<ISkill[]> => {
  const skills: ISkill[] = await sanityClient.fetch(query);
  return skills;
};
