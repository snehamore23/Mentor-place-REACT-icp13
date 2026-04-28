import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const FEATURES = [
  { key: "resume",    title: "Resume Upload",     desc: "AI-powered resume analysis & improvement tips",    icon: "📄", path: "/upload",    color: "#58a6ff" },
  { key: "prep",      title: "Placement Prep",    desc: "Topic-wise structured study plans for campus",     icon: "📚", path: "/prep",      color: "#c084fc" },
  { key: "mock",      title: "Mock Interview",    desc: "Practice with real questions, instant feedback",   icon: "🎤", path: "/mock",      color: "#ff6b6b" },
  { key: "progress",  title: "Progress Tracker",  desc: "Visualize your preparation with analytics",        icon: "📊", path: "/progress",  color: "#ff9f43" },
  { key: "career",    title: "Career Guidance",   desc: "Personalized career advice from industry mentors", icon: "🚀", path: "/career",    color: "#00d68f" },
  { key: "community", title: "Student Community", desc: "Connect & grow with 500+ placement aspirants",     icon: "👥", path: "/community", color: "#00d4ff" },
];

const QUICK_LINKS = [
  { label: "DSA Roadmap",      icon: "🧠", path: "/resources/dsa" },
  { label: "Interview Tips",   icon: "📝", path: "/resources/interview-tips" },
  { label: "Company Guides",   icon: "🏢", path: "/resources/companies" },
  { label: "Aptitude Quiz",    icon: "💡", path: "/resources/aptitude" },
  { label: "Placement FAQs",   icon: "❓", path: "/resources/faqs" },
];

const TIPS = [
  "Solve 2 DSA problems daily — consistency beats intensity.",
  "Practice mock interviews out loud to build real confidence.",
  "Research the company thoroughly before every interview.",
  "Keep your resume to 1 page with quantified achievements.",
  "Join the community to get referrals and insider tips.",
  "Review your wrong answers immediately after every quiz.",
  "Focus on understanding patterns, not memorizing solutions.",
];

