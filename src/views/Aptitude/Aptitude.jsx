import { useState } from "react";
import "./Aptitude.css";

function Aptitude() {
  const topics = [];

  const [done, setDone] = useState([]);

  const toggle = (topic) => {
    setDone((prev) =>
      prev.includes(topic)
        ? prev.filter((t) => t !== topic)
        : [...prev, topic]
    );
  };

  return (
    <div className="container">
      <h1>Aptitude Preparation</h1>

      {topics.map((t, i) => (
        <div key={i} className="card">
          <h3>{t.name}</h3>
          <p>{t.note}</p>
          <input type="checkbox" onChange={() => toggle(t.name)} />
          <span> Completed</span>
        </div>
      ))}

     
    </div>
  );
}
export default Aptitude;