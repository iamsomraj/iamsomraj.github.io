import { IExperience } from '../type';

export const fetchExperiences = async (): Promise<IExperience[]> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/experiences`
  );
  const data = await res.json();
  const experiences: IExperience[] = data.experiences;
  return experiences;
};
