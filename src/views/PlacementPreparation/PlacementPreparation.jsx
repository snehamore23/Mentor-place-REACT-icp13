import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./PlacementPreparation.css";

const cards = [
  { title: "DSA",              desc: "Data Structures & Algorithms — Core for coding rounds", icon: "🧠", path: "/dsa",      color: "#58a6ff" },
  { title: "Aptitude",         desc: "Quantitative aptitude for first round screening",        icon: "🧮", path: "/aptitude", color: "#c084fc" },
  { title: "Logical Reasoning",desc: "Puzzles & problem solving skills",                       icon: "🧩", path: "/logical",  color: "#ff6b6b" },
  { title: "Verbal Ability",   desc: "Grammar & communication skills",                         icon: "📝", path: "/verbal",   color: "#ff9f43" },
  { title: "C Programming",    desc: "Basics of C language and logic building",                icon: "💻", path: "/c",        color: "#00d68f" },
  { title: "C++",              desc: "Object-oriented programming concepts",                   icon: "⚙️", path: "/cpp",      color: "#00d4ff" },
  { title: "Java",             desc: "Core Java and OOP concepts",                             icon: "☕", path: "/java",     color: "#f59e0b" },
  { title: "Python",           desc: "Easy syntax and scripting language",                     icon: "🐍", path: "/python",   color: "#10b981" },
  { title: "SQL",              desc: "Database queries and data management",                   icon: "🗄️", path: "/sql",      color: "#ec4899" },
];

export default function PlacementPreparation({ form, onLogout }) {
  const navigate = useNavigate();

  if (!form) return (
    <div className="plp-guard">
      <p>Please login first.</p>
      <button onClick={() => navigate("/")}>Login</button>
    </div>
  );

  return (
    <div className="plp-page">
      <Navbar form={form} onLogout={onLogout} onProfileClick={() => navigate("/profile")} />

      {/* Hero */}
      <div className="plp-hero">
        <div className="plp-hero-glow" />
        <div className="plp-hero-badge">📚 Study Plan</div>
        <h1>Placement Preparation</h1>
        <p>Choose a topic and start preparing for your campus placements</p>
        <div className="plp-hero-stats">
          <span>📚 {cards.length} Topics</span>
          <span>💻 Programming Languages</span>
          <span>🎯 Campus Focused</span>
        </div>
      </div>

      {/* Cards */}
      <div className="plp-body">
        <div className="plp-section-label">🗂️ Select a Topic to Start</div>
        <div className="plp-cards">
          {cards.map((card, i) => (
            <div
              key={i}
              className="plp-card"
              onClick={() => navigate(card.path)}
            >
              <div className="plp-card-accent" style={{ background: card.color }} />
              <div className="plp-card-icon" style={{ background: card.color + "20", color: card.color }}>
                {card.icon}
              </div>
              <h2 className="plp-card-title">{card.title}</h2>
              <p className="plp-card-desc">{card.desc}</p>
              <button
                className="plp-card-btn"
                style={{ borderColor: card.color, color: card.color, background: card.color + "12" }}
              >
                Start Prep →
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
