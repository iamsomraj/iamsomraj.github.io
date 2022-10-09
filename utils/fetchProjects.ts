import { IProject } from '../type';

export const fetchProjects = async (): Promise<IProject[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/skills`);
  const data = await res.json();
  const projects : IProject[] =  data.projects;
  return projects;
};
