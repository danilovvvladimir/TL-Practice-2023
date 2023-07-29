export const capitalizeWord = (word: string): string => {
  if (word.length === 0) {
    return word;
  }

  const firstLetter = word[0].toUpperCase();
  const restOfWord = word.slice(1).toLowerCase();

  return firstLetter + restOfWord;
};
