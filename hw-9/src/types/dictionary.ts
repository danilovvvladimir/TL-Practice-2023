export interface DictionaryPair {
  englishWord: string;
  russianWord: string;
  id: string;
}

export interface NewDictionaryPair extends Omit<DictionaryPair, "id"> {}
