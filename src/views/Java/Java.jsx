import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "../DSA/DSA.css";

const topics = [
  { name: "OOP Concepts",       level: "Easy",   color: "#58a6ff", note: "Java is based on object-oriented programming. It uses concepts like class, object, inheritance and polymorphism. Helps in code reusability. Makes code modular and maintainable. Important for interviews." },
  { name: "JVM & JRE",          level: "Medium", color: "#c084fc", note: "Java runs on JVM which makes it platform independent. JRE provides runtime environment. Bytecode is executed by JVM. Helps in write once run anywhere concept. Core Java concept." },
  { name: "Exception Handling", level: "Medium", color: "#ff9f43", note: "Used to handle runtime errors. Uses try, catch, finally blocks. Prevents program crash. Improves reliability. Important in real-world apps." },
  { name: "Collections",        level: "Hard",   color: "#ff6b6b", note: "Java collections store group of objects. Includes List, Set and Map. Provides dynamic data structures. Useful in real-world applications. Frequently asked." },
];

export default function Java({ form, onLogout }) {
  const navigate = useNavigate();
  const [checked, setChecked] = useState({});
  const toggle = (name) => setChecked((p) => ({ ...p, [name]: !p[name] }));

  return (
    <div className="subj-page">
      <Navbar form={form} onLogout={onLogout} onProfileClick={() => navigate("/profile")} />
      <div className="subj-hero">
        <div className="subj-hero-glow" />
        <div className="subj-badge">☕ Java</div>
        <h1>Java Preparation</h1>
        <p>Core Java and OOP concepts</p>
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
