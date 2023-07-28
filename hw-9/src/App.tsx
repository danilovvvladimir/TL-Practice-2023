import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import DictionaryPage from "./pages/DictionaryPage/DictionaryPage";
import { DictionaryPair, NewDictionaryPair } from "./types/words";
import { DictionaryContext } from "./context/context";
import { v4 as uuidv4 } from "uuid";
import { ThemeProvider } from "@mui/material/styles";
import { THEME } from "./constants/theme";
import AddWordPage from "./pages/AddWordPage/AddWordPage";
import EditWordPage from "./pages/EditWordPage/EditWordPage";

function App() {
  const [dictionaryPairs, setDictionaryPairs] = useState<DictionaryPair[]>([]);

  const removeDictionaryPair = (id: string) => {
    setDictionaryPairs(dictionaryPairs.filter(dp => dp.id !== id));
  };

  const addDictionaryPair = (newDictionaryPair: NewDictionaryPair) => {
    setDictionaryPairs([...dictionaryPairs, { ...newDictionaryPair, id: uuidv4() }]);
  };

  const editDictionaryPair = (id: string, newDictionaryPair: NewDictionaryPair) => {
    setDictionaryPairs(
      dictionaryPairs.map(dp => {
        if (dp.id === id) {
          return { ...newDictionaryPair, id: uuidv4() };
        } else {
          return dp;
        }
      }),
    );
  };

  return (
    <ThemeProvider theme={THEME}>
      <DictionaryContext.Provider
        value={{ dictionaryPairs, addDictionaryPair, removeDictionaryPair, editDictionaryPair }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
          <Route path="/dictionary/add-word" element={<AddWordPage />} />
          <Route path="/dictionary/edit-word" element={<EditWordPage />} />
        </Routes>
      </DictionaryContext.Provider>
    </ThemeProvider>
  );
}

export default App;

