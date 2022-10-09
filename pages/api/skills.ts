import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { ISkill } from '../../type';

type Data = {
  skills: ISkill[];
};

const query = groq`*[_type == "skill"]`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skills: ISkill[] = await sanityClient.fetch(query);

  res.status(200).json({ skills });
}
