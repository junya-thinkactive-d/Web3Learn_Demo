import React from 'react';

import { Container } from '@/components/shared';
import { LinkMarketContent } from '@/components/shared';
import { contentsData } from '@/mock/index';

const Market = () => {
  return (
    <>
      <Container>
        <div className='flex justify-between items-start'>
          {contentsData.map((content,i) => (
            <LinkMarketContent
              key={i}
              pageName='learnContents'
              id={content.id}
              imgUrl={content.imgUrl}
              title={content.title}
              description={content.description}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Market;
