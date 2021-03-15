export const questions = [
  {
    question: "test1",
    options: [
      {
        answer: "answer 1",
        value: 100,
        range: {
          minScore: 0,
          maxScore: 100,
        },
      },
      {
        answer: "answer 2",
        value: -50,
        range: {
          minScore: 0,
          maxScore: 100,
        },
      },
    ],
    skip: 10,
  },
  {
    question: "test2",
    options: [
      {
        answer: "answer 1",
        value: 100,
        range: {
          minScore: 100,
          maxScore: 200,
        },
      },
      {
        answer: "answer 2",
        value: -50,
        range: {
          minScore: 0,
          maxScore: 100,
        },
      },
    ],
    skip: 10,
  },
  {
    question: "test3",
    options: [
      {
        answer: "answer 1",
        value: 100,
        range: {
          minScore: 0,
          maxScore: 100,
        },
      },
      {
        answer: "answer 2",
        value: -50,
        range: {
          minScore: 0,
          maxScore: 100,
        },
      },
    ],
    skip: 0,
  },
];