export default function Dashboard({ form, completed, setCompleted, onLogout }) {
  const navigate = useNavigate();

  if (!form) return null;

  const toggle = (key) => setCompleted((p) => ({ ...p, [key]: !p[key] }));

  const done       = Object.values(completed).filter(Boolean).length;
  const total      = FEATURES.length;
  const taskPct    = Math.round((done / total) * 100);
  const profilePct = Math.round((!!form.name + !!form.branch + !!form.year + !!form.skills) * 25);
  const overallPct = Math.min(100, Math.round(profilePct * 0.3 + taskPct * 0.7));
  const initials   = form.name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
  const tip        = TIPS[new Date().getDay() % TIPS.length];

  const getGreeting = () => {
    const h = new Date().getHours();
    if (h < 12) return "Good Morning ☀️";
    if (h < 17) return "Good Afternoon 🌤️";
    return "Good Evening 🌙";
  };

  const level =
    overallPct >= 80 ? { label: "Placement Ready 🏆", color: "var(--accent-green)",  bg: "rgba(0,214,143,0.12)",  border: "rgba(0,214,143,0.3)"  } :
    overallPct >= 50 ? { label: "On Track 🚀",         color: "var(--accent)",        bg: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.3)" } :
    overallPct >= 25 ? { label: "In Progress ⚡",       color: "var(--accent-orange)", bg: "rgba(255,159,67,0.12)", border: "rgba(255,159,67,0.3)"  } :
                       { label: "Just Started 🌱",     color: "var(--text-muted)",    bg: "var(--bg-hover)",       border: "var(--border)"         };

  const STATS = [
    { icon: "✅", val: `${done}/${total}`, label: "Tasks Done",       color: "var(--accent-green)"  },
    { icon: "📊", val: `${taskPct}%`,      label: "Task Progress",    color: "var(--accent)"        },
    { icon: "👤", val: `${profilePct}%`,   label: "Profile Complete", color: "var(--accent-purple)" },
    { icon: "🎯", val: `${total - done}`,  label: "Remaining",        color: "var(--accent-orange)" },
  ];

  return (
    <div className="db-page">
      <Navbar form={form} onLogout={onLogout} onProfileClick={() => navigate("/profile")} />

      {/* SVG gradient def */}
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#d946ef" />
          </linearGradient>
        </defs>
      </svg>

      {/* ── Hero ── */}
      <div className="db-hero">
        <div className="db-hero-glow" />
        <div className="db-hero-inner">
          <div className="db-hero-left">
            <div className="db-avatar">{initials}</div>
            <div>
              <p className="db-greeting">{getGreeting()}</p>
              <h1 className="db-hero-title">
                Welcome, <span className="text-gradient">{form.name.split(" ")[0]}</span> 👋
              </h1>
              <div className="db-hero-meta">
                <span>🎓 {form.branch} · {form.year}</span>
                <span className="db-level-badge" style={{ color: level.color, background: level.bg, borderColor: level.border }}>
                  {level.label}
                </span>
              </div>
            </div>
          </div>
          <div className="db-hero-right">
            <div className="db-overall-ring">
              <svg viewBox="0 0 80 80" className="db-ring-svg">
                <circle cx="40" cy="40" r="34" className="db-ring-bg" />
                <circle cx="40" cy="40" r="34" className="db-ring-fill"
                  style={{ strokeDashoffset: `${213.6 - (213.6 * overallPct) / 100}` }} />
              </svg>
              <div className="db-ring-text">
                <span className="db-ring-val">{overallPct}%</span>
                <span className="db-ring-label">Overall</span>
              </div>
            </div>
            <button className="btn-ghost" onClick={() => navigate("/profile")}>👤 My Profile</button>
          </div>
        </div>
      </div>

      <div className="db-layout">

        {/* ── Sidebar ── */}
        <aside className="db-sidebar">

          {/* Quick Links */}
          <div className="db-sidebar-card">
            <p className="db-sidebar-title">⚡ Quick Access</p>
            {QUICK_LINKS.map((q) => (
              <button key={q.path} className="db-quick-btn" onClick={() => navigate(q.path)}>
                <span className="db-quick-icon">{q.icon}</span>
                <span>{q.label}</span>
                <span className="db-quick-arrow">›</span>
              </button>
            ))}
          </div>

          {/* Daily Tip */}
          <div className="db-sidebar-card db-tip-card">
            <p className="db-sidebar-title">💡 Tip of the Day</p>
            <p className="db-tip-text">"{tip}"</p>
          </div>

          {/* Skills */}
          {form.skills && (
            <div className="db-sidebar-card">
              <p className="db-sidebar-title">🛠️ Your Skills</p>
              <div className="db-skills">
                {form.skills.split(",").map((s, i) => (
                  <span key={i} className="db-skill">{s.trim()}</span>
                ))}
              </div>
            </div>
          )}
        </aside>

        {/* ── Main ── */}
        <main className="db-main">

          {/* Stats */}
          <div className="db-stats">
            {STATS.map((s, i) => (
              <div key={i} className="db-stat-card">
                <span className="db-stat-icon" style={{ color: s.color }}>{s.icon}</span>
                <span className="db-stat-val"  style={{ color: s.color }}>{s.val}</span>
                <span className="db-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="db-progress-card">
            <div className="db-progress-header">
              <span>📋 Placement Checklist</span>
              <span>{done} of {total} completed · {taskPct}%</span>
            </div>
            <div className="db-progress-track">
              <div className="db-progress-fill" style={{ width: `${taskPct}%` }} />
            </div>
          </div>

          {/* Section header */}
          <div className="db-section-header">
            <span className="db-section-title">🗂️ Your Placement Toolkit</span>
            <span className="db-section-sub">{done} of {total} completed</span>
          </div>

          {/* Feature Cards */}
          <div className="db-cards">
            {FEATURES.map((f) => {
              const isDone = !!completed[f.key];
              return (
                <div
                  key={f.key}
                  className={`db-card ${isDone ? "db-card-done" : ""}`}
                  onClick={() => navigate(f.path)}
                >
                  <div className="db-card-accent" style={{ background: isDone ? "var(--accent-green)" : f.color }} />

                  <div className="db-card-top">
                    <div className="db-card-icon" style={{ background: f.color + "20", color: f.color }}>{f.icon}</div>
                    <span className={`db-card-badge ${isDone ? "db-badge-done" : "db-badge-todo"}`}>
                      {isDone ? "✓ Done" : "To Do"}
                    </span>
                  </div>

                  <h3 className="db-card-title">{f.title}</h3>
                  <p className="db-card-desc">{f.desc}</p>

                  <div className="db-card-bar-track">
                    <div className="db-card-bar-fill" style={{ width: isDone ? "100%" : "0%", background: f.color }} />
                  </div>

                  <button
                    className="db-card-btn"
                    style={isDone
                      ? { borderColor: "var(--accent-green)", color: "var(--accent-green)", background: "rgba(0,214,143,0.08)" }
                      : { borderColor: f.color, color: f.color, background: f.color + "12" }
                    }
                    onClick={(e) => { e.stopPropagation(); toggle(f.key); }}
                  >
                    {isDone ? "✓ Completed" : "Mark as Done"}
                  </button>
                </div>
              );
            })}
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}
