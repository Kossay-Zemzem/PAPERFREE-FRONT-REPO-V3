import './App.css' 
import { Routes, Route } from "react-router-dom";

import CIN from "./Pages/CIN.jsx";
import CertResid from "./Pages/CertResid.jsx";
import Pass from "./Pages/Pass.jsx";
import Home from "./Pages/Home.jsx";
import Results from "./Pages/Results.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/CIN" element={<CIN />} />
      <Route path="/CertResid" element={<CertResid />} />
      <Route path="/Pass" element={<Pass />} />
      <Route path="/Results" element={<Results />} />
    </Routes>
  );
}
export default App ;