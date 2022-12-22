import React from 'react';

import { MintContent } from '@/components/pages/myLearning'
import { Container } from '@/components/shared';
// import { useWalletContext } from '@/context'
// import { useWeb3LearnContract } from '@/hooks/contracts'
import { contentsData } from '@/mock';


const MyLearning = () => {
  // const walletContext = useWalletContext();
  // const userAddress = walletContext?.currentAccount;
  // const {buyList} =useWeb3LearnContract({userAddress})
  // const [buyContents,setBuyContents]

  return (
    <>
      <Container>
        <div className='flex justify-between items-start'>
          {contentsData.map((content, i) => (
            <div key={i}>
              <MintContent content={content} />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default MyLearning;
