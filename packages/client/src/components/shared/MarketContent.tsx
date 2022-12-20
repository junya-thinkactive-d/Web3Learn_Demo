import React from 'react';

import Image from 'next/image';

type Props = {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
};

const MarketContent = ({ id, imgUrl, title, description }: Props) => {
  return (
      <div className='w-96 h-auto p-4'>
        <div className='relative w-full mb-8 h-60'>
          {imgUrl && (
            <Image src={imgUrl} layout='fill' alt='image' objectFit='contain' priority={true} />
          )}
        </div>
        <div className='text-2xl'>{title}</div>
        <div className='w-full'>{description}</div>
      </div>
  );
};

export default MarketContent;
