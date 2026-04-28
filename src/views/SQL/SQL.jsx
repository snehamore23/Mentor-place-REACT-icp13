import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "../DSA/DSA.css";

const topics = [
  { name: "Basic Queries",  level: "Easy",   color: "#58a6ff", note: "SQL is used to interact with database. SELECT is used to fetch data. WHERE filters records. Basic queries are foundation. Important for beginners." },
  { name: "Joins",          level: "Medium", color: "#c084fc", note: "Joins combine multiple tables. Types include INNER, LEFT, RIGHT. Helps in relational data. Important in real projects. Frequently asked." },
  { name: "Normalization",  level: "Medium", color: "#ff9f43", note: "Normalization reduces data redundancy. Improves database design. Uses normal forms. Important for data integrity. Used in DBMS." },
  { name: "Indexes",        level: "Hard",   color: "#ff6b6b", note: "Indexes improve query performance. Faster data retrieval. Used in large databases. Important for optimization. Advanced concept." },
];

export default function SQL({ form, onLogout }) {
  const navigate = useNavigate();
  const [checked, setChecked] = useState({});
  const toggle = (name) => setChecked((p) => ({ ...p, [name]: !p[name] }));

  return (
    <div className="subj-page">
      <Navbar form={form} onLogout={onLogout} onProfileClick={() => navigate("/profile")} />
      <div className="subj-hero">
        <div className="subj-hero-glow" />
        <div className="subj-badge">🗄️ SQL</div>
        <h1>SQL Preparation</h1>
        <p>Database queries and data management</p>
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
