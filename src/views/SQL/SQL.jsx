import { useState } from "react";
import "./SQL.css";

function SQL() {
  const topics = [
{
      name: "Basic Queries",
      level: "Easy",
      note: "SQL is used to interact with database. SELECT is used to fetch data. WHERE filters records. Basic queries are foundation. Important for beginners.",
    },

  ];

  const [checked, setChecked] = useState({});

  const toggle = (name) => {
    setChecked({ ...checked, [name]: !checked[name] });
  };

  return (
    <div className="container">
      <h1>SQL Preparation</h1>

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

export default SQL;