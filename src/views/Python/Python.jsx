import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "../DSA/DSA.css";

const topics = [
  { name: "Basics",     level: "Easy",   color: "#58a6ff", note: "Python is easy to learn language. It has simple syntax. Used in automation and scripting. Supports multiple paradigms. Popular among beginners." },
  { name: "Data Types", level: "Easy",   color: "#10b981", note: "Includes list, tuple, set and dictionary. Used to store data. Mutable and immutable types exist. Important for problem solving. Frequently used." },
  { name: "Functions",  level: "Medium", color: "#c084fc", note: "Functions help reuse code. Defined using def keyword. Can return values. Improves readability. Important concept." },
  { name: "Libraries",  level: "Hard",   color: "#ff9f43", note: "Python has many libraries like NumPy and Pandas. Used in data science. Simplifies tasks. Saves time. Widely used in industry." },
];

export default function Python({ form, onLogout }) {
  const navigate = useNavigate();
  const [checked, setChecked] = useState({});
  const toggle = (name) => setChecked((p) => ({ ...p, [name]: !p[name] }));

  return (
    <div className="subj-page">
      <Navbar form={form} onLogout={onLogout} onProfileClick={() => navigate("/profile")} />
      <div className="subj-hero">
        <div className="subj-hero-glow" />
        <div className="subj-badge">🐍 Python</div>
        <h1>Python Preparation</h1>
        <p>Easy syntax and scripting language</p>
        <div className="subj-hero-stats">
          <span>📚 {topics.length} Topics</span>
          <span>✅ {Object.values(checked).filter(Boolean).length} Done</span>
        </div>
      </div>
      <div className="subj-body">
        {topics.map((t, i) => (
          <div key={i} className={`subj-card ${checked[t.name] ? "subj-card-done" : ""}`}>
            <div className="subj-card-accent" style={{ background: t.color }} />
            <div className="subj-card-top">
              <h3 className="subj-card-title">{t.name}</h3>
              <span className={`subj-level subj-level-${t.level.toLowerCase()}`}>{t.level}</span>
            </div>
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
