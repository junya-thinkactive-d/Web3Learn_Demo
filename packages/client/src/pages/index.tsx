import { LinkMarketContent } from '@/components/shared';
import { Container } from '@/components/shared';
import { contentsData } from '@/mock';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <div className='flex justify-between items-start'>
          {contentsData.map((content,i) => (
            <LinkMarketContent
              key={i}
              pageName='market'
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

export default Home;
