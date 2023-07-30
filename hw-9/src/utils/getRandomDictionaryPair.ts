import { DictionaryPair } from "../types/dictionary";
import { getRandomArrayIndex } from "./getRandomArrayIndex";

export const getRandomDictionaryPair = (
  array: DictionaryPair[],
  correctWord: string,
  numElements: number,
): string[] => {
  if (numElements >= array.length) {
    return array.map(dp => dp.englishWord);
  }

  const shuffledArray = array.slice();
  const result: string[] = [];

  while (result.length < numElements) {
    const randomIndex = getRandomArrayIndex(shuffledArray);
    const [selectedElement] = shuffledArray.splice(randomIndex, 1);

    if (selectedElement.englishWord !== correctWord) {
      result.push(selectedElement.englishWord);
    }
  }

  return result;
};
