import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/Default"
import SpellcheckerPage from "./pages/SpellcheckerPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<SpellcheckerPage />}/>
        <Route path="text-to-speech" element={<span>text-to-speech</span>}/>
        <Route path="speech-to-text" element={<span>speech-to-text</span>}/>
      </Route>
    </Routes>
  );
}

export default App;
