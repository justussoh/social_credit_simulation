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
    question: "You need to get a house, but the wait time is 7 years, do you:",
    options: [
      {
        answer: "Pay more to get the house now",
        value: 0,
        wealth: -100,
      },
      {
        answer: "Rent a place",
        value: -10,
        wealth: -20,
      },
      {
        answer: "My social credit let me jumps the queue for public housing",
        value: 10,
        wealth: -50,
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
      "You need to make a big down payment for a house, but you don’t have enough cash, do you:",
    options: [
      {
        answer: "Make a late payment, it is difficult to get loans",
        value: -30,
        wealth: -50,
      },
      {
        answer: "Loan from a relative",
        value: -10,
        wealth: -20,
        range: {
          minScore: 400,
          maxScore: 1500,
        },
      },
      {
        answer: "Wait, my credit score allows me to loans from the bank easily",
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
    question: "Would you accept military service if it was requested of you?",
    options: [
      {
        answer: "Yes",
        value: 50,
      },
      {
        answer: "No",
        value: -30,
      },
    ],
    skip: 50,
  },
  {
    question: "Have you ever donated your blood to the blood bank?",
    options: [
      {
        answer: "Yes",
        value: 50,
      },
      {
        answer: "No",
        value: -30,
      },
    ],
    skip: 50,
  },
  {
    question: "You are new to the neighborhood, do you:",
    options: [
      {
        answer: "Introduce yourself to the neighbors",
        value: 10,
      },
      {
        answer: "Move in quietly",
        value: 0,
      },
      {
        answer: "Get your neighbor moving in gifts",
        value: 20,
        wealth: -30,
      },
    ],
    skip: 50,
  },
  {
    question:
      "Your neighbor's potted plants obstruct the way along the pavement, do you:",
    options: [
      {
        answer: "Ignore it and give your neighbors slack",
        value: -20,
      },
      {
        answer: "Report them to the relevant channel",
        value: 10,
      },
    ],
    skip: 50,
  },
  {
    question:
      "Your dog just pooped at the void deck and you forgot to being a bag, would you:",
    options: [
      {
        answer: "Pick it up and dispose of it",
        value: 10,
      },
      {
        answer: "Come back later",
        value: -10,
      },
      {
        answer: "Ignore and hope no one finds out",
        value: -20,
      },
    ],
    skip: 50,
  },
  {
    question: "You urgently need to use the restroom, would you:",
    options: [
      {
        answer: "Jump the queue",
        value: -20,
      },
      {
        answer: "Drop a $50 note and run into the restroom amidst the chaos",
        value: 0,
        wealth: -50,
      },
    ],
    skip: 50,
  },

  {
    question:
      "You are occupying a seat on the bus when an elderly person gets in:",
    options: [
      {
        answer:
          "Wait for someone to get up first and offer seat if no one does",
        value: -10,
      },
      {
        answer: "Get up immediately",
        value: 10,
      },
      {
        answer: "Pretend you haven’t noticed",
        value: -20,
      },
    ],
    skip: 50,
  },
  {
    question: "You see a student on flag day do you:",
    options: [
      {
        answer: "Avoid them at all cost",
        value: -10,
      },
      {
        answer: "Give smallest amount you have",
        value: 10,
        wealth: -20,
      },
      {
        answer: "Give all you can afford",
        value: 20,
        wealth: -50,
      },
    ],
    skip: 50,
  },
  {
    question: "You make a new year resolution to be fitter this year, do you:",
    options: [
      {
        answer:
          "You have been denied access to the facility, try again next year",
        value: -20,
      },
      {
        answer: "Pay for a gym membership",
        value: 10,
        wealth: -50,
        range: {
          minScore: 400,
          maxScore: 1500,
        },
      },
      {
        answer: "My credit score allows me to get free gym facilities",
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
    question: "Do you play games?",
    options: [
      {
        answer: "Yes, whenever I am free",
        value: 0,
      },
      {
        answer: "Yes, all the time",
        value: -10,
      },
      {
        answer: "No, I don’t really have time for that",
        value: 10,
        goto: 34,
      },
    ],
    skip: 50,
  },
  {
    question: "On the average, how many games do you purchase a year?",
    options: [
      {
        answer: "1 – 5",
        value: 0,
      },
      {
        answer: "6 – 10",
        value: -10,
      },
      {
        answer: "11 and above",
        value: -20,
      },
    ],
    skip: 50,
  },
  {
    question: "Do you try to find loopholes within the rules?",
    options: [
      {
        answer: "Yes, no harm trying",
        value: -10,
      },
      {
        answer: "Yes, there is always a way around it",
        value: -20,
      },
      {
        answer: "No, never thought of it",
        value: 20,
      },
    ],
    skip: 50,
  },
  {
    question: "Do you consume digital media like TV, films, or Baidu?",
    options: [
      {
        answer: "Yes, whenever I am free ",
        value: 0,
      },
      {
        answer: "Yes, all the time",
        value: -10,
      },
      {
        answer: "No, I don’t really have time for that",
        value: 10,
        goto: 37,
      },
    ],
    skip: 50,
  },
  {
    question:
      "You enjoy a show that depict the government in a bad way, would continue watching it after finding out?",
    options: [
      {
        answer: "Yes",
        value: -20,
      },
      {
        answer: "No",
        value: 10,
      },
    ],
    skip: 50,
  },
  {
    question: "How often do you visit the cinemas?",
    options: [
      {
        answer: "Never, I can find shows online for free",
        value: -20,
      },
      {
        answer: "Very often, I love the movies",
        value: 0,
      },
      {
        answer: "Occasional, when a good show is out",
        value: 0,
      },
    ],
    skip: 50,
  },
  {
    question: "How often do you volunteer to help the needy?",
    options: [
      {
        answer: "Bi-Weekly when I have the time",
        value: 50,
      },
      {
        answer: "When my work organizes an event",
        value: 20,
      },
      {
        answer: "That not my kind of thing, I don’t really have time for that",
        value: -20,
        goto: 40,
      },
    ],
    skip: 50,
  },
  {
    question:
      "The orphanage you are volunteering is calling for donations, do you:",
    options: [
      {
        answer: "Ignore and pretend that nothing happened",
        value: -10,
      },
      {
        answer: "Donate $50 to the cause",
        value: 20,
        wealth: -50,
      },
    ],
    skip: 50,
  },
  {
    question:
      "While volunteering, a less privileged person asked to link with you on the social credit system, do you:",
    options: [
      {
        answer: "Politely decline",
        value: -20,
      },
      {
        answer: "Distract then with a red packet ",
        value: 0,
        wealth: -50,
      },
      {
        answer: "Accept the request ",
        value: -10,
      },
    ],
    skip: 50,
  },
  {
    question: "Do you use Social Media?",
    options: [
      {
        answer: "Yes, whenever I am free ",
        value: 0,
      },
      {
        answer: "Yes, all the time",
        value: -10,
      },
      {
        answer: "No, I don’t really have time for that",
        value: 10,
      },
    ],
    skip: 50,
  },
  {
    question:
      "You have just encountered 3 train breakdowns in a row on your way home from work. What do you do?",
    options: [
      {
        answer: "Complaint on social media",
        value: -20,
      },
      {
        answer: "Complain to your close friends",
        value: -20,
      },
      {
        answer: "Accept and move on with life",
        value: 0,
      },
    ],
    skip: 50,
  },
  {
    question:
      "You read an article online speculating about a possible infectious disease, do you:",
    options: [
      {
        answer: "Share it with friends and family",
        value: -20,
      },
      {
        answer: "Keep the news to yourself and verify the source",
        value: 10,
      },
    ],
    skip: 50,
  },
  {
    question:
      "You're going to be late for your lunch date, you accidentally kicked an empty plastic bottle that was already on the floor, do you:",
    options: [
      {
        answer: "Pretend you didn’t see it and continue walking",
        value: -10,
      },
      {
        answer: "Pick it up and  only throw it in a recycle bin",
        value: 15,
      },
      {
        answer: "Pick it up and throw it away at the nearest bin",
        value: 10,
      },
    ],
    skip: 50,
  },
  {
    question: "What appears frequently on your social media feed?",
    options: [
      {
        answer: "Parties",
        value: -10,
      },
      {
        answer: "Family and friends",
        value: 10,
      },
      {
        answer: "Rants",
        value: -5,
      },
    ],
    skip: 50,
  },
  {
    question:
      "Your social media shows that it has been access during work hours, do you:",
    options: [
      {
        answer:
          "Pay for the consequence and promise not to do it in the future",
        value: -10,
      },
      {
        answer:
          "Lie and say you were speaking to your ill mother who is at home",
        value: -20,
      },
    ],
    skip: 50,
  },
  {
    question:
      "You see that a friend posted a complaint regarding the incompetency of the government, do you:",
    options: [
      {
        answer: "Pretend that nothing happened",
        value: -10,
      },
      {
        answer: "Make them to take down the post",
        value: -5,
      },
      {
        answer: "Report and unfriend the person",
        value: 10,
      },
    ],
    skip: 50,
  },
  {
    question: "How often do you visit your parents?",
    options: [
      {
        answer: "They stay with me",
        value: 50,
      },
      {
        answer: "I lost contact with my parents",
        value: -30,
      },
      {
        answer: "I make it an effort to have dinner with them daily",
        value: 30,
      },
    ],
    skip: 50,
  },
  {
    question: "You get in an argument with your parents, would you: ",
    options: [
      {
        answer: "Try to get back on friendly basis",
        value: 10,
      },
      {
        answer: "Tell them they are going to regret and prolong",
        value: -10,
      },
      {
        answer: "Cast black look at suitable moments",
        value: -20,
      },
    ],
    skip: 50,
  },
  {
    question:
      "Your parents ask you to run errands, but you do not want to, do you:",
    options: [
      {
        answer: "Say no",
        value: -10,
      },
      {
        answer: "Say yes",
        value: 10,
      },
      {
        answer: "Get back at them buy intentionally getting something else",
        value: -20,
      },
    ],
    skip: 50,
  },
  {
    question: "Your mother is ill, do you:",
    options: [
      {
        answer:
          "Carry on with your own life and leave it to the rest of the fam",
        value: -20,
      },
      {
        answer: "Cope and hope she will get better soon",
        value: 10,
        wealth: -50,
      },
      {
        answer:
          "Wait, my credit score allows me to get shorter wait times at the clinic for my mother!",
        value: 30,
        wealth: -50,
        range: {
          minScore: 800,
          maxScore: 1500,
        },
      },
    ],
    skip: 50,
  },
  {
    question: "You parents are asking for a retirement allowance, do you:",
    options: [
      {
        answer: "Lie to them on how much you earn",
        value: -20,
        wealth: -50,
      },
      {
        answer: "Oblige without resentment",
        value: 10,
        wealth: -100,
      },
      {
        answer: "Tell them no",
        value: -10,
      },
    ],
    skip: 50,
  },
  {
    question:
      "Your brother asked you for a loan to start a local business, would you: ",
    options: [
      {
        answer: "Tell him that you cannot help",
        value: -10,
      },
      {
        answer: "Give him a sum of money",
        value: 10,
        wealth: -50,
      },
      {
        answer: "Loan him a sum of money but charge a high interest rate",
        value: -5,
        wealth: -30,
      },
    ],
    skip: 50,
  },
  {
    question: "You need to enrol your child for public schooling, do you:",
    options: [
      {
        answer: "Donate more money for a higher chance to get in",
        value: 20,
        wealth: -50,
        range: {
          minScore: 400,
          maxScore: 1500,
        },
      },
      {
        answer: "You are illegible for public schooling!",
        value: 0,
      },
      {
        answer: "Oh, my credit score gives me priority in school admission!",
        value: 20,
        wealth: -20,
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
      "You have been busy at work and neglected your role as a parent, your children want to spend time with you, do you:",
    options: [
      {
        answer: "Tell them that you are busy",
        value: -20,
      },
      {
        answer: "Spend time with them",
        value: 20,
      },
      {
        answer: "Give them money to get something they want",
        value: 0,
        wealth: -20,
      },
    ],
    skip: 50,
  },
  {
    question:
      "Your children got into a fight at school for defending your nationality as Singaporeans, do you:",
    options: [
      {
        answer: "Teach your child to tell a white lie",
        value: -30,
      },
      {
        answer: "Tell the teachers that your child was right",
        value: -20,
      },
      {
        answer:
          "Give the teacher a red packet and hope that they keep the matter private",
        value: -5,
        wealth: -50,
      },
    ],
    skip: 50,
  },
  {
    question:
      "You see an elderly lady trying to cross the road but there are no traffic lights in sight, would you help her cross the road?",
    options: [
      {
        answer: "Yes, after check that there are no cars",
        value: 20,
      },
      {
        answer: "No, I would leave her alone",
        value: -10,
      },
      {
        answer: "No, I would tell her that crossing there is illegal",
        value: -20,
      },
    ],
    skip: 50,
  },
  {
    question:
      "You are at a party and you had a tiny bit alcohol due to peer pressure, would you continue to drive home?",
    options: [
      {
        answer: "Yes, I have never been caught by the traffic police anyway",
        value: -10,
      },
      {
        answer:
          "No, Ill pay the overnight fees and come back for my car the next day",
        value: 10,
        wealth: -20,
      },
      {
        answer:
          "No, Ill take the public transport, my credit score allows for cheaper transportation fees",
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
      "It has been a long day and you are dying to get home, but the speed limit on the highway suggest you drive at 70km/hr, do you:",
    options: [
      {
        answer:
          "Travel faster than the speed limit as it would be difficult to get found out",
        value: -10,
      },
      {
        answer: "Keep to the speed limit",
        value: 10,
      },
    ],
    skip: 50,
  },
  {
    question: "You receive an urgent text from work while driving, do you:",
    options: [
      {
        answer: "Pull over and text",
        value: 0,
      },
      {
        answer: "Reply while driving",
        value: -20,
      },
      {
        answer: "Ignore the text and deal with it later",
        value: 10,
      },
    ],
    skip: 50,
  },
  {
    question:
      "You are rushing for an important deal, but you missed your turn, and you know that the next U-turn is 3 minutes away, do you:",
    options: [
      {
        answer: "Make an illegal U-turn",
        value: -10,
      },
      {
        answer: "Do the right thing but be late and lose the deal",
        value: 10,
        wealth: -50,
      },
    ],
    skip: 50,
  },
  {
    question: "When you see an amber light, do you:",
    options: [
      {
        answer: "Step on the gas",
        value: -5,
      },
      {
        answer: "Slow down and prepare to stop",
        value: 10,
      },
    ],
    skip: 50,
  },
  {
    question:
      "You are driving a grab and the  passenger offers to tip you to stop in front of the building, which is illegal, do you:",
    options: [
      {
        answer: "Receive the bad review",
        value: -10,
      },
      {
        answer: "Make the illegal stop",
        value: -20,
      },
    ],
    skip: 50,
  },
];
