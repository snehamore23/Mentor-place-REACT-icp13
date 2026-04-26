import { useNavigate } from "react-router-dom";
import "./Footer.css";

const features = [
  { label: "Resume Upload",    path: "/upload",    icon: "📄" },
  { label: "Placement Prep",   path: "/prep",      icon: "📚" },
  { label: "Mock Interview",   path: "/mock",      icon: "🎤" },
  { label: "Progress Tracker", path: "/progress",  icon: "📊" },
  { label: "Career Guidance",  path: "/career",    icon: "🚀" },
  { label: "Community",        path: "/community", icon: "👥" },
];

const resources = [
  { label: "Interview Tips",    path: "/resources/interview-tips", icon: "📝" },
  { label: "Aptitude Practice", path: "/resources/aptitude",       icon: "💡" },
  { label: "DSA Roadmap",       path: "/resources/dsa",            icon: "🧠" },
  { label: "Company Guides",    path: "/resources/companies",      icon: "🏢" },
  { label: "Placement FAQs",    path: "/resources/faqs",           icon: "❓" },
];

export default function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  return (
    <footer className="ft">
      <div className="ft-inner">

        {/* Top Grid */}
        <div className="ft-grid">

          {/* Brand */}
          <div className="ft-brand-col">
            <div className="ft-logo" onClick={() => navigate("/")}>
              🎓 Placement<strong>Pro</strong>
            </div>
            <p className="ft-tagline">
              Empowering students to land their dream careers through smart preparation, mock interviews, and community support.
            </p>
            <div className="ft-socials">
              {[
                { label: "Li", title: "LinkedIn" },
                { label: "𝕏",  title: "Twitter"  },
                { label: "Gh", title: "GitHub"   },
                { label: "Ig", title: "Instagram"},
              ].map((s, i) => (
                <a key={i} className="ft-social" href="#" title={s.title}>{s.label}</a>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="ft-col-title">Features</h4>
            <ul className="ft-list">
              {features.map((f, i) => (
                <li key={i} onClick={() => navigate(f.path)}>
                  <span>{f.icon}</span>{f.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="ft-col-title">Resources</h4>
            <ul className="ft-list">
              {resources.map((r, i) => (
                <li key={i} onClick={() => navigate(r.path)}>
                  <span>{r.icon}</span>{r.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="ft-col-title">Stay Updated</h4>
            <p className="ft-news-desc">Get placement tips and job alerts in your inbox.</p>
            <div className="ft-news-form">
              <input className="ft-news-input" type="email" placeholder="your@email.com" />
              <button className="ft-news-btn">Subscribe</button>
            </div>
            <div className="ft-tags">
              <span className="ft-tag">🔒 No Spam</span>
              <span className="ft-tag">✅ Free Forever</span>
              <span className="ft-tag">🎯 Weekly Tips</span>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="ft-divider" />

        {/* Bottom */}
        <div className="ft-bottom">
          <p className="ft-copy">© {year} PlacementPro · Made with ❤️ for students</p>
          <div className="ft-links">
            <span onClick={() => navigate("/")}>Privacy Policy</span>
            <span onClick={() => navigate("/")}>Terms of Use</span>
            <span onClick={() => navigate("/community")}>Contact Us</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
