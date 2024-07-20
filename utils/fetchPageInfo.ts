import { groq } from 'next-sanity';
import { sanityClient } from '@/utils/sanity';
import { IPageInfo } from '@/types/index';

const query = groq`*[_type == "pageInfo"][0]`;

export const fetchPageInfo = async (): Promise<IPageInfo> => {
  const pageInfo: IPageInfo = await sanityClient.fetch(query);
  return pageInfo;
};
