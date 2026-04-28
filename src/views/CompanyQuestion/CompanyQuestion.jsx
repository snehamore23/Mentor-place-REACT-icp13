import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./CompanyQuestion.css";

const subjects = ["C", "C++", "Java", "Python", "SQL", "Aptitude"];

const questionsData = {
  Java:      ["What is JVM?", "Difference between JDK and JRE?", "What is OOP?", "Explain Inheritance.", "What is Polymorphism?", "What is Encapsulation?", "What is Abstraction?", "What is Exception Handling?", "What are Threads?", "What is Collections Framework?", "ArrayList vs LinkedList?", "Interface vs Abstract class?", "What is method Overloading?", "What is method Overriding?", "What is a Constructor?"],
  C:         ["What is a Pointer?", "What is a Structure?", "What is malloc()?", "Difference: Array vs Pointer?", "What is Recursion?", "What is a Function?", "What is a Null Pointer?", "What is File Handling?", "What is Dynamic Memory Allocation?", "Stack vs Heap memory?", "What is a Macro?", "What is a Union?", "What is typedef?", "What is Segmentation Fault?", "What is a Preprocessor?"],
  "C++":     ["What is OOP?", "What is a Class?", "What is a Constructor?", "What is a Destructor?", "What is Inheritance?", "What is Polymorphism?", "What is Encapsulation?", "What is Operator Overloading?", "What is a Virtual Function?", "What is a Friend Function?", "What is a Namespace?", "What is a Template?", "What is STL?", "C vs C++?", "What is Abstraction?"],
  Python:    ["What is Python?", "What is a List?", "Tuple vs List?", "What is a Dictionary?", "What is a Set?", "What is a Lambda Function?", "What is OOP in Python?", "What is a Module?", "What is a Package?", "What is Exception Handling?", "What is a Generator?", "What is Recursion?", "What is File Handling?", "What is Inheritance?", "What is Decorators?"],
  SQL:       ["What is DBMS?", "What is SQL?", "What is a Primary Key?", "What is a Foreign Key?", "What is a JOIN?", "Types of JOINs?", "What is Normalization?", "What is an Index?", "What is a View?", "What is a Stored Procedure?", "What is a Trigger?", "What is a Transaction?", "What is ACID?", "What is GROUP BY?", "HAVING vs WHERE?"],
  Aptitude:  ["Time & Work problems", "Speed, Distance & Time", "Profit & Loss", "Simple Interest", "Compound Interest", "Ratio & Proportion", "Probability basics", "Permutation & Combination", "Number System", "Averages", "Percentages", "Mixture & Alligation", "Calendar problems", "Clock problems", "Data Interpretation"],
};

const companies = [
  { name: "TCS",        icon: "🔵" },
  { name: "Infosys",    icon: "🟢" },
  { name: "Wipro",      icon: "🟡" },
  { name: "Accenture",  icon: "🟣" },
  { name: "Capgemini",  icon: "🔴" },
];

const CompanyQuestions = ({ form }) => {
  const navigate = useNavigate();
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  if (!form) return (
    <div className="cq-guard">
      <p>Please login first.</p>
      <button onClick={() => navigate("/")}>Login</button>
    </div>
  );

  return (
    <div className="cq-page">
      <Navbar form={form} onLogout={() => navigate("/")} onProfileClick={() => navigate("/profile")} />

      {/* Hero */}
      <div className="cq-hero">
        <div className="cq-hero-badge">🚀 Interview Prep</div>
        <h1>Company-Wise Questions</h1>
        <p>Practice subject-wise questions asked by top placement companies</p>
        <div className="cq-hero-stats">
          <span>🏢 {companies.length} Companies</span>
          <span>📚 {subjects.length} Subjects</span>
          <span>❓ 15 Questions Each</span>
        </div>
      </div>

      <div className="cq-body">

        {/* Step 1 — Company */}
        {!selectedCompany && (
          <>
            <div className="cq-section-label">🏢 Select a Company</div>
            <div className="cq-company-grid">
              {companies.map((c, i) => (
                <div key={i} className="cq-company-card" onClick={() => setSelectedCompany(c)}>
                  <span className="cq-company-icon">{c.icon}</span>
                  <span className="cq-company-name">{c.name}</span>
                  <span className="cq-company-arrow">→</span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Step 2 — Subject */}
        {selectedCompany && !selectedSubject && (
          <>
            <div className="cq-breadcrumb">
              <button onClick={() => setSelectedCompany(null)}>← Back</button>
              <span>{selectedCompany.icon} {selectedCompany.name}</span>
            </div>
            <div className="cq-section-label">📚 Select a Subject</div>
            <div className="cq-subject-grid">
              {subjects.map((s, i) => (
                <button key={i} className="cq-subject-btn" onClick={() => setSelectedSubject(s)}>{s}</button>
              ))}
            </div>
          </>
        )}

        {/* Step 3 — Questions */}
        {selectedCompany && selectedSubject && (
          <>
            <div className="cq-breadcrumb">
              <button onClick={() => setSelectedSubject(null)}>← Back</button>
              <span>{selectedCompany.icon} {selectedCompany.name} · {selectedSubject}</span>
            </div>
            <div className="cq-section-label">❓ Questions</div>
            <div className="cq-questions">
              {questionsData[selectedSubject].map((q, i) => (
                <div key={i} className="cq-question-item">
                  <span className="cq-q-num">Q{i + 1}</span>
                  <span className="cq-q-text">{q}</span>
                </div>
              ))}
            </div>
          </>
        )}

      </div>
      <Footer />
    </div>
  );
};

export default CompanyQuestions;
