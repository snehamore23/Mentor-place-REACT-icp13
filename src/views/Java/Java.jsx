import { useState } from "react";
import "./Java.css";

function Java() {
  const topics = [];

 const [checked, setChecked] = useState({});

  const toggle = (name) => {
    setChecked({ ...checked, [name]: !checked[name] });
  };

  return (
    <div className="container">
      <h1>Java Preparation</h1>

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
export default Java;