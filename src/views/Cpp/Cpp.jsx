import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "../DSA/DSA.css";

const topics = [
  { name: "OOP Concepts", level: "Easy",   color: "#58a6ff", note: "C++ supports object-oriented programming. Includes class and objects. Helps in reusable code. Important for interviews. Core concept." },
  { name: "STL",          level: "Medium", color: "#c084fc", note: "STL provides ready data structures. Includes vector, stack, queue. Saves coding time. Used in competitive programming. Important topic." },
  { name: "Pointers",     level: "Hard",   color: "#ff6b6b", note: "Pointers work similar to C. Used for memory management. Important for performance. Complex but powerful. Frequently asked." },
  { name: "Inheritance",  level: "Medium", color: "#ff9f43", note: "Inheritance allows code reuse. Child class inherits parent. Improves design. Important OOP concept. Common in interviews." },
];

export default function Cpp({ form, onLogout }) {
  const navigate = useNavigate();
  const [checked, setChecked] = useState({});
  const toggle = (name) => setChecked((p) => ({ ...p, [name]: !p[name] }));

  return (
    <div className="subj-page">
      <Navbar form={form} onLogout={onLogout} onProfileClick={() => navigate("/profile")} />
      <div className="subj-hero">
        <div className="subj-hero-glow" />
        <div className="subj-badge">⚙️ C++</div>
        <h1>C++ Preparation</h1>
        <p>Object-oriented programming concepts</p>
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
