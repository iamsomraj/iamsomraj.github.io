import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { IProject } from '../../type';

type Data = {
  projects: IProject[];
};

const query = groq`*[_type == "project"] {
  ...,
  technologies[]->
}`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const projects: IProject[] = await sanityClient.fetch(query);

  res.status(200).json({ projects });
}
