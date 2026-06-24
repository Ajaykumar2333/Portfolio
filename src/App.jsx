import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import TrainexDetail from "./pages/TrainexDetail";
import JaldihireDetail from "./pages/JaldihireDetail";
import HRMSDetail from "./pages/HRMSDetail";
import VoydDetail from "./pages/VoydDetail";
import ProjectDetail from "./pages/ProjectDetail";
import BigLeapDetail from "./pages/BigLeapDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainex" element={<TrainexDetail />} />
        <Route path="/jaldihire" element={<JaldihireDetail />} />
        <Route path="/hrms" element={<HRMSDetail />} />
        <Route path="/voyd" element={<VoydDetail />} />
        <Route path="/bigleap" element={<BigLeapDetail />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;