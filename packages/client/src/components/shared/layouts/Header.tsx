import React from 'react';

import { ConnectWalletButton, InputSearch, Menu } from './headerParts';

const Header = () => {
  return (
    <div className='flex justify-between items-center h-20 px-20 bg-stone-200'>
      <div className='flex justify-center items-center'>
        <div className='text-2xl'>Web3Learn</div>
        <div className='ml-4'>
          <InputSearch />
        </div>
      </div>
      <div>
        <Menu />
      </div>
      <div>
        <ConnectWalletButton />
      </div>
    </div>
  );
};

export default Header;
