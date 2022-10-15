import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';
import { ISocial } from '../type';
const query = groq`*[_type == "social"]`;

export const fetchSocials = async (): Promise<ISocial[]> => {
  const socials: ISocial[] = await sanityClient.fetch(query);
  return socials;
};
