import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  // 🔥 Clean scalable data (Best Practice)
  const features = [
    {
      title: "Resume Upload",
      desc: "Upload & analyze your resume",
      path: "/upload",
      icon: "📄",
    },
    {
      title: "Placement Preparation",
      desc: "Prepare for interviews",
      path: "/preparation",
      icon: "📚",
    },
    {
      title: "Mock Interview",
      desc: "Practice real interviews",
      path: "/mock",
      icon: "🎤",
    },
    {
      title: "Progress Tracker",
      desc: "Track your growth",
      path: "/progress",
      icon: "📊",
    },
  ];

  return (
    <div className="dashboard">
      <h1 className="title">Welcome back 👋</h1>

      <div className="grid">
        {features.map((item, index) => (
          <div
            key={index}
            className="card"
            onClick={() => navigate(item.path)}
          >
            <div className="icon">{item.icon}</div>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;