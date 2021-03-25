export const Score = ({
  creditScore,
  prevCreditScore,
  wealthScore,
  prevWealthScore,
}) => {
  return (
    <code>
      <span
        className={` ${
          creditScore < prevCreditScore
            ? "lower-score"
            : `${creditScore === prevCreditScore ? "" : "higher-score"}`
        }
      `}
      >
        {creditScore}
      </span>{" "}
      <span
        className={` ${
          wealthScore < prevWealthScore
            ? "lower-score"
            : `${wealthScore === prevWealthScore ? "" : "higher-score"}`
        }
      `}
      >
        {wealthScore > 0 ? "" : "-"}${Math.abs(wealthScore)}
      </span>
    </code>
  );
};
