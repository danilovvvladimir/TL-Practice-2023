export const roundNumber = (number: number, digitsAfterDot: number) => {
  const helperNumber = Math.pow(10, digitsAfterDot);
  return Math.round(number * helperNumber) / helperNumber;
};
