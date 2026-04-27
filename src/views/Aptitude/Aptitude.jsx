import { useState } from "react";
import "./Aptitude.css";

function Aptitude() {
  const topics = [
{
      name: "Number System",
      note: "Number system includes integers and fractions. Helps in divisibility and remainders. Important for basic calculations. Used in many problems. Foundation of aptitude.",
    },
    {
      name: "Percentage",
      note: "Percentage expresses value per 100. Used in profit and loss. Helps in comparison. Shortcut methods improve speed. Common exam topic.",
    },

  ];

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