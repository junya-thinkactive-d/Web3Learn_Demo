import React from 'react';

import { MintContent } from '@/components/pages/mylearning'
import { Container } from '@/components/shared';
import { contentsData } from '@/mock';


const MyLearning = () => {

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
