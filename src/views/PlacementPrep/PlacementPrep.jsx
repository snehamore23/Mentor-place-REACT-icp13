import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./PlacementPrep.css";

const TOPICS = [
  { icon: "🧮", title: "Quantitative Aptitude", subtopics: ["Number System", "Percentages", "Profit & Loss", "Time & Work", "Speed & Distance"], color: "#58a6ff", path: "/resources/aptitude" },
  { icon: "🧩", title: "Logical Reasoning",     subtopics: ["Blood Relations", "Seating Arrangement", "Syllogisms", "Coding-Decoding", "Puzzles"], color: "#c084fc", path: "/resources/aptitude" },
  { icon: "📝", title: "Verbal Ability",         subtopics: ["Reading Comprehension", "Sentence Correction", "Para Jumbles", "Vocabulary"], color: "#ff6b6b", path: "/resources/aptitude" },
  { icon: "💻", title: "Data Structures",        subtopics: ["Arrays", "Linked Lists", "Stacks & Queues", "Trees", "Graphs"], color: "#ff9f43", path: "/resources/dsa" },
  { icon: "⚙️", title: "Algorithms",             subtopics: ["Sorting", "Searching", "Dynamic Programming", "Greedy", "Divide & Conquer"], color: "#00d68f", path: "/resources/dsa" },
  { icon: "🗄️", title: "Core CS Subjects",       subtopics: ["DBMS", "Operating Systems", "Computer Networks", "OOP Concepts"], color: "#00d4ff", path: "/resources/companies" },
];

const SCHEDULE = [
  { week: "Week 1–2",  focus: "Aptitude Basics",       tasks: ["Number System", "Percentages", "Ratios", "20 practice questions/day"] },
  { week: "Week 3–4",  focus: "DSA Foundations",       tasks: ["Arrays & Strings", "Linked Lists", "Stacks & Queues", "15 LeetCode easy"] },
  { week: "Week 5–6",  focus: "Core CS Subjects",      tasks: ["DBMS SQL queries", "OS concepts", "CN basics", "OOP revision"] },
  { week: "Week 7–8",  focus: "Advanced DSA",          tasks: ["Trees & Graphs", "DP basics", "10 LeetCode medium", "Mock test"] },
  { week: "Week 9–10", focus: "Company Prep",          tasks: ["Company-wise questions", "HR round prep", "Resume polish", "Mock interviews"] },
  { week: "Week 11–12", focus: "Final Revision",       tasks: ["Full mock tests", "Weak area revision", "Interview practice", "Apply to companies"] },
];

export default function PlacementPrep({ form, onLogout }) {
  const navigate = useNavigate();
  const [activeTab, setTab] = useState("topics");
  const [openWeek, setOpenWeek] = useState(0);

  if (!form) return (
    <div className="pp-guard">
      <p>Please login first.</p>
      <button onClick={() => navigate("/")}>Login</button>
    </div>
  );

  return (
    <div className="pp-page">
      <Navbar form={form} onLogout={onLogout} onProfileClick={() => navigate("/profile")} />

      <div className="pp-hero">
        <div className="pp-hero-glow" />
        <div className="pp-hero-badge">📚 Study Plan</div>
        <h1>Placement Preparation</h1>
        <p>Structured topic-wise study plans to crack campus placements</p>
        <div className="pp-hero-stats">
          <span>📚 {TOPICS.length} Topics</span>
          <span>📅 12-Week Plan</span>
          <span>🎯 Company-Focused</span>
        </div>
      </div>

      <div className="pp-body">

        {/* Tabs */}
        <div className="pp-tabs">
          {["topics", "schedule"].map((t) => (
            <button key={t} className={`pp-tab ${activeTab === t ? "pp-tab-active" : ""}`} onClick={() => setTab(t)}>
              {t === "topics" ? "📚 Topics" : "📅 Study Schedule"}
            </button>
          ))}
        </div>

        {activeTab === "topics" ? (
          <div className="pp-topics">
            {TOPICS.map((t, i) => (
              <div key={i} className="pp-topic-card" onClick={() => navigate(t.path)}>
                <div className="pp-topic-accent" style={{ background: t.color }} />
                <div className="pp-topic-icon" style={{ background: t.color + "20", color: t.color }}>{t.icon}</div>
                <h3 className="pp-topic-title">{t.title}</h3>
                <div className="pp-subtopics">
                  {t.subtopics.map((s, j) => <span key={j} className="pp-subtopic">{s}</span>)}
                </div>
                <button className="pp-topic-btn" style={{ borderColor: t.color, color: t.color }}>Start Prep →</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="pp-schedule">
            {SCHEDULE.map((s, i) => (
              <div key={i} className={`pp-week-card ${openWeek === i ? "pp-week-open" : ""}`}>
                <div className="pp-week-header" onClick={() => setOpenWeek(openWeek === i ? -1 : i)}>
                  <div className="pp-week-dot" />
                  <div className="pp-week-info">
                    <span className="pp-week-label">{s.week}</span>
                    <span className="pp-week-focus">{s.focus}</span>
                  </div>
                  <span className="pp-week-arrow">{openWeek === i ? "▲" : "▼"}</span>
                </div>
                {openWeek === i && (
                  <div className="pp-week-tasks">
                    {s.tasks.map((task, j) => (
                      <div key={j} className="pp-week-task">
                        <span className="pp-task-dot">→</span>
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
      <Footer />
    </div>
  );
}
