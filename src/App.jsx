import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Tutors from "./pages/Tutors";

import Faq from "./pages/Faq";
import GradeReport from "./pages/GradeReport";
import MissingContent from "./components/MissingContent";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="/tutors" element={<Tutors />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="gradereport" element={<GradeReport />} />
        <Route path="missinggrade" element={<MissingContent />} />
        <Route path="faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
