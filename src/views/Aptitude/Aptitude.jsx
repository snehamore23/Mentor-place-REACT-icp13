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
     {
      name: "Profit & Loss",
      note: "Deals with cost price and selling price. Calculates profit or loss. Important for business problems. Uses formulas. Frequently asked in exams.",
    },
    {
      name: "Time & Work",
      note: "Focuses on work efficiency. Calculates time taken. Includes combined work problems. Improves logic. Important topic.",
    },
    {
      name: "Speed & Distance",
      note: "Covers motion problems. Uses speed = distance/time. Includes trains and boats. Important formulas. Frequently asked.",
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