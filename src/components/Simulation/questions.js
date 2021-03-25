// always have 1 options with max allowable to press
export const questions = [
  {
    question: "What is your highest education background?",
    options: [
      {
        answer: "Bachelor’s Degree or equivalent and above",
        value: 150,
      },
      {
        answer: "Diploma or equivalent",
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
    question: "Have you been convicted or punished for a crime?",
    options: [
      {
        answer: "Yes",
        value: -50,
      },
      {
        answer: "No",
        value: 50,
      },
    ],
    skip: 50,
  },
  {
    question: "Do you believe in any religion?",
    options: [
      {
        answer: "Yes",
        value: -30,
      },
      {
        answer: "No",
        value: 30,
      },
    ],
    skip: 50,
  },
  {
    question:
      "Your close friend brings you to a tattoo parlour and ask for matching tattoos, would you get:",
    options: [
      {
        answer: "Accept the preposition",
        value: -20,
        wealth: -50,
      },
      {
        answer: "Give it some consideration",
        value: -10,
      },
      {
        answer: "Reject them outright",
        value: 10,
      },
    ],
    skip: 50,
  },
  {
    question: "Your friends ask you to meet at the bar for a drink, would you:",
    options: [
      {
        answer: "Meet them for drinks",
        value: -20,
        wealth: -50,
      },
      {
        answer: "Suggest another place",
        value: 0,
        wealth: -30,
      },
      {
        answer: "Reject them outright",
        value: 10,
      },
    ],
    skip: 50,
  },
  {
    question: "You friend offers you a cigarette, would you:",
    options: [
      {
        answer: "Join them for social interaction",
        value: -20,
      },
      {
        answer: "Take just one puff to be polite ",
        value: -20,
      },
      {
        answer: "Just say no",
        value: 0,
      },
    ],
    skip: 50,
  },
  {
    question:
      "Having woke up late and missed breakfast, you are hungry and late for your 2-hour meeting, you brought breakfast from home but can only eat after the meeting, while traveling on the bus would you:",
    options: [
      {
        answer: "Eat your breakfast and hope no one minds",
        value: -30,
      },
      {
        answer: "Drink water to sate your hunger",
        value: -10,
      },
      {
        answer: "Skip breakfast and endure the hunger",
        value: 0,
      },
    ],
    skip: 50,
  },
  {
    question: "You need some cash, and you walk past a casino, do you:",
    options: [
      {
        answer:
          "Go in and hope you get lucky because it is difficult to get loans",
        value: -30,
      },
      {
        answer: "Pay it upfront",
        value: 0,
        wealth: -50,
        range: {
          minScore: 400,
          maxScore: 1500,
        },
      },
      {
        answer: "Wait, my credit score allows me to loans from the bank easily",
        value: 20,
        range: {
          minScore: 800,
          maxScore: 1500,
        },
      },
    ],
    skip: 50,
  },
  {
    question:
      "Your distant relative (who is likely to lower your score) is migrating here. Would you associate with them?",
    options: [
      {
        answer: "Yes, they are family",
        value: -5,
      },
      {
        answer: "No, the score is my priority",
        value: -20,
      },
      {
        answer: "Yes, if their score increase so would mine ",
        value: 10,
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
  {
    question:
      "You are looking for a job, the government requires your skills for a job, would you choose that over a high paying job?",
    options: [
      {
        answer: "Yes, anything to help",
        value: 20,
        wealth: -50,
      },
      {
        answer: "No, someone else can take the job",
        value: -30,
        wealth: -100,
      },
      {
        answer:
          "Yes, but my social credit gives me priority for employment to earn more!",
        value: 30,
        wealth: 100,
        range: {
          minScore: 800,
          maxScore: 1500,
        },
      },
    ],
    skip: 50,
  },
  {
    question:
      "You need to get good peer evaluation for a promotion but, your colleagues at work like to gossip, would you:",
    options: [
      {
        answer: "Step out and report them to your superiors",
        value: 20,
      },
      {
        answer: "Listen and contribute some",
        value: -30,
      },
      {
        answer:
          "Hold on, my credit score allows me fast track promotion at work",
        value: 10,
        range: {
          minScore: 800,
          maxScore: 1500,
        },
      },
    ],
    skip: 50,
  },
  {
    question: "You are at an all-you-can-eat buffet, do you:",
    options: [
      {
        answer: "Order first and figure out how to finish later",
        value: -20,
        wealth: -50,
      },
      {
        answer: "Get the most value for money items",
        value: -10,
        wealth: -20,
      },
      {
        answer: "I never order more than I can finish",
        value: 10,
        wealth: -20,
      },
    ],
    skip: 50,
  },
  {
    question:
      "Based on your latest purchase history, you have a high level of meat intake, are you willing to change your consumption habits?",
    options: [
      {
        answer: "I’ll try my best1",
        value: 10,
      },
      {
        answer: "The government knows what is best",
        value: 30,
      },
      {
        answer: "No way ",
        value: -10,
        wealth: -20,
      },
    ],
    skip: 50,
  },
  {
    question:
      "Would you change your past behaviour based on what would give you a better social credit score?",
    options: [
      {
        answer: "Yes",
        value: 20,
      },
      {
        answer: "No",
        value: -20,
      },
    ],
    skip: 50,
  },
  {
    question: "Have you ever missed a payment on a bill?",
    options: [
      {
        answer: "Nope, I usually pay my bills when I get them ",
        value: 50,
      },
      {
        answer: "Nope, I always pay them on time",
        value: 30,
      },
      {
        answer: "Yes, just for a few days",
        value: -50,
      },
    ],
    skip: 50,
  },
  {
    question: "Would you rather:",
    options: [
      {
        answer: "Eat at a high-end restaurant",
        value: 0,
        wealth: -50,
      },
      {
        answer: "Have any street food",
        value: 10,
        wealth: -10,
      },
    ],
    skip: 50,
  },
  {
    question:
      "You notice that you have declared your tax wrongly for this financial year, do you:",
    options: [
      {
        answer: "Pretend that you didn’t see the error",
        value: -20,
      },
      {
        answer: "Re-declare your taxes",
        value: 10,
        wealth: -40,
      },
      {
        answer: "Wait, my credit score allows for tax breaks!",
        value: 0,
        range: {
          minScore: 800,
          maxScore: 1500,
        },
      },
    ],
    skip: 50,
  },
  {
    question:
      "You see an advertisement where you send 1 book and receive 5 books for free, do you:",
    options: [
      {
        answer: "Send 1 book to the poster and re-post his message",
        value: -20,
      },
      {
        answer: "Report the poster for fraud",
        value: 10,
      },
      {
        answer: "Ignore the advertisement",
        value: -10,
      },
    ],
    skip: 50,
  },
  {
    question:
      "The government is handing unemployment cheque, you are not illegible but found a loophole to apply, would you:",
    options: [
      {
        answer: "Report the loophole to the authorities ",
        value: 20,
      },
      {
        answer: "Take advantage of the system",
        value: -30,
        wealth: 100,
      },
      {
        answer: "Ignore security issues ",
        value: -10,
      },
    ],
    skip: 50,
  },
  {
    question: "Do you believe in any religion?",
    options: [
      {
        answer: "Yes",
        value: -30,
      },
      {
        answer: "No",
        value: 30,
      },
    ],
    skip: 50,
  },
];
