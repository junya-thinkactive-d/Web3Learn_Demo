import React from 'react';

import Link from 'next/link'

const Menu = () => {
  return (
    <ul className='flex justify-between items-center text-2xl'>
      <li className='flex justify-center items-center w-60 h-14 text-center hover:border-2 hover:bg-stone-500 hover:text-white hover:duration-300'><Link href='#'>Market</Link></li>
      <li className='flex justify-center items-center w-60 h-14 text-center hover:border-2 hover:bg-stone-500 hover:text-white hover:duration-300'><Link href='#'>My Learning</Link></li>
      <li className='flex justify-center items-center w-60 h-14 text-center hover:border-2 hover:bg-stone-500 hover:text-white hover:duration-300'><Link href='#'>NFT</Link></li>
    </ul>
  );
};

export default Menu;
