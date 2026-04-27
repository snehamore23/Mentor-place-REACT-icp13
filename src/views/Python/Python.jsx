import { useState } from "react";
import "./Python.css";

function Python() {
  const topics = [
{
      name: "Basics",
      level: "Easy",
      note: "Python is easy to learn language. It has simple syntax. Used in automation and scripting. Supports multiple paradigms. Popular among beginners.",
    },
{
      name: "Data Types",
      level: "Easy",
      note: "Includes list, tuple, set and dictionary. Used to store data. Mutable and immutable types exist. Important for problem solving. Frequently used.",
    },
    {
      name: "Functions",
      level: "Medium",
      note: "Functions help reuse code. Defined using def keyword. Can return values. Improves readability. Important concept.",
    },
    {
      name: "Libraries",
      level: "Hard",
      note: "Python has many libraries like NumPy and Pandas. Used in data science. Simplifies tasks. Saves time. Widely used in industry.",
    },
  ];
  const [checked, setChecked] = useState({});

  const toggle = (name) => {
    setChecked({ ...checked, [name]: !checked[name] });
  };

  return (
    <div className="container">
      <h1>Python Preparation</h1>

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

export default Python;