import { GetStaticProps } from 'next';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import { ISocial } from '@/types/index';
import { fetchSocials } from '../utils/fetchSocials';

type Props = {
  socials: ISocial[];
};

export default function Custom404({ socials }: Props) {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden overflow-y-scroll scroll-smooth bg-off-white text-dark-gray transition-all duration-300 scrollbar scrollbar-track-mint-green/80 scrollbar-thumb-dark-gray/80 dark:bg-dark-gray dark:text-off-white dark:scrollbar-track-mint-green/20">
      <Head>
        <title>404 - Page Not Found</title>
        <meta
          name="description"
          content="Somraj Mukherjee - Full Stack Developer"
        />
      </Head>

      {/* Begin: Header */}
      <Header socials={socials} />
      {/* End: Header */}

      <div className="flex h-full flex-col items-center justify-center gap-y-4">
        <h1 className="text-center text-4xl font-bold">
          Oops! Page not found.
        </h1>
        <Link href={'/'}>
          <motion.button
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
            className="m-1 rounded-full border border-dark-gray/20 px-6 py-2 text-sm uppercase tracking-widest text-gray-500 transition-all hover:border-mint-green/40"
          >
            Home
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const socials: ISocial[] = await fetchSocials();
  return {
    props: {
      socials,
    },
    revalidate: 10,
  };
};
