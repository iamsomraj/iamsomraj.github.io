import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { IPageInfo } from '../../type';

type Data = {
  pageInfo: IPageInfo;
};

const query = groq`*[_type == "pageInfo"][0]`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const pageInfo: IPageInfo = await sanityClient.fetch(query);
  res.status(200).json({ pageInfo });
}
