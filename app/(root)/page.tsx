import Link from 'next/link';
import Image from 'next/image';

import { navLinks } from '@/constants';
import { Collection } from '@/components/shared/Collection';

import { getAllImages } from '@/lib/actions/image.actions';

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  const images = await getAllImages({ page, searchQuery });

  return (
    <>
      <section className='home'>
        <h1 className='home-heading'>Be Creative with Quantum Snap AI</h1>
        <ul className='flex-center w-full gap-20'>
          {navLinks.slice(1, 5).map((navLink) => (
            <Link
              key={navLink.route}
              href={navLink.route}
              className='flex-center flex-col gap-2'
            >
              <li className='flex-center w-fit rounded-full bg-white p-4'>
                <Image src={navLink.icon} alt='Icon' width={24} height={24} />
              </li>
              <p className='p-medium-14 text-center text-white'>
                {navLink.label}
              </p>
            </Link>
          ))}
        </ul>
      </section>

      <section className='sm:mt-12'>
        <Collection
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
    </>
  );
};
export default Home;
