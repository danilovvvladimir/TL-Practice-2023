export const getRandomArrayIndex = <T>(array: T[]): number => {
  return Math.round(Math.random() * (array.length - 1));
};
