import { groq } from 'next-sanity';
import { sanityClient } from '@/utils/sanity';
import { IExperience } from '@/types/index';

const query = groq`*[_type == "experience"] {
  ...,
  technologies[]->
}
| order(dateStarted desc)`;

export const fetchExperiences = async (): Promise<IExperience[]> => {
  const experiences: IExperience[] = await sanityClient.fetch(query);
  return experiences;
};
