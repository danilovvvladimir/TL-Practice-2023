import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import HomePage from "./pages/HomePage/HomePage";
import QuizPage from "./pages/QuizPage/QuizPage";
import DictionaryPage from "./pages/DictionaryPage/DictionaryPage";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/dictionary" element={<DictionaryPage />} />
      </Route>
    </Routes>
  );
}

export default App;

