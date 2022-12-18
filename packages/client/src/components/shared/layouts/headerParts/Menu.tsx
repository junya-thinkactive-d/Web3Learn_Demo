import React from 'react';

import Link from 'next/link'

const Menu = () => {
  return (
    <ul className='flex justify-between items-center text-2xl'>
      <li className='flex justify-center items-center w-60 h-14 text-center hover:border-2 hover:bg-stone-800 hover:text-white hover:duration-300'><Link href='/market'>Market</Link></li>
      <li className='flex justify-center items-center w-60 h-14 text-center hover:border-2 hover:bg-stone-800 hover:text-white hover:duration-300'><Link href='/myLearning'>My Learning</Link></li>
      <li className='flex justify-center items-center w-60 h-14 text-center hover:border-2 hover:bg-stone-800 hover:text-white hover:duration-300'><Link href='/nft'>NFT</Link></li>
    </ul>
  );
};

export default Menu;
