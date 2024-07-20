import { groq } from 'next-sanity';
import { sanityClient } from '@/utils/sanity';
import { ISocial } from '@/types/index';
const query = groq`*[_type == "social"]`;

export const fetchSocials = async (): Promise<ISocial[]> => {
  const socials: ISocial[] = await sanityClient.fetch(query);
  return socials;
};
