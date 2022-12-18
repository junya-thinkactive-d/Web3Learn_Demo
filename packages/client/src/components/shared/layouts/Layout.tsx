import React, { ReactNode } from 'react';

import Header from './Header';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className='w-ful h-screen'>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
