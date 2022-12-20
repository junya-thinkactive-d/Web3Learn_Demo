import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

type Props = {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
};

const LinkMarketContent = ({ id, imgUrl, title, description }: Props) => {
  return (
    <Link href={`/learnContents/${id}`}>
      <div className='w-96 h-auto p-4 hover:bg-stone-200 hover:duration-300 hover:cursor-pointer'>
        <div className='relative w-full mb-8 h-60'>
          {imgUrl && (
            <Image src={imgUrl} layout='fill' alt='image' objectFit='contain' priority={true} />
          )}
        </div>
        <div className='text-2xl'>{title}</div>
        <div className='w-full'>{description}</div>
      </div>
    </Link>
  );
};

export default LinkMarketContent;
