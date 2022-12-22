import React, { useCallback, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { Button, Container, MarketContent, Mining } from '@/components/shared';
import {
  WEB3LEARN_CONTRACT_ADDRESS,
  WEB3LEARN_DEMO_TOKEN_CONTRACT_ADDRESS,
} from '@/constants';
import { useWalletContext } from '@/context';
import { useWeb3LearnContract, useWeb3LearnDemoToken } from '@/hooks/contracts';
import { contentsData } from '@/mock';
import { Content } from '@/types/content';

// @check useHookにおける状態変更でリロードされない
const LearnContents = () => {
  const router = useRouter();
  const id = router.query.id;
  const walletContext = useWalletContext();
  const userAddress = walletContext?.currentAccount;
  const contractAddress = WEB3LEARN_CONTRACT_ADDRESS;
  const { mining, handleBuy, buyList } = useWeb3LearnContract({ userAddress });
  const { tokenMining, handleApprove, isAllowance } = useWeb3LearnDemoToken({
    userAddress,
    contractAddress,
  });

  const [content, setContent] = useState<Content>({
    id: 0,
    imgUrl: '',
    title: '',
    description: '',
    amount: 0,
    token: '',
    splits: [],
  });
  const [isBought, setIsBought] = useState<boolean>(false);
  const searchContents = useCallback(() => {
    contentsData.map((content) => {
      if (content.id.toString() === id) {
        setContent(content);
      }
    });
  }, [id]);

  const handleApproveOnClick = useCallback(() => {
    handleApprove(WEB3LEARN_CONTRACT_ADDRESS);
  }, [handleApprove]);

  const handleBuyOnClick = useCallback(() => {
    handleBuy(content.amount, content.id, content.token, content.splits);
  }, [content.amount, content.id, content.splits, content.token, handleBuy]);

  const tokenName =
    content.token === WEB3LEARN_DEMO_TOKEN_CONTRACT_ADDRESS ? 'DEMO TOKEN' : '';

  const isBuy = useCallback(async () => {
    buyList.map((buyId) => {
      if (buyId === content.id) {
        setIsBought(true);
        return;
      }
    });
  }, [buyList, content.id]);

  useEffect(() => {
    searchContents();
    isBuy();
  }, [searchContents, isAllowance, isBuy]);

  return (
    <>
      <Container>
        <Mining mining={mining} />
        <Mining mining={tokenMining} />
        <div className='flex flex-col justify-center items-center'>
          <div className='flex justify-center items-center'>
            <MarketContent
              id={content.id}
              imgUrl={content.imgUrl}
              title={content.title}
              description={content.description}
            />
            <div className='w-96 h-96 p-4 bg-stone-800 text-white'>
              <div className='text-2xl font-bold'>Product Details</div>
              <div className='p-4'>
                <div className='flex justify-start items-center'>
                  <div>ProductID:</div>
                  <div className='ml-2'>{content.id}</div>
                </div>
                <div className='flex justify-start items-center'>
                  <div>Price:</div>
                  <div className='ml-2'>{content.amount}</div>
                </div>
                <div className='flex justify-start items-center'>
                  <div>Token Name:</div>
                  <div className='ml-2'>{tokenName}</div>
                </div>
                <div>
                  <div>Splits:</div>

                  {content.splits.map((split, i) => (
                    <div key={i} className='text-xs ml-4'>
                      <div>Payee: {split.payee}</div>
                      <div>Ratio: {split.ratio / 100}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className='mt-10'>
            {isBought ? (
              <>
                <div className='text-2xl text-white bg-amber-400 p-4'>Already purchased!</div>
              </>
            ) : isAllowance ? (
              <Button
                onClick={handleBuyOnClick}
                buttonName='Buy'
                className='bg-pink-600 text-white'
              />
            ) : (
              <Button
                onClick={handleApproveOnClick}
                buttonName='Approve'
                className='bg-blue-600 text-white'
              />
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default LearnContents;
