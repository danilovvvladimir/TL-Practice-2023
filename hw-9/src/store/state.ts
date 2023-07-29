import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { DictionaryPair, NewDictionaryPair } from "../types/words";

interface WordsStore {
  words: DictionaryPair[];
  addDictionaryPair: (newDictionaryPair: NewDictionaryPair) => void;
  removeDictionaryPair: (id: string) => void;
}

export const useWordsStore = create<WordsStore>()(
  persist(
    set => ({
      words: [],
      addDictionaryPair: (newDictionaryPair: NewDictionaryPair) =>
        set(state => ({
          words: [...state.words, { ...newDictionaryPair, id: uuidv4() }],
        })),
      removeDictionaryPair: (id: string) => set(state => ({ words: state.words.filter(word => word.id !== id) })),
    }),
    {
      name: "words-store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
