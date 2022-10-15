import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { ISocial } from '../../type';

type Data = {
  socials: ISocial[];
};

const query = groq`*[_type == "social"]`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socials: ISocial[] = await sanityClient.fetch(query);

  res.status(200).json({ socials });
}
