export const isBetween = (score, range) => {
  return score >= range.minScore && score < range.maxScore;
};
