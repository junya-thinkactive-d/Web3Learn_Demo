import React from 'react';

import { NFTContent } from '@/components/pages/nft';
import { Container } from '@/components/shared';
import { contentsData } from '@/mock';

const NFT = () => {
  return (
    <>
      <Container>
        <div className='flex'>
        {contentsData.map((content, i) => (
          <div key={i}>
            <NFTContent content={content} />
          </div>
        ))}
        </div>
      </Container>
    </>
  );
};

export default NFT;
