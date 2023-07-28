import { createContext } from "react";
import { DictionaryPair, NewDictionaryPair } from "../types/words";

interface DictionaryContextType {
  dictionaryPairs: DictionaryPair[];
  removeDictionaryPair: (id: string) => void;
  addDictionaryPair: (newDictionaryPair: NewDictionaryPair) => void;
  editDictionaryPair: (id: string, newDictionaryPair: NewDictionaryPair) => void;
}

export const DictionaryContext = createContext<DictionaryContextType>({
  dictionaryPairs: [],
  removeDictionaryPair: () => {},
  addDictionaryPair: () => {},
  editDictionaryPair: () => {},
});
