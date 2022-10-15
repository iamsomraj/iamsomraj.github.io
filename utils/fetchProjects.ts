import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';
import { IProject } from '../type';

const query = groq`*[_type == "project"] {
  ...,
  technologies[]->
}`;

export const fetchProjects = async (): Promise<IProject[]> => {
  const projects: IProject[] = await sanityClient.fetch(query);
  return projects;
};
