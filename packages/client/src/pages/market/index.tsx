import React from 'react';

import { MarketContents } from '@/components/pages/market';
import { Container } from '@/components/shared';
import { nftData } from '@/mock/index';

const Market = () => {
  return (
    <>
      <Container>
        <div className='flex justify-between items-start'>
          {nftData.map((nft)=>(
            <MarketContents key={nft.id} id={nft.id} imgUrl={nft.imgUrl} title={nft.title} description={nft.description} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Market;
