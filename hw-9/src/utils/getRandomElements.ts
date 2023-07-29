import { DictionaryPair } from "../types/words";

export const getRandomElements = (array: DictionaryPair[], correctWord: string, numElements: number): string[] => {
  if (numElements >= array.length) {
    return array.map(dp => dp.englishWord);
  }

  const shuffledArray = array.slice();
  const result: string[] = [];

  while (result.length < numElements) {
    const randomIndex = Math.floor(Math.random() * shuffledArray.length);
    const [selectedElement] = shuffledArray.splice(randomIndex, 1);
    if (selectedElement.englishWord !== correctWord) {
      result.push(selectedElement.englishWord);
    }
  }

  return result;
};
