import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const Dummy = ({ name }) => <h1>{name} Page</h1>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        {/* Temporary pages */}
        <Route path="/upload" element={<Dummy name="Resume Upload" />} />
        <Route path="/preparation" element={<Dummy name="Placement Preparation" />} />
        <Route path="/mock" element={<Dummy name="Mock Interview" />} />
        <Route path="/progress" element={<Dummy name="Progress Tracker" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;