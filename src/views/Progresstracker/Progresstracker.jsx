import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; // ✅ added
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./ProgressTracker.css";

const FEATURES = [
  { key: "resume", title: "Resume Upload", icon: "📄", color: "#58a6ff", path: "/upload" },
  { key: "prep", title: "Placement Prep", icon: "📚", color: "#c084fc", path: "/prep" },
  { key: "mock", title: "Mock Interview", icon: "🎤", color: "#ff6b6b", path: "/mock" },
  { key: "progress", title: "Progress Tracker", icon: "📊", color: "#ff9f43", path: "/progress" },
  { key: "career", title: "Career Guidance", icon: "🚀", color: "#00d68f", path: "/career" },
  { key: "community", title: "Student Community", icon: "👥", color: "#00d4ff", path: "/community" },
];

const WEEKLY = [
  { day: "Mon", val: 60 }, { day: "Tue", val: 80 }, { day: "Wed", val: 45 },
  { day: "Thu", val: 90 }, { day: "Fri", val: 70 }, { day: "Sat", val: 55 }, { day: "Sun", val: 30 },
];

export default function ProgressTracker({ form, completed = {}, onLogout }) {
  const navigate = useNavigate();

  // ✅ useState added
  const [animatedProgress, setAnimatedProgress] = useState(0);

  if (!form) return (
    <div className="pt-guard">
      <p>Please login first.</p>
      <button onClick={() => navigate("/")}>Login</button>
    </div>
  );

  const done = Object.values(completed).filter(Boolean).length;
  const total = FEATURES.length;
  const taskPct = Math.round((done / total) * 100);
  const profilePct = Math.round((!!form.name + !!form.branch + !!form.year + !!form.skills) * 25);
  const overallPct = Math.min(100, Math.round(profilePct * 0.3 + taskPct * 0.7));

  // ✅ useEffect added (animation)
  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 2;
      if (current >= overallPct) {
        setAnimatedProgress(overallPct);
        clearInterval(interval);
      } else {
        setAnimatedProgress(current);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [overallPct]);

  const STATS = [
    { icon: "🏆", val: `${animatedProgress}%`, label: "Overall Score", color: "var(--accent-orange)" },
    { icon: "✅", val: `${done}/${total}`, label: "Tasks Done", color: "var(--accent-green)" },
    { icon: "👤", val: `${profilePct}%`, label: "Profile Complete", color: "var(--accent)" },
    { icon: "🎯", val: `${total - done}`, label: "Remaining", color: "var(--accent-purple)" },
  ];

  return (
    <div className="pt-page">
      <Navbar form={form} onLogout={onLogout} onProfileClick={() => navigate("/profile")} />

      <div className="pt-hero">
        <div className="pt-hero-glow" />
        <div className="pt-hero-badge">📊 Analytics</div>
        <h1>Progress Tracker</h1>
        <p>Visualize your placement preparation journey with detailed analytics</p>
      </div>

      <div className="pt-body">

        {/* Stats */}
        <div className="pt-stats">
          {STATS.map((s, i) => (
            <div key={i} className="pt-stat-card">
              <span className="pt-stat-icon" style={{ color: s.color }}>{s.icon}</span>
              <span className="pt-stat-val" style={{ color: s.color }}>{s.val}</span>
              <span className="pt-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Overall progress */}
        <div className="pt-card">
          <div className="pt-card-header">
            <span className="pt-card-title">🎯 Overall Placement Score</span>
            <span className="pt-card-val" style={{ color: "var(--accent-orange)" }}>
              {animatedProgress}%
            </span>
          </div>
          <div className="pt-bar-track">
            <div
              className="pt-bar-fill"
              style={{ width: `${animatedProgress}%`, background: "var(--grad-5)" }}
            />
          </div>
        </div>

        {/* Weekly */}
        <div className="pt-card">
          <div className="pt-card-header">
            <span className="pt-card-title">📅 Weekly Activity</span>
          </div>
          <div className="pt-weekly">
            {WEEKLY.map((w, i) => (
              <div key={i} className="pt-week-col">
                <div className="pt-week-bar-wrap">
                  <div className="pt-week-bar" style={{ height: `${w.val}%` }} />
                </div>
                <span>{w.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tasks */}
        <div className="pt-tasks">
          {FEATURES.map((f) => {
            const isDone = !!completed[f.key];
            return (
              <div key={f.key} onClick={() => navigate(f.path)} className="pt-task-row">
                <span>{f.icon}</span>
                <span>{f.title}</span>
                <span>{isDone ? "Done" : "Pending"}</span>
              </div>
            );
          })}
        </div>

      </div>
      <Footer />
    </div>
  );
}