import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "../DSA/DSA.css";

const topics = [
  { name: "Number System",  color: "#58a6ff", note: "Number system includes integers and fractions. Helps in divisibility and remainders. Important for basic calculations. Used in many problems. Foundation of aptitude." },
  { name: "Percentage",     color: "#c084fc", note: "Percentage expresses value per 100. Used in profit and loss. Helps in comparison. Shortcut methods improve speed. Common exam topic." },
  { name: "Profit & Loss",  color: "#ff6b6b", note: "Deals with cost price and selling price. Calculates profit or loss. Important for business problems. Uses formulas. Frequently asked in exams." },
  { name: "Time & Work",    color: "#ff9f43", note: "Focuses on work efficiency. Calculates time taken. Includes combined work problems. Improves logic. Important topic." },
  { name: "Speed & Distance", color: "#00d68f", note: "Covers motion problems. Uses speed = distance/time. Includes trains and boats. Important formulas. Frequently asked." },
];

export default function Aptitude({ form, onLogout }) {
  const navigate = useNavigate();
  const [checked, setChecked] = useState({});
  const toggle = (name) => setChecked((p) => ({ ...p, [name]: !p[name] }));

  return (
    <div className="subj-page">
      <Navbar form={form} onLogout={onLogout} onProfileClick={() => navigate("/profile")} />
      <div className="subj-hero">
        <div className="subj-hero-glow" />
        <div className="subj-badge">🧮 Aptitude</div>
        <h1>Aptitude Preparation</h1>
        <p>Quantitative aptitude for first round screening</p>
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
