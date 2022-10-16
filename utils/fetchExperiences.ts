import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';
import { IExperience } from '../type';

const query = groq`*[_type == "experience"] {
  ...,
  technologies[]->
}
| order(dateStarted desc)`;

export const fetchExperiences = async (): Promise<IExperience[]> => {
  const experiences: IExperience[] = await sanityClient.fetch(query);
  return experiences;
};
