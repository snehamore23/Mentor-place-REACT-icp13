import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./CareerGuidance.css";

const PATHS = [
  { icon: "💻", title: "Software Development",    roles: ["Frontend Dev", "Backend Dev", "Full Stack", "Mobile Dev"], avg: "6–15 LPA", color: "#58a6ff" },
  { icon: "📊", title: "Data Science & AI",        roles: ["Data Analyst", "ML Engineer", "Data Scientist"],          avg: "8–20 LPA", color: "#c084fc" },
  { icon: "🎨", title: "Product & Design",         roles: ["Product Manager", "UI/UX Designer", "Product Designer"],  avg: "7–18 LPA", color: "#ff6b6b" },
  { icon: "🔐", title: "Cybersecurity",            roles: ["Security Analyst", "Ethical Hacker", "SOC Analyst"],      avg: "6–16 LPA", color: "#ff9f43" },
  { icon: "☁️", title: "Cloud & DevOps",           roles: ["Cloud Engineer", "DevOps Engineer", "SRE"],               avg: "7–18 LPA", color: "#00d68f" },
  { icon: "💼", title: "Consulting & Management",  roles: ["Business Analyst", "Consultant", "Project Manager"],      avg: "6–14 LPA", color: "#00d4ff" },
];

const MENTORS = [
  { name: "Priya Sharma",  role: "SDE @ Amazon",              exp: "5 years", avatar: "PS", expertise: "DSA, System Design", color: "linear-gradient(135deg,#8b5cf6,#ec4899)" },
  { name: "Rahul Mehta",   role: "ML Engineer @ Google",      exp: "4 years", avatar: "RM", expertise: "ML, Python, AI",     color: "linear-gradient(135deg,#3b82f6,#06b6d4)" },
  { name: "Sneha Patel",   role: "Product Manager @ Microsoft", exp: "6 years", avatar: "SP", expertise: "Product, Strategy", color: "linear-gradient(135deg,#10b981,#84cc16)" },
];

const TIPS = [
  { icon: "🎯", tip: "Start building your portfolio from 2nd year itself" },
  { icon: "🔗", tip: "LinkedIn profile is as important as your resume" },
  { icon: "📜", tip: "Get certified — AWS, Google, Microsoft certs add value" },
  { icon: "🤝", tip: "Network actively — 70% of jobs are filled through referrals" },
  { icon: "📚", tip: "Read industry blogs and follow thought leaders in your domain" },
  { icon: "🚀", tip: "Apply for internships early — they often convert to full-time" },
];

export default function CareerGuidance({ form, onLogout }) {
  const navigate = useNavigate();

  if (!form) return (
    <div className="career-guard">
      <p>Please login first.</p>
      <button onClick={() => navigate("/")}>Login</button>
    </div>
  );

  return (
    <div className="career-page">
      <Navbar form={form} onLogout={onLogout} onProfileClick={() => navigate("/profile")} />

      <div className="career-hero">
        <div className="career-hero-glow" />
        <div className="career-hero-badge">🚀 Career Planning</div>
        <h1>Career Guidance</h1>
        <p>Explore career paths, connect with mentors, and plan your journey to success</p>
        <div className="career-hero-stats">
          <span>🗺️ {PATHS.length} Career Paths</span>
          <span>👨‍🏫 {MENTORS.length} Mentors</span>
          <span>💡 {TIPS.length} Pro Tips</span>
        </div>
      </div>

      <div className="career-body">

        {/* Career Paths */}
        <div className="career-section-label">🗺️ Explore Career Paths</div>
        <div className="career-paths">
          {PATHS.map((p, i) => (
            <div key={i} className="career-path-card">
              <div className="career-path-accent" style={{ background: p.color }} />
              <div className="career-path-icon" style={{ background: p.color + "20", color: p.color }}>{p.icon}</div>
              <h3 className="career-path-title">{p.title}</h3>
              <div className="career-path-roles">
                {p.roles.map((r, j) => <span key={j} className="career-role-tag">{r}</span>)}
              </div>
              <div className="career-path-avg" style={{ color: p.color }}>💰 Avg: {p.avg}</div>
              <button className="career-path-btn" style={{ borderColor: p.color, color: p.color }}>Explore →</button>
            </div>
          ))}
        </div>

        {/* Mentors */}
        <div className="career-section-label">👨‍🏫 Connect with Mentors</div>
        <div className="career-mentors">
          {MENTORS.map((m, i) => (
            <div key={i} className="career-mentor-card">
              <div className="career-mentor-avatar" style={{ background: m.color }}>{m.avatar}</div>
              <h3 className="career-mentor-name">{m.name}</h3>
              <p className="career-mentor-role">{m.role}</p>
              <p className="career-mentor-exp">⏱ {m.exp} experience</p>
              <div className="career-mentor-expertise">{m.expertise}</div>
              <button className="career-mentor-btn">Book Session</button>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="career-section-label">💡 Career Tips</div>
        <div className="career-tips">
          {TIPS.map((t, i) => (
            <div key={i} className="career-tip-item">
              <span className="career-tip-icon">{t.icon}</span>
              <span className="career-tip-text">{t.tip}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="career-cta">
          <h3>Need 1-on-1 Career Guidance? 🤝</h3>
          <p>Book a free 30-minute session with our career counselors</p>
          <button className="career-cta-btn" onClick={() => navigate("/community")}>
            👥 Connect in Community →
          </button>
        </div>

      </div>
      <Footer />
    </div>
  );
}
