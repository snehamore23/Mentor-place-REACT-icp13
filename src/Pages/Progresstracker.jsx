import React, { useState, useEffect } from "react";
import "./progresstracker.css";

const Progresstracker = () => {
  const [overallProgress, setOverallProgress] = useState(0);

  const [items, setItems] = useState([
    { id: 1, name: "Resume Upload", progress: 100, date: "2024-03-15" },
    { id: 2, name: "Profile Setup", progress: 85, date: "2024-03-20" },
    { id: 3, name: "Mock Interviews", progress: 50, date: "2024-03-25" },
    { id: 4, name: "Skill Assessment", progress: 30, date: "2024-04-01" },
    { id: 5, name: "Job Applications", progress: 15, date: "Pending" },
  ]);

  useEffect(() => {
    const total = items.reduce((sum, item) => sum + item.progress, 0);
    setOverallProgress(Math.round(total / items.length));
  }, [items]);

  return (
    <div className="proper-tracker-container">
      <main className="proper-main">
        {/* Header */}
        <div className="page-header">
          <div className="breadcrumb">
            Dashboard / <span className="active">Progress Tracker</span>
          </div>
          <h1>My Placement Journey</h1>
          <p>Monitor your preparation status and upcoming milestones.</p>
        </div>

        <div className="dashboard-grid">
          {/* Overall Progress Card */}
          <section className="card summary-card">
            <div className="card-header">
              <h2>Overall Status</h2>
              <span className="badge">Updated today</span>
            </div>

            <div className="summary-content">
              <div className="progress-value-group">
                <span className="percentage-num">{overallProgress}%</span>
                <span className="percentage-label">
                  Completion Score
                </span>
              </div>