import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Progresstracker.css";

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

  // 🔥 STATE (from 2nd code)
  const [displayProgress, setDisplayProgress] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);

  const [items] = useState([
    { id: 1, name: "Resume Upload", progress: 100, date: "2024-03-15", color: "#10b981", icon: "📄", status: "Completed" },
    { id: 2, name: "Profile Setup", progress: 85, date: "2024-03-20", color: "#3b82f6", icon: "👤", status: "In Progress" },
    { id: 3, name: "Mock Interviews", progress: 50, date: "2024-03-25", color: "#f59e0b", icon: "🎤", status: "In Progress" },
    { id: 4, name: "Skill Assessment", progress: 30, date: "2024-04-01", color: "#ec4899", icon: "🎯", status: "Pending" },
  ]);

  // 🔥 LOGIC (merge of both)
  const done = Object.values(completed).filter(Boolean).length;
  const total = FEATURES.length;
  const taskPct = Math.round((done / total) * 100);
  const profilePct = Math.round((!!form?.name + !!form?.branch + !!form?.year + !!form?.skills) * 25);
  const overallPct = Math.min(100, Math.round(profilePct * 0.3 + taskPct * 0.7));

  // 🔥 Animation (from 2nd code)
  useEffect(() => {
    let current = 0;
    const timer = setInterval(() => {
      current += 2;
      if (current >= overallPct) {
        setDisplayProgress(overallPct);
        clearInterval(timer);
      } else {
        setDisplayProgress(current);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [overallPct]);

  if (!form) {
    return (
      <div className="pt-guard">
        <p>Please login first.</p>
        <button onClick={() => navigate("/")}>Login</button>
      </div>
    );
  }

  return (
    <div className="pt-page">
      <Navbar form={form} onLogout={onLogout} onProfileClick={() => navigate("/profile")} />

      {/* HERO */}
      <div className="pt-hero">
        <div className="pt-hero-badge">📊 Analytics</div>
        <h1>Progress Tracker</h1>
      </div>

      <div className="pt-body">

        {/* 🔥 OVERALL PROGRESS (Animated) */}
        <div className="pt-card">
          <h2>Overall Progress</h2>
          <h1>{displayProgress}%</h1>
          <div className="pt-bar-track">
            <div className="pt-bar-fill" style={{ width: `${displayProgress}%` }} />
          </div>
        </div>

        {/* 🔥 WEEKLY */}
        <div className="pt-card">
          <h2>Weekly Activity</h2>
          <div className="pt-weekly">
            {WEEKLY.map((w, i) => (
              <div key={i}>
                <div style={{ height: `${w.val}%` }} className="pt-week-bar" />
                <span>{w.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 TASKS (from 1st code) */}
        <div className="pt-card">
          <h2>Task Breakdown</h2>
          {FEATURES.map((f) => {
            const isDone = !!completed[f.key];
            return (
              <div key={f.key} onClick={() => navigate(f.path)} className="pt-task-row">
                <span>{f.icon} {f.title}</span>
                <span>{isDone ? "✓ Done" : "Pending"}</span>
              </div>
            );
          })}
        </div>

        {/* 🔥 MILESTONES TABLE (from 2nd code) */}
        <div className="pt-card">
          <h2>Milestones</h2>
          {items.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                background: hoveredId === item.id ? "#f0f9ff" : "transparent",
                padding: "10px",
                margin: "5px 0",
                cursor: "pointer"
              }}
            >
              <strong>{item.icon} {item.name}</strong>
              <div>{item.status} | {item.progress}%</div>
            </div>
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}