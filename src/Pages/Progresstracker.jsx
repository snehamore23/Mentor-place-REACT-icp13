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