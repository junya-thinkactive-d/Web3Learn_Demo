import React, { useCallback } from 'react';

import { Button, MarketContent, Mining } from '@/components/shared';
import { useWalletContext } from '@/context';
import { useWeb3LearnNFTContract } from '@/hooks/contracts/useWeb3LearnNFT';
import { Content } from '@/types/content';

type Props = {
  content: Content;
};

const MintContent = ({ content }: Props) => {
  const walletContext = useWalletContext();
  const currentAccount = walletContext?.currentAccount;
  const { mining, handleMint } = useWeb3LearnNFTContract({});

  const handleOnClick = useCallback(() => {
    if (!currentAccount) return;
    handleMint(currentAccount, content.title, content.imgUrl);
  }, [content.imgUrl, content.title, currentAccount, handleMint]);
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <Mining mining={mining} />
        <MarketContent
          id={content.id}
          imgUrl={content.imgUrl}
          title={content.title}
          description={content.description}
        />
        <div className='mt-12'>
          <Button
            onClick={() => handleOnClick}
            buttonName='Mint'
            className='bg-green-500 text-white'
          />
        </div>
      </div>
    </>
  );
};

export default MintContent;
