export const Score = ({ creditScore, prevCreditScore }) => {
  return (
    <h3
      className={` ${
        creditScore < prevCreditScore
          ? "lower-score"
          : `${creditScore === prevCreditScore ? "" : "higher-score"}`
      }
      `}
    >
      {creditScore}
    </h3>
  );
};
