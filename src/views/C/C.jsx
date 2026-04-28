import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "../DSA/DSA.css";

const topics = [
  { name: "Basics",     level: "Easy",   color: "#58a6ff", note: "C is a procedural language. Used for system programming. Provides low-level access. Foundation for other languages. Important for logic building." },
  { name: "Pointers",   level: "Hard",   color: "#ff6b6b", note: "Pointers store memory addresses. Used for dynamic memory. Important for performance. Complex but powerful. Frequently asked." },
  { name: "Functions",  level: "Medium", color: "#c084fc", note: "Functions help in modular programming. Improve code reuse. Defined with return type. Important concept. Used in all programs." },
  { name: "Structures", level: "Medium", color: "#ff9f43", note: "Structures group different data types. Used for complex data. Helps in organization. Important in real applications. Common topic." },
];

export default function C({ form, onLogout }) {
  const navigate = useNavigate();
  const [checked, setChecked] = useState({});
  const toggle = (name) => setChecked((p) => ({ ...p, [name]: !p[name] }));

  return (
    <div className="subj-page">
      <Navbar form={form} onLogout={onLogout} onProfileClick={() => navigate("/profile")} />
      <div className="subj-hero">
        <div className="subj-hero-glow" />
        <div className="subj-badge">💻 C</div>
        <h1>C Programming</h1>
        <p>Basics of C language and logic building</p>
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
