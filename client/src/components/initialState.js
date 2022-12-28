export const question = {
  questionId: 1,
  title: '개발자는 힘들거나 지칠 때 개발개발개발하고 웁니다~~~~~~',
  content:
    '개발자는 힘들거나 지칠 때 개발개발개발ㅅ발개발개발하고 웁니다~~~~~~~~~',
  createdAt: '2022-12-15 15:02:40',
  modifiedAt: '2022-12-27 19:38:40',
  commentCount: 0,
  viewCount: 0,
  tags: ['Java', 'Spring'],
};

export const questions = {
  data: [
    {
      questionId: 3,
      title: '왈와뢀왈왈왈으를르르릉캉캉캉깨개갱',
      content:
        '왈와뢀왈왈왈으를르르릉캉캉캉깨개갱왈와뢀왈왈왈으를르르릉캉캉캉깨개갱',
      createdAt: '2022-12-27 17:39:51',
      modifiedAt: '2022-12-27 17:39:51',
      commentCount: 0,
      viewCount: 0,
      tags: ['DOG Scrpit', 'Doggy'],
    },
    {
      questionId: 2,
      title: 'Spring 개발자에서 Winter 개발자 되는법',
      content: '엌ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ',
      createdAt: '2022-12-27 17:39:48',
      modifiedAt: '2022-12-27 17:39:48',
      commentCount: 0,
      viewCount: 0,
      tags: ['JavaScrpit', 'CSS'],
    },
    {
      questionId: 1,
      title: '개발자는 힘들거나 지칠 때 개발개발개발하고 웁니다~~~~~~',
      content:
        '개발자는 힘들거나 지칠 때 개발개발개발ㅅ발개발개발하고 웁니다~~~~~~~~~',
      createdAt: '2022-12-27 17:39:46',
      modifiedAt: '2022-12-27 17:39:46',
      commentCount: 0,
      viewCount: 0,
      tags: ['Java', 'Spring'],
    },
  ],
  pageInfo: {
    page: 1,
    size: 5,
    totalElements: 3,
    totalPages: 1,
  },
};

export const user = {
  memberId: 1,
  email: '333@gmail.com',
  name: '홍길동동',
  questions: [
    {
      createdAt: '2022-12-27 19:38:40',
      modifiedAt: null,
      questionId: 0,
      image: null,
      title: '개발자는 힘들거나 지칠 때 개발개발개발하고 웁니다~~~~~~',
      content: null,
      totalVote: 0,
      commentCount: 0,
      viewCount: 0,
      questionVoteId: 0,
      tags: null,
      member: null,
    },
    {
      createdAt: '2022-12-27 19:38:42',
      modifiedAt: null,
      questionId: 1,
      image: null,
      title: 'Spring 개발자에서 Winter 개발자 되는법',
      content: null,
      totalVote: 0,
      commentCount: 0,
      viewCount: 0,
      questionVoteId: 0,
      tags: null,
      member: null,
    },
    {
      createdAt: '2022-12-27 19:38:44',
      modifiedAt: null,
      questionId: 2,
      image: null,
      title: '왈와뢀왈왈왈으를르르릉캉캉캉깨개갱',
      content: null,
      totalVote: 0,
      commentCount: 0,
      viewCount: 0,
      questionVoteId: 0,
      tags: null,
      member: null,
    },
  ],
  answers: [
    {
      createdAt: '2022-12-27 19:38:44',
      modifiedAt: null,
      commentId: 2,
      image: null,
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet risus nullam eget felis eget. Id ornare arcu odio ut sem nulla pharetra diam. Leo a diam sollicitudin tempor id eu. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. ',
      totalVote: 0,
      memberId: null,
      adoption: false,
    },
  ],
  comments: null,
  myTitle: 'Hello World!',
  aboutMe:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet risus nullam eget felis eget. Id ornare arcu odio ut sem nulla pharetra diam. Leo a diam sollicitudin tempor id eu. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Ipsum suspendisse ultrices gravida dictum fusce. Amet massa vitae tortor condimentum. In ornare quam viverra orci sagittis eu volutpat odio. Ante metus dictum at tempor commodo. Nec ultrices dui sapien eget. Pharetra et ultrices neque ornare aenean euismod elementum nisi quis. Mi sit amet mauris commodo quis imperdiet massa. Vitae congue mauris rhoncus aenean vel elit. Laoreet suspendisse interdum consectetur libero id.',
  region: null,
  createdAt: '2022-12-27 19:38:37',
};

export const answer = [
  {
    commentId: 1,
    content: '답변입니다.',
    createdAt: '2022-12-27 17:39:46',
    totalVote: 0,
    adoption: false,
    memberId: 0,
  },
  {
    commentId: 1,
    content: '답변입니다.',
    createdAt: '2022-12-27 17:39:46',
    totalVote: 0,
    adoption: true,
    memberId: 1,
  },
];
