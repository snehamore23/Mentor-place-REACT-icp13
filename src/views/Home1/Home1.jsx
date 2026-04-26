import "./Home1.css";
import { useNavigate } from "react-router-dom";

const features = [
  { title: "Resume Analyzer",       desc: "Improve your resume with smart suggestions.", icon: "📄" },
  { title: "Placement Preparation", desc: "Prepare aptitude, coding & interviews.",       icon: "📚" },
  { title: "Mock Interview",        desc: "Practice real interview scenarios.",            icon: "🎤" },
  { title: "Progress Tracker",      desc: "Track your performance and growth.",            icon: "📊" },
];

export default function Home1() {
  const navigate = useNavigate();

  return (
    <div className="h1-page">

      {/* HERO */}
      <section className="h1-hero">
        <div className="h1-glow h1-glow-1" />
        <div className="h1-glow h1-glow-2" />
        <h1 className="h1-hero-title">PlaceMentor</h1>
        <p className="h1-hero-sub">Smart Placement Preparation System</p>
        <div className="h1-btn-wrap">
          <button className="h1-btn-primary" onClick={() => navigate("/login")}>
            Get Started
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="h1-about">
        <h2 className="h1-heading">
          About <span>PlaceMentor</span>
        </h2>
        <p className="h1-subtext">
          A smart platform designed to simplify placement preparation using modern technology.
        </p>
        <div className="h1-about-content">
          <p>
            PlaceMentor helps students prepare efficiently for campus placements by combining
            resume analysis, mock interviews, and structured learning in one system.
          </p>
          <p>
            It identifies strengths and weaknesses and provides step-by-step improvement guidance.
          </p>
          <p>
            With performance tracking and feedback, students can build confidence and succeed
            in real interviews.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="h1-features">
        <h2 className="h1-heading">
          Key <span>Features</span>
        </h2>
        <p className="h1-subtext">
          Powerful tools to boost your placement preparation journey.
        </p>
        <div className="h1-card-grid">
          {features.map((item, index) => (
            <div key={index} className="h1-card">
              <div className="h1-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
