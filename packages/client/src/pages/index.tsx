import { MarketContents } from '@/components/pages/market'
import { Container } from '@/components/shared'
import { nftData } from '@/mock'

import type { NextPage } from 'next';


const Home: NextPage = () => {
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

export default Home;
