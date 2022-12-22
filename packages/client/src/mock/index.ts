import { WEB3LEARN_DEMO_TOKEN_CONTRACT_ADDRESS } from '@/constants';
import { Content } from '@/types/content';

export const contentsData: Content[] = [
  {
    id: 1,
    imgUrl:
      'https://cdn.pixabay.com/photo/2017/09/07/10/07/english-2724442_960_720.jpg',
    title: 'Learn English',
    description: '英語がとてもよく話せるようになるよ！',
    amount: 100,
    token: WEB3LEARN_DEMO_TOKEN_CONTRACT_ADDRESS,
    splits: [
      {
        ratio: 9000, // creator
        payee: '0x0fC71c7081989013be332B9737716781859248A6',
      },
      {
        ratio: 1000, // affiliate
        payee: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
      },
    ],
  },
  {
    id: 2,
    imgUrl:
      'https://cdn.pixabay.com/photo/2018/03/22/09/27/english-3249829_960_720.jpg',
    title: 'Learn English2',
    description: '英語がとてもとてもよく話せるようになるよ！',
    amount: 200,
    token: WEB3LEARN_DEMO_TOKEN_CONTRACT_ADDRESS,
    splits: [
      {
        ratio: 9000, // creator
        payee: '0x0fC71c7081989013be332B9737716781859248A6',
      },
      {
        ratio: 1000, // affiliate
        payee: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
      },
    ],
  },
  {
    id: 3,
    imgUrl:
      'https://cdn.pixabay.com/photo/2021/02/24/10/23/teacher-6046103_960_720.jpg',
    title: 'Learn English3',
    description: '英語がとてもとてもよく話せるようになるよ！',
    amount: 300,
    token: WEB3LEARN_DEMO_TOKEN_CONTRACT_ADDRESS,
    splits: [
      {
        ratio: 9000, // creator
        payee: '0x0fC71c7081989013be332B9737716781859248A6',
      },
      {
        ratio: 1000, // affiliate
        payee: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
      },
    ],
  },
];
