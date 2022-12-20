import React, { useCallback, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { Button, Container, MarketContent, Mining } from '@/components/shared';
import { useWeb3LearnContract } from '@/hooks/contracts/useWeb3Learn';
import { contentsData } from '@/mock';
import { Content } from '@/types/content';

const LearnContents = () => {
  const { handleBuy, mining } = useWeb3LearnContract({});

  const [content, setContent] = useState<Content>({
    id: 0,
    imgUrl: '',
    title: '',
    description: '',
    amount: 0,
    token: '',
    splits: [],
  });
  const router = useRouter();
  const id = router.query.id;
  const searchContents = useCallback(() => {
    contentsData.map((content) => {
      if (content.id.toString() === id) {
        setContent(content);
      }
    });
  }, [id]);

  const handleOnClick = useCallback(() => {
    handleBuy(content.amount, content.token, content.splits);
  }, [content.amount, content.splits, content.token, handleBuy]);

  const tokenName =
    content.token === '0x35d831F79e54f6b7ABD3D324822DE9084f00E27B' ? 'L3' : '';

  useEffect(() => {
    searchContents();
  }, [searchContents]);
  return (
    <>
      <Container>
        <Mining mining={mining} />
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
            <Button
              onClick={handleOnClick}
              buttonName='Buy'
              className='bg-pink-600 text-white'
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default LearnContents;
