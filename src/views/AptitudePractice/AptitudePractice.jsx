import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./AptitudePractice.css";

const topics = [
  { icon: "🔢", title: "Quantitative Aptitude", count: 8, subtopics: ["Number System", "Percentages", "Profit & Loss", "Time & Work", "Speed & Distance", "Simple & Compound Interest", "Ratio & Proportion", "Averages"] },
  { icon: "🧩", title: "Logical Reasoning",     count: 6, subtopics: ["Blood Relations", "Seating Arrangement", "Syllogisms", "Coding-Decoding", "Direction Sense", "Puzzles"] },
  { icon: "📝", title: "Verbal Ability",         count: 5, subtopics: ["Reading Comprehension", "Sentence Correction", "Fill in the Blanks", "Para Jumbles", "Vocabulary"] },
  { icon: "💻", title: "Technical Aptitude",     count: 5, subtopics: ["C Output Questions", "Data Structures MCQ", "DBMS Queries", "OS Concepts", "Networking Basics"] },
];

const practiceQuestions = {
  "Quantitative Aptitude": [
    { q: "A train travels 360 km in 4 hours. What is its speed in m/s?", opts: ["25 m/s", "90 m/s", "100 m/s", "72 m/s"], ans: 0, exp: "360 km/4 hr = 90 km/hr = 90 × (5/18) = 25 m/s" },
    { q: "If 20% of a number is 80, what is 35% of that number?", opts: ["120", "140", "160", "180"], ans: 1, exp: "Number = 80/0.20 = 400. 35% of 400 = 140" },
    { q: "A can do work in 10 days, B in 15 days. Together they finish in?", opts: ["5 days", "6 days", "8 days", "12 days"], ans: 1, exp: "1/10 + 1/15 = 5/30 = 1/6. So 6 days." },
    { q: "What is 15% of 240?", opts: ["30", "36", "40", "45"], ans: 1, exp: "15/100 × 240 = 36" },
    { q: "A shopkeeper buys at ₹80 and sells at ₹100. Profit %?", opts: ["20%", "25%", "15%", "10%"], ans: 1, exp: "Profit = 20, CP = 80. Profit% = 20/80 × 100 = 25%" },
    { q: "Simple interest on ₹1000 at 5% for 2 years?", opts: ["₹50", "₹100", "₹150", "₹200"], ans: 1, exp: "SI = P×R×T/100 = 1000×5×2/100 = ₹100" },
  ],
  "Logical Reasoning": [
    { q: "If A is the brother of B, B is the sister of C. How is A related to C?", opts: ["Brother", "Sister", "Cousin", "Cannot determine"], ans: 0, exp: "A is male (brother), B is female (sister). A is brother of B who is sister of C. So A is brother of C." },
    { q: "In a row of 10, Ravi is 4th from left. What is his position from right?", opts: ["6th", "7th", "8th", "5th"], ans: 1, exp: "Position from right = Total + 1 - Position from left = 10 + 1 - 4 = 7th" },
    { q: "If MANGO is coded as NBNHP, how is APPLE coded?", opts: ["BQQMF", "BQPMF", "CQQMF", "BQQNF"], ans: 0, exp: "Each letter is shifted by +1. A→B, P→Q, P→Q, L→M, E→F = BQQMF" },
    { q: "Pointing to a man, a woman says 'His mother is the only daughter of my mother'. How is the woman related to the man?", opts: ["Mother", "Daughter", "Sister", "Grandmother"], ans: 0, exp: "Only daughter of my mother = myself. So his mother = the woman herself. She is his Mother." },
    { q: "Find the odd one out: 2, 5, 10, 17, 26, 37, 50, 64", opts: ["50", "37", "64", "26"], ans: 2, exp: "Series: 1²+1, 2²+1, 3²+1... = 2,5,10,17,26,37,50,65. So 64 is wrong, should be 65." },
  ],
  "Verbal Ability": [
    { q: "Choose the correct spelling:", opts: ["Accomodate", "Accommodate", "Acommodate", "Acomodate"], ans: 1, exp: "Correct spelling is 'Accommodate' — double c and double m." },
    { q: "Select the antonym of 'BENEVOLENT':", opts: ["Kind", "Generous", "Malevolent", "Charitable"], ans: 2, exp: "Benevolent means kind/generous. Its antonym is Malevolent (wishing harm)." },
    { q: "Fill in the blank: She _____ to the market yesterday.", opts: ["go", "goes", "went", "gone"], ans: 2, exp: "'Yesterday' indicates past tense. Correct form is 'went'." },
    { q: "Choose the synonym of 'ELOQUENT':", opts: ["Silent", "Fluent", "Confused", "Dull"], ans: 1, exp: "Eloquent means fluent and persuasive in speaking." },
    { q: "Identify the correctly punctuated sentence:", opts: ["Its a beautiful day", "It's a beautiful day", "Its' a beautiful day", "It's a beautiful, day"], ans: 1, exp: "It's = It is. Apostrophe used for contraction. 'It's a beautiful day' is correct." },
  ],
  "Technical Aptitude": [
    { q: "What is the output of: int x=5; printf('%d', x++);", opts: ["5", "6", "4", "Error"], ans: 0, exp: "x++ is post-increment. Value is used first (5), then incremented. Output: 5" },
    { q: "Which data structure uses LIFO?", opts: ["Queue", "Stack", "Array", "Tree"], ans: 1, exp: "Stack uses LIFO (Last In First Out). Queue uses FIFO." },
    { q: "What does SQL SELECT statement do?", opts: ["Insert data", "Delete data", "Retrieve data", "Update data"], ans: 2, exp: "SELECT is used to retrieve/fetch data from a database table." },
    { q: "What is the time complexity of Binary Search?", opts: ["O(n)", "O(n²)", "O(log n)", "O(1)"], ans: 2, exp: "Binary Search divides array in half each time. Time complexity = O(log n)." },
    { q: "Which layer of OSI model handles routing?", opts: ["Physical", "Data Link", "Network", "Transport"], ans: 2, exp: "Network layer (Layer 3) handles routing and IP addressing." },
  ],
};

