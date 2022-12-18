import React from 'react';

import Image from 'next/image';

type Props = {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
};

const MarketContents = ({ id, imgUrl, title, description }: Props) => {
  return (
    <div className='w-96 h-80 p-4 hover:bg-stone-200'>
      <div className='relative w-full mb-8 h-full'>
        <Image src={imgUrl} layout='fill' alt='image' objectFit='contain' />
      </div>
      <div className='text-2xl'>{title}</div>
      <div className='w-full'>{description}</div>
    </div>
  );
};

export default MarketContents;
