import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./ResumeAnalysis.css";

const ResumeAnalysis = ({ form, onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state;

  if (!result) {
    return (
      <div className="analysis-page">
        <Navbar form={form} onLogout={onLogout} onProfileClick={() => navigate("/profile")} />
        <div className="analysis-body">
          <div className="analysis-card">
            <h2>No Data Found</h2>
            <button className="back-btn" onClick={() => navigate("/upload")}>Upload Resume</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="analysis-page">
      <Navbar form={form} onLogout={onLogout} onProfileClick={() => navigate("/profile")} />
      <div className="analysis-body">
        <div className="analysis-card">
          <div className="analysis-hero-badge">📊 ATS Score</div>
          <h2>Resume Analysis</h2>

          <div className="score-circle" style={{ "--score": `${result.score}%` }}>
            <h1>{result.score}%</h1>
          </div>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${result.score}%` }} />
          </div>

          <div className="suggestion-box">
            <h3>💡 Suggestions</h3>
            <ul>
              {result.suggestions.map((s, i) => (
                <li key={i}>✔ {s}</li>
              ))}
            </ul>
          </div>

          <button className="back-btn" onClick={() => navigate("/upload")}>
            Upload Another Resume
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResumeAnalysis;
