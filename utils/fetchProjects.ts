import { groq } from 'next-sanity';
import { sanityClient } from '@/utils/sanity';
import { IProject } from '@/types/index';

const query = groq`*[_type == "project"] {
  ...,
  technologies[]->
}`;

export const fetchProjects = async (): Promise<IProject[]> => {
  const projects: IProject[] = await sanityClient.fetch(query);
  return projects;
};
