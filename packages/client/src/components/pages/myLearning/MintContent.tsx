import React, { useCallback, useState } from 'react';

import { useRouter } from 'next/router';

import { Button, MarketContent, Mining, Popup } from '@/components/shared';
import { useWalletContext } from '@/context';
import { useWeb3LearnNFTContract } from '@/hooks/contracts';
import { Content } from '@/types/content';

type Props = {
  content: Content;
};

const MintContent = ({ content }: Props) => {
  const router = useRouter();
  const id = router.query.id;
  const walletContext = useWalletContext();
  const currentAccount = walletContext?.currentAccount;
  const { mining,popupSign, handleMint, isMinted } = useWeb3LearnNFTContract({
    currentAccount,
  });
  const [popup, setPopup] = useState<boolean>(false);
  const [popupMessage, setPopupMessage] = useState<string>('');

  const handleSetPopup = useCallback(async (pop: string) => {
    setPopup(true);
    setPopupMessage(pop);
  }, []);

  const handleMingTx = useCallback(async () => {
    if (!currentAccount) return;
    handleMint(content.id, currentAccount, content.title, content.imgUrl);
  }, [content.id, content.imgUrl, content.title, currentAccount, handleMint]);

  const handleOnClick = useCallback(async () => {
    if (!currentAccount) return;
    await handleMingTx().then(() =>
      handleSetPopup(`👍 ${content.title}はMINTされました！`)
    );
  }, [content.title, currentAccount, handleMingTx, handleSetPopup]);
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <Popup
          popup={popup}
          message={popupMessage}
          setPopup={setPopup}
          setMessage={setPopupMessage}
        />
        <Mining mining={mining} />
        <MarketContent
          id={content.id}
          imgUrl={content.imgUrl}
          title={content.title}
          description={content.description}
        />
        {isMinted[content.id - 1] === true ? (
          <>
            <div className='text-2xl text-white bg-amber-400 p-4'>
              Already minted!
            </div>
          </>
        ) : (
          <>
            <div className='mt-12'>
              <Button
                onClick={handleOnClick}
                buttonName='Mint'
                className='bg-green-500 text-white'
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MintContent;
