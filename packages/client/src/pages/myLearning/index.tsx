import React, { useCallback } from 'react';

import { Button, Container, MarketContent } from '@/components/shared';
import { contentsData } from '@/mock';

const MyLearning = () => {
  

  const handleOnClick = useCallback(() => {}, []);
  return (
    <>
      <Container>
        <div className='flex justify-between items-start'>
          {contentsData.map((content, i) => (
            <div key={i} className='flex flex-col justify-center items-center'>
              <MarketContent
                id={content.id}
                imgUrl={content.imgUrl}
                title={content.title}
                description={content.description}
              />
              <div className='mt-12'>
                <Button
                  onClick={handleOnClick}
                  buttonName='Mint'
                  className='bg-green-500 text-white'
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default MyLearning;
