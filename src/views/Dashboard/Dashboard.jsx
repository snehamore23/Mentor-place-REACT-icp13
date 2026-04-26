import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const features = [
  { title: "Resume Upload",      desc: "Upload & get AI-powered resume analysis and tips.",  icon: "📄", path: "/upload",    key: "resume",    color: "#58a6ff" },
  { title: "Placement Prep",     desc: "Topic-wise study plans tailored for placements.",    icon: "📚", path: "/prep",      key: "prep",      color: "#bc8cff" },
  { title: "Mock Interview",     desc: "Practice with real questions, get instant feedback.",icon: "🎤", path: "/mock",      key: "mock",      color: "#f78166" },
  { title: "Progress Tracker",   desc: "Visualize your preparation with analytics.",         icon: "📊", path: "/progress",  key: "progress",  color: "#ffa657" },
  { title: "Career Guidance",    desc: "Personalized career advice from industry mentors.",  icon: "🚀", path: "/career",    key: "career",    color: "#3fb950" },
  { title: "Student Community",  desc: "Connect and grow with 500+ placement aspirants.",    icon: "👥", path: "/community", key: "community", color: "#58a6ff" },
];

const resources = [
  { label: "DSA Roadmap",      icon: "🧠", path: "/resources/dsa" },
  { label: "Interview Tips",   icon: "📝", path: "/resources/interview-tips" },
  { label: "Company Guides",   icon: "🏢", path: "/resources/companies" },
  { label: "Aptitude Practice",icon: "💡", path: "/resources/aptitude" },
  { label: "Placement FAQs",   icon: "❓", path: "/resources/faqs" },
];

const tips = [
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

  const done        = Object.values(completed).filter(Boolean).length;
  const total       = features.length;
  const taskPct     = Math.round((done / total) * 100);
  const profilePct  = Math.round((!!form.name + !!form.branch + !!form.year + !!form.skills) * 25);
  const overallPct  = Math.round(profilePct * 0.3 + taskPct * 0.7);
  const initials    = form.name.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
  const tip         = tips[new Date().getDay() % tips.length];

  const level =
    overallPct >= 80 ? { label: "Placement Ready", color: "var(--accent-green)",  icon: "🏆" } :
    overallPct >= 50 ? { label: "On Track",         color: "var(--accent)",        icon: "🚀" } :
    overallPct >= 25 ? { label: "In Progress",      color: "var(--accent-orange)", icon: "⚡" } :
                       { label: "Just Started",     color: "var(--text-muted)",    icon: "🌱" };

  return (
    <div className="db-page">
      <Navbar form={form} onLogout={onLogout} onProfileClick={() => navigate("/profile")} />

      <div className="db-wrap">

        {/* ── LEFT SIDEBAR ── */}
        <aside className="db-sidebar">

          {/* Profile Card */}
          <div className="db-profile-card">
            <div className="db-avatar">{initials}</div>
            <h3 className="db-name">{form.name}</h3>
            <p className="db-meta">{form.branch} · {form.year}</p>
            <div className="db-level" style={{ color: level.color }}>
              {level.icon} {level.label}
            </div>
            <div className="db-overall-wrap">
              <div className="db-overall-row">
                <span>Overall Score</span>
                <span style={{ color: level.color }}>{overallPct}%</span>
              </div>
              <div className="db-bar-track">
                <div className="db-bar-fill" style={{ width: `${overallPct}%`, background: level.color }} />
              </div>
            </div>
            <button className="db-edit-btn" onClick={() => navigate("/profile")}>
              View Profile →
            </button>
          </div>

          {/* Quick Links */}
          <div className="db-sidebar-box">
            <p className="db-box-title">⚡ Quick Access</p>
            {resources.map((r, i) => (
              <button key={i} className="db-quick-item" onClick={() => navigate(r.path)}>
                <span>{r.icon}</span>
                <span>{r.label}</span>
                <span className="db-quick-arrow">›</span>
              </button>
            ))}
          </div>

          {/* Daily Tip */}
          <div className="db-tip-box">
            <p className="db-box-title">💡 Tip of the Day</p>
            <p className="db-tip-text">"{tip}"</p>
          </div>

        </aside>

        {/* ── MAIN CONTENT ── */}
        <main className="db-main">

          {/* Welcome Header */}
          <div className="db-header">
            <div>
              <h1 className="db-welcome">Good day, {form.name.split(" ")[0]} 👋</h1>
              <p className="db-sub">Here's your placement preparation overview.</p>
            </div>
            <button className="db-community-btn" onClick={() => navigate("/community")}>
              👥 Join Community
            </button>
          </div>

          {/* Stats Row */}
          <div className="db-stats">
            {[
              { label: "Tasks Done",       val: `${done} / ${total}`, icon: "✅", color: "var(--accent-green)"  },
              { label: "Task Progress",    val: `${taskPct}%`,        icon: "📊", color: "var(--accent)"        },
              { label: "Profile Complete", val: `${profilePct}%`,     icon: "👤", color: "var(--accent-purple)" },
              { label: "Remaining Tasks",  val: `${total - done}`,    icon: "🎯", color: "var(--accent-orange)" },
            ].map((s, i) => (
              <div key={i} className="db-stat">
                <div className="db-stat-icon" style={{ color: s.color }}>{s.icon}</div>
                <div className="db-stat-val" style={{ color: s.color }}>{s.val}</div>
                <div className="db-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="db-progress-section">
            <div className="db-progress-header">
              <span className="db-progress-title">📋 Placement Checklist</span>
              <span className="db-progress-count">{done} of {total} completed · {taskPct}%</span>
            </div>
            <div className="db-progress-track">
              <div className="db-progress-fill" style={{ width: `${taskPct}%` }} />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="db-cards">
            {features.map((f) => (
              <div
                key={f.key}
                className={`db-card ${completed[f.key] ? "db-card-done" : ""}`}
                onClick={() => navigate(f.path)}
              >
                <div className="db-card-head">
                  <div className="db-card-icon" style={{ background: f.color + "18", color: f.color }}>
                    {f.icon}
                  </div>
                  <span className={`db-card-badge ${completed[f.key] ? "db-badge-done" : "db-badge-todo"}`}>
                    {completed[f.key] ? "✓ Done" : "To Do"}
                  </span>
                </div>
                <h3 className="db-card-title">{f.title}</h3>
                <p className="db-card-desc">{f.desc}</p>
                <div className="db-card-footer">
                  <div className="db-card-bar-track">
                    <div className="db-card-bar-fill" style={{
                      width: completed[f.key] ? "100%" : "0%",
                      background: f.color
                    }} />
                  </div>
                  <button
                    className={`db-toggle-btn ${completed[f.key] ? "db-toggle-done" : "db-toggle-todo"}`}
                    style={completed[f.key]
                      ? { borderColor: "var(--accent-green)", color: "var(--accent-green)" }
                      : { borderColor: f.color, color: f.color }
                    }
                    onClick={(e) => { e.stopPropagation(); toggle(f.key); }}
                  >
                    {completed[f.key] ? "✓ Completed" : "Mark Done"}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}