const sampleQuestions = [
  { q: "A train travels 360 km in 4 hours. What is its speed in m/s?", opts: ["25 m/s", "90 m/s", "100 m/s", "72 m/s"], ans: 0, exp: "360 km / 4 hr = 90 km/hr = 90 × (5/18) = 25 m/s" },
  { q: "If 20% of a number is 80, what is 35% of that number?", opts: ["120", "140", "160", "180"], ans: 1, exp: "Number = 80/0.20 = 400. 35% of 400 = 140" },
  { q: "A can do a work in 10 days, B in 15 days. Together they finish in?", opts: ["5 days", "6 days", "8 days", "12 days"], ans: 1, exp: "Combined rate = 1/10 + 1/15 = 5/30 = 1/6. So 6 days." },
];

const AptitudePractice = ({ form }) => {
  const navigate = useNavigate();
  const [selected, setSelected]       = useState({});
  const [revealed, setRevealed]       = useState({});
  const [activeTab, setTab]           = useState("topics");
  const [activeTopic, setActiveTopic] = useState(null);
  const [practiceSelected, setPracticeSelected] = useState({});
  const [practiceRevealed, setPracticeRevealed] = useState({});

  if (!form) return <div className="ap-guard"><p>Please login first.</p><button onClick={() => navigate("/")}>Login</button></div>;

  const score = sampleQuestions.filter((q, i) => selected[i] === q.ans).length;

  const startPractice = (topic) => {
    setActiveTopic(topic);
    setPracticeSelected({});
    setPracticeRevealed({});
  };

  const practiceScore = activeTopic
    ? (practiceQuestions[activeTopic.title] || []).filter((q, i) => practiceSelected[i] === q.ans).length
    : 0;

  // Practice Mode
  if (activeTopic) {
    const questions = practiceQuestions[activeTopic.title] || [];
    return (
      <div className="ap-page">
        <Navbar form={form} onLogout={() => navigate("/")} onProfileClick={() => navigate("/profile")} />
        <div className="ap-hero">
          <div className="ap-hero-badge">{activeTopic.icon} Practice Mode</div>
          <h1>{activeTopic.title}</h1>
          <p>Answer all questions and check your score</p>
          <div className="ap-hero-stats">
            <span>❓ {questions.length} Questions</span>
            <span>✅ Score: {practiceScore}/{questions.length}</span>
          </div>
        </div>
        <div className="ap-body">
          <button className="ap-back-btn" onClick={() => setActiveTopic(null)}>← Back to Topics</button>
          <div className="ap-quiz-header">
            <span>Score: <strong>{practiceScore} / {questions.length}</strong></span>
            <span>Click an option to answer</span>
          </div>
          <div className="ap-quiz">
            {questions.map((q, i) => (
              <div key={i} className="ap-q-card">
                <p className="ap-q-text"><span className="ap-q-num">Q{i + 1}.</span> {q.q}</p>
                <div className="ap-opts">
                  {q.opts.map((opt, j) => (
                    <button
                      key={j}
                      className={`ap-opt
                        ${practiceSelected[i] === j ? (j === q.ans ? "ap-opt-correct" : "ap-opt-wrong") : ""}
                        ${practiceRevealed[i] && j === q.ans ? "ap-opt-correct" : ""}
                      `}
                      onClick={() => setPracticeSelected((p) => ({ ...p, [i]: j }))}
                    >
                      <span className="ap-opt-letter">{String.fromCharCode(65 + j)}</span> {opt}
                    </button>
                  ))}
                </div>
                <button className="ap-reveal-btn" onClick={() => setPracticeRevealed((p) => ({ ...p, [i]: true }))}>
                  {practiceRevealed[i] ? "✅ Explanation" : "Show Explanation"}
                </button>
                {practiceRevealed[i] && <div className="ap-explanation">💡 {q.exp}</div>}
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="ap-page">
      <Navbar form={form} onLogout={() => navigate("/")} onProfileClick={() => navigate("/profile")} />

      <div className="ap-hero">
        <div className="ap-hero-badge">💡 Practice Zone</div>
        <h1>Aptitude Practice Hub</h1>
        <p>Sharpen your problem-solving skills with topic-wise practice and timed quizzes</p>
        <div className="ap-hero-stats">
          <span>📚 4 Topics</span><span>❓ Sample Quiz</span><span>⏱️ Timed Practice</span>
        </div>
      </div>

      <div className="ap-body">
        <div className="ap-tabs">
          {["topics", "quiz"].map((t) => (
            <button key={t} className={`ap-tab ${activeTab === t ? "ap-tab-active" : ""}`} onClick={() => setTab(t)}>
              {t === "topics" ? "📚 Topics" : "❓ Sample Quiz"}
            </button>
          ))}
        </div>

        {activeTab === "topics" ? (
          <>
            <div className="ap-topics-grid">
              {topics.map((t, i) => (
                <div key={i} className="ap-topic-card">
                  <div className="ap-topic-icon">{t.icon}</div>
                  <h3>{t.title}</h3>
                  <span className="ap-topic-count">{t.count} subtopics</span>
                  <div className="ap-subtopics">
                    {t.subtopics.map((s, j) => <span key={j} className="ap-subtopic">{s}</span>)}
                  </div>
                  <button className="ap-practice-btn" onClick={() => startPractice(t)}>
                    Start Practice →
                  </button>
                </div>
              ))}
            </div>

            <div className="ap-tips-box">
              <h3>⚡ Quick Study Tips</h3>
              <div className="ap-tips-grid">
                {["Solve 20 questions daily for 30 days", "Time yourself — aim under 90 sec/question", "Review wrong answers immediately", "Use elimination method for MCQs", "Practice mental math for speed", "Attempt previous year papers"].map((tip, i) => (
                  <div key={i} className="ap-tip-item"><span>💡</span>{tip}</div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="ap-quiz-header">
              <span>Score: <strong>{score} / {sampleQuestions.length}</strong></span>
              <span>Answer all questions and reveal explanations</span>
            </div>
            <div className="ap-quiz">
              {sampleQuestions.map((q, i) => (
                <div key={i} className="ap-q-card">
                  <p className="ap-q-text"><span className="ap-q-num">Q{i + 1}.</span> {q.q}</p>
                  <div className="ap-opts">
                    {q.opts.map((opt, j) => (
                      <button
                        key={j}
                        className={`ap-opt ${selected[i] === j ? (j === q.ans ? "ap-opt-correct" : "ap-opt-wrong") : ""} ${revealed[i] && j === q.ans ? "ap-opt-correct" : ""}`}
                        onClick={() => setSelected((p) => ({ ...p, [i]: j }))}
                      >
                        <span className="ap-opt-letter">{String.fromCharCode(65 + j)}</span> {opt}
                      </button>
                    ))}
                  </div>
                  <button className="ap-reveal-btn" onClick={() => setRevealed((p) => ({ ...p, [i]: true }))}>
                    {revealed[i] ? "✅ Explanation" : "Show Explanation"}
                  </button>
                  {revealed[i] && <div className="ap-explanation">💡 {q.exp}</div>}
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

export default AptitudePractice;
