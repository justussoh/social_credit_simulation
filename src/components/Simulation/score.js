export const Score = ({ creditScore, prevCreditScore }) => {
  return (
    <code
      className={` ${
        creditScore < prevCreditScore
          ? "lower-score"
          : `${creditScore === prevCreditScore ? "" : "higher-score"}`
      }
      `}
    >
      {creditScore}
    </code>
  );
};
