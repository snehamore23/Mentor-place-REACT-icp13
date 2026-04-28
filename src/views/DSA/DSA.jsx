import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./DSA.css";

const topics = [
  { name: "Arrays",        level: "Easy",   color: "#58a6ff", note: "Arrays store elements in contiguous memory. They allow fast access using index. Useful in searching and sorting problems. Insertion is costly due to shifting. Basic structure for many algorithms." },
  { name: "Linked List",   level: "Medium", color: "#c084fc", note: "Linked list consists of nodes connected by pointers. Memory is not contiguous. Easy insertion and deletion. Types include singly and doubly. Used in dynamic memory management." },
  { name: "Stack & Queue", level: "Easy",   color: "#ff9f43", note: "Stack follows LIFO and queue follows FIFO. Stack uses push/pop. Queue uses enqueue/dequeue. Used in recursion and scheduling. Important for algorithm design." },
  { name: "Trees",         level: "Medium", color: "#00d68f", note: "Trees are hierarchical structures. Root is top node. Used in searching like BST. Helps in organizing data. Used in file systems and databases." },
  { name: "Graphs",        level: "Hard",   color: "#ff6b6b", note: "Graphs contain vertices and edges. Used in networks and maps. BFS and DFS are traversal methods. Can be directed or undirected. Important for real-world problems." },
];

export default function DSA({ form, onLogout }) {
  const navigate = useNavigate();
  const [checked, setChecked] = useState({});
  const toggle = (name) => setChecked((p) => ({ ...p, [name]: !p[name] }));

  return (
    <div className="subj-page">
      <Navbar form={form} onLogout={onLogout} onProfileClick={() => navigate("/profile")} />
      <div className="subj-hero">
        <div className="subj-hero-glow" />
        <div className="subj-badge">🧠 DSA</div>
        <h1>DSA Preparation</h1>
        <p>Data Structures & Algorithms — Core for coding rounds</p>
        <div className="subj-hero-stats">
          <span>📚 {topics.length} Topics</span>
          <span>✅ {Object.values(checked).filter(Boolean).length} Done</span>
        </div>
      </div>
      <div className="subj-body">
        {topics.map((t, i) => (
          <div key={i} className={`subj-card ${checked[t.name] ? "subj-card-done" : ""}`}>
            <div className="subj-card-accent" style={{ background: t.color }} />
            <div className="subj-card-top">
              <h3 className="subj-card-title">{t.name}</h3>
              <span className={`subj-level subj-level-${t.level.toLowerCase()}`}>{t.level}</span>
            </div>
            <p className="subj-card-note">{t.note}</p>
            <label className="subj-check">
              <input type="checkbox" checked={!!checked[t.name]} onChange={() => toggle(t.name)} />
              <span>{checked[t.name] ? "✅ Completed" : "Mark as Done"}</span>
            </label>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
