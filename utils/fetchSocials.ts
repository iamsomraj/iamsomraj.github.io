import { ISocial } from '../type';

export const fetchSocials = async (): Promise<ISocial[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/socials`);
  const data = await res.json();
  const socials: ISocial[] = data.socials;
  return socials;
};
