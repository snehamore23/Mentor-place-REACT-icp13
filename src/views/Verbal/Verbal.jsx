import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "../DSA/DSA.css";

const topics = [
  { name: "Grammar",                color: "#58a6ff", note: "Grammar defines sentence rules. Important for correct communication. Helps avoid mistakes. Essential for writing. Key skill." },
  { name: "Reading Comprehension",  color: "#c084fc", note: "Improves understanding of passages. Helps in analysis. Practice increases speed. Important for exams. Enhances reading skills." },
  { name: "Vocabulary",             color: "#ff9f43", note: "Improves word knowledge. Helps in communication. Learn daily words. Important for interviews. Builds confidence." },
  { name: "Sentence Correction",    color: "#00d68f", note: "Focuses on fixing errors. Improves grammar. Practice required. Enhances clarity. Common exam topic." },
];

export default function Verbal({ form, onLogout }) {
  const navigate = useNavigate();
  const [checked, setChecked] = useState({});
  const toggle = (name) => setChecked((p) => ({ ...p, [name]: !p[name] }));

  return (
    <div className="subj-page">
      <Navbar form={form} onLogout={onLogout} onProfileClick={() => navigate("/profile")} />
      <div className="subj-hero">
        <div className="subj-hero-glow" />
        <div className="subj-badge">📝 Verbal</div>
        <h1>Verbal Ability</h1>
        <p>Grammar & communication skills</p>
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
