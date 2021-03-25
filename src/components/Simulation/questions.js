// always have 1 options with max allowable to press
export const questions = [
  {
    question: "What is your highest education background?",
    options: [
      {
        answer: "Bachelor’s Degree or equivalent and above ",
        value: 150,
      },
      {
        answer: "Diploma or equivalent ",
        value: 100,
        range: {
          minScore: 0,
          maxScore: 1500,
        },
      },
      {
        answer: "Others",
        value: -50,
        range: {
          minScore: 0,
          maxScore: 1500,
        },
      },
    ],
    skip: 50,
  },
  {
    question:
      "You and your friends are caught in a group of 9 (which is larger than the allowable meeting size), would you:",
    options: [
      {
        answer: "Lie to the officer that there are 2 separate groups",
        value: -30,
      },
      {
        answer: "Accept the fine",
        value: 10,
        wealth: -100,
      },
      {
        answer:
          "Disperse and act as if nothing happened given benefit of doubt from good credit",
        value: 0,
        range: {
          minScore: 800,
          maxScore: 1500,
        },
      },
    ],
    skip: 50,
  },
];
