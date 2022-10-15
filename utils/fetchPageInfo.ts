import { IPageInfo } from '../type';

export const fetchPageInfo = async (): Promise<IPageInfo> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/page-info`);
  const data = await res.json();
  const pageInfo: IPageInfo = data.pageInfo;
  return pageInfo;
};
