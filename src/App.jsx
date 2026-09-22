import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./layouts/Navbar";
import Home from "./pages/Home";
import WorkPage from "./pages/WorkPage";
import TrainexDetail from "./pages/TrainexDetail";
import JaldihireDetail from "./pages/JaldihireDetail";
import VoydDetail from "./pages/VoydDetail";
import BigLeapDetail from "./pages/BigLeapDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/trainex" element={<TrainexDetail />} />
        <Route path="/jaldihire" element={<JaldihireDetail />} />
        <Route path="/voyd" element={<VoydDetail />} />
        <Route path="/bigleap" element={<BigLeapDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
