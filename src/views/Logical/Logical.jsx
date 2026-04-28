import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "../DSA/DSA.css";

const topics = [
  { name: "Puzzles",             color: "#58a6ff", note: "Puzzles improve logical thinking. Require arrangement of data. Helps in reasoning. Practice improves speed. Common in exams." },
  { name: "Seating Arrangement", color: "#c084fc", note: "Involves placing people logically. Uses diagrams. Improves clarity. Requires attention. Frequently asked." },
  { name: "Coding-Decoding",     color: "#ff6b6b", note: "Based on pattern recognition. Uses letters and numbers. Improves analytical skills. Practice needed. Important topic." },
  { name: "Blood Relations",     color: "#ff9f43", note: "Based on family relations. Requires understanding relationships. Diagrams help solving. Improves logic. Common topic." },
];

export default function Logical({ form, onLogout }) {
  const navigate = useNavigate();
  const [checked, setChecked] = useState({});
  const toggle = (name) => setChecked((p) => ({ ...p, [name]: !p[name] }));

  return (
    <div className="subj-page">
      <Navbar form={form} onLogout={onLogout} onProfileClick={() => navigate("/profile")} />
      <div className="subj-hero">
        <div className="subj-hero-glow" />
        <div className="subj-badge">🧩 Logical</div>
        <h1>Logical Reasoning</h1>
        <p>Puzzles & problem solving skills</p>
        <div className="subj-hero-stats">
          <span>📚 {topics.length} Topics</span>
          <span>✅ {Object.values(checked).filter(Boolean).length} Done</span>
        </div>
      </div>
      <div className="subj-body">
        {topics.map((t, i) => (
          <div key={i} className={`subj-card ${checked[t.name] ? "subj-card-done" : ""}`}>
            <div className="subj-card-accent" style={{ background: t.color }} />
            <div className="subj-card-top"><h3 className="subj-card-title">{t.name}</h3></div>
            <p className="subj-card-note">{t.note}</p>
            <label className="subj-check">
              <input type="checkbox" checked={!!checked[t.name]} onChange={() => toggle(t.name)} />
              <span>{checked[t.name] ? "✅ Completed" : "Mark as Done"}</span>
            </label>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
