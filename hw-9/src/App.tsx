import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import DictionaryPage from "./pages/DictionaryPage/DictionaryPage";
import { ThemeProvider } from "@mui/material/styles";
import { THEME } from "./constants/theme";
import AddWordPage from "./pages/AddWordPage/AddWordPage";
import EditWordPage from "./pages/EditWordPage/EditWordPage";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/dictionary" element={<DictionaryPage />} />
        <Route path="/dictionary/add-word" element={<AddWordPage />} />
        <Route path="/dictionary/edit-word/:id" element={<EditWordPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

