import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import Home from "./views/Home/Home";
import Dashboard from "./views/Dashboard/Dashboard";
import MockInterview from "./views/MockInterview/MockInterview";
import Profile from "./views/Profile/Profile";
import Resources from "./views/Resources/Resources";
import InterviewTips from "./views/InterviewTips/InterviewTips";
import AptitudePractice from "./views/AptitudePractice/AptitudePractice";
import DSARoadmap from "./views/DSARoadmap/DSARoadmap";
import CompanyGuides from "./views/CompanyGuides/CompanyGuides";
import PlacementFAQs from "./views/PlacementFAQs/PlacementFAQs";
import Community from "./views/Community/Community";
import PlacementPrepration from "./views/PlacementPrepration/PlacementPrepration";
import ResumeUpload from "./views/ResumeUpload/Resumeupload";
import ResumeAnalysis from "./views/ResumeAnalysis/ResumeAnalysis";
import CompanyQuestions from "./views/CompanyQuestions/CompanyQuestions";

const Dummy = ({ name }) => (
  <h1 style={{ textAlign: "center", padding: "60px", color: "white" }}>{name}</h1>
);

const defaultForm = { name: "Student", branch: "CSE", year: "3rd Year", skills: "React, DSA" };
const defaultCompleted = { resume: false, prep: false, mock: false, progress: false, career: false, community: false };

function App() {
  const [form, setForm] = useState(defaultForm);
  const [completed, setCompleted] = useState(defaultCompleted);

  const onLogout = () => setForm(null);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home form={form} />} />
          <Route path="/home" element={<Home form={form} />} />
          <Route path="/dashboard" element={
            form
              ? <Dashboard form={form} completed={completed} setCompleted={setCompleted} onLogout={onLogout} />
              : <Navigate to="/" />
          } />
          <Route path="/mock" element={<MockInterview />} />
          <Route path="/profile" element={<Profile form={form} setForm={setForm} />} />
          <Route path="/resources" element={<Resources form={form} />} />
          <Route path="/resources/interview-tips" element={<InterviewTips form={form} />} />
          <Route path="/resources/aptitude" element={<AptitudePractice form={form} />} />
          <Route path="/resources/dsa" element={<DSARoadmap form={form} />} />
          <Route path="/resources/companies" element={<CompanyGuides form={form} />} />
          <Route path="/resources/faqs" element={<PlacementFAQs form={form} />} />
          <Route path="/community" element={<Community form={form} onLogout={onLogout} />} />
          <Route path="/prep" element={<PlacementPrepration />} />
          <Route path="/upload" element={<ResumeUpload />} />
          <Route path="/resume-analysis" element={<ResumeAnalysis />} />
          <Route path="/company-questions" element={<CompanyQuestions />} />
          <Route path="/progress" element={<Dummy name="📊 Progress Tracker" />} />
          <Route path="/career" element={<Dummy name="🚀 Career Guidance" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
