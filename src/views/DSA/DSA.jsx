import { useState } from "react";
import "./DSA.css";

function DSA() {
  const topics = [
     {
      name: "Arrays",
      level: "Easy",
      note: "Arrays store elements in contiguous memory. They allow fast access using index. Useful in searching and sorting problems. Insertion is costly due to shifting. Basic structure for many algorithms.",
    },
  ];
  const [checked, setChecked] = useState({});

  const toggle = (name) => {
    setChecked({ ...checked, [name]: !checked[name] });
  };
  return (
    <div className="container">
      <h1>DSA Preparation</h1>

      {topics.map((item, index) => (
        <div key={index} className="card">
          <h3>{item.name} ({item.level})</h3>
          <p>{item.note}</p>
          <input type="checkbox" onChange={() => toggle(item.name)} />
          <span> Completed</span>
        </div>
      ))}
    </div>
  );
}
export default DSA;