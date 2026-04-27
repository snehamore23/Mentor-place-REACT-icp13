import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import Home             from "./views/Home/Home";
import Home1            from "./views/Home1/Home1";
import Login            from "./views/Login/Login";
import Dashboard        from "./views/Dashboard/Dashboard";
import MockInterview    from "./views/MockInterview/MockInterview";
import Profile          from "./views/Profile/Profile";
import Resources        from "./views/Resources/Resources";
import InterviewTips    from "./views/InterviewTips/InterviewTips";
import AptitudePractice from "./views/AptitudePractice/AptitudePractice";
import DSARoadmap       from "./views/DSARoadmap/DSARoadmap";
import CompanyGuides    from "./views/CompanyGuides/CompanyGuides";
import PlacementFAQs    from "./views/PlacementFAQs/PlacementFAQs";
import Community        from "./views/Community/Community";
import ResumeUpload     from "./views/ResumeUpload/Resumeupload";
import ResumeAnalysis   from "./views/ResumeAnalysis/ResumeAnalysis";
import CompanyQuestions from "./views/CompanyQuestion/CompanyQuestion";
import ProgressTracker  from "./views/Progresstracker/Progresstracker";
import CareerGuidance   from "./views/CareerGuidance/CareerGuidance";
import PlacementPrep    from "./views/PlacementPrep/PlacementPrep";

const DEFAULT_USER = {
  name: "Aksha Student",
  branch: "CSE",
  year: "3rd Year",
  skills: "React, DSA, Python",
};

const DEFAULT_COMPLETED = {
  resume: false, prep: false, mock: false,
  progress: false, career: false, community: false,
};

const Protected = ({ form, children }) =>
  form ? children : <Navigate to="/login" replace />;

export default function App() {
  const [form, setForm]           = useState(DEFAULT_USER);
  const [completed, setCompleted] = useState(DEFAULT_COMPLETED);

  const onLogout = () => setForm(null);
  const onLogin  = (userData) => setForm(userData || DEFAULT_USER);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/"       element={<Home1 form={form} />} />
          <Route path="/home1"  element={<Home1 form={form} />} />
          <Route path="/home"   element={<Home  form={form} onLogin={onLogin} />} />
          <Route path="/login"  element={<Login onLogin={onLogin} />} />
          <Route path="/signup" element={<Login onLogin={onLogin} />} />

          {/* Protected */}
          <Route path="/dashboard" element={
            <Protected form={form}>
              <Dashboard form={form} completed={completed} setCompleted={setCompleted} onLogout={onLogout} />
            </Protected>
          } />
          <Route path="/profile" element={
            <Protected form={form}>
              <Profile form={form} setForm={setForm} completed={completed} />
            </Protected>
          } />
          <Route path="/resources" element={
            <Protected form={form}><Resources form={form} onLogout={onLogout} /></Protected>
          } />
          <Route path="/resources/interview-tips" element={
            <Protected form={form}><InterviewTips form={form} onLogout={onLogout} /></Protected>
          } />
          <Route path="/resources/aptitude" element={
            <Protected form={form}><AptitudePractice form={form} onLogout={onLogout} /></Protected>
          } />
          <Route path="/resources/dsa" element={
            <Protected form={form}><DSARoadmap form={form} onLogout={onLogout} /></Protected>
          } />
          <Route path="/resources/companies" element={
            <Protected form={form}><CompanyGuides form={form} onLogout={onLogout} /></Protected>
          } />
          <Route path="/resources/faqs" element={
            <Protected form={form}><PlacementFAQs form={form} onLogout={onLogout} /></Protected>
          } />
          <Route path="/community" element={
            <Protected form={form}><Community form={form} onLogout={onLogout} /></Protected>
          } />
          <Route path="/mock" element={
            <Protected form={form}><MockInterview form={form} onLogout={onLogout} /></Protected>
          } />
          <Route path="/upload" element={
            <Protected form={form}><ResumeUpload form={form} onLogout={onLogout} /></Protected>
          } />
          <Route path="/resume-analysis" element={
            <Protected form={form}><ResumeAnalysis form={form} onLogout={onLogout} /></Protected>
          } />
          <Route path="/company-questions" element={
            <Protected form={form}><CompanyQuestions form={form} onLogout={onLogout} /></Protected>
          } />
          <Route path="/progress" element={
            <Protected form={form}><ProgressTracker form={form} completed={completed} onLogout={onLogout} /></Protected>
          } />
          <Route path="/career" element={
            <Protected form={form}><CareerGuidance form={form} onLogout={onLogout} /></Protected>
          } />
          <Route path="/prep" element={
            <Protected form={form}><PlacementPrep form={form} onLogout={onLogout} /></Protected>
          } />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
