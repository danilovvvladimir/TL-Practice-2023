import { v4 as uuidv4 } from "uuid";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { DictionaryPair, NewDictionaryPair } from "../types/dictionary";

interface WordsStore {
  words: DictionaryPair[];
  addDictionaryPair: (newDictionaryPair: NewDictionaryPair) => void;
  removeDictionaryPair: (id: string) => void;
  updateDictionaryPair: (id: string, updatedDictionaryPair: NewDictionaryPair) => void;
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
      updateDictionaryPair: (id: string, updatedDictionaryPair: NewDictionaryPair) =>
        set(state => ({
          words: state.words.map(word => {
            if (word.id === id) {
              return { ...word, ...updatedDictionaryPair };
            }
            return word;
          }),
        })),
    }),
    {
      name: "words-store",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
