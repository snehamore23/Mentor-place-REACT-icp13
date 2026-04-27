import { useState } from "react";
import "./Cpp.css";

function Cpp() {
  const topics = [
    {
      name: "OOP Concepts",
      level: "Easy",
      note: "C++ supports object-oriented programming. Includes class and objects. Helps in reusable code. Important for interviews. Core concept.",
    },
    {
      name: "STL",
      level: "Medium",
      note: "STL provides ready data structures. Includes vector, stack, queue. Saves coding time. Used in competitive programming. Important topic.",
    },
    {
      name: "Pointers",
      level: "Hard",
      note: "Pointers work similar to C. Used for memory management. Important for performance. Complex but powerful. Frequently asked.",
    },

  {
      name: "Inheritance",
      level: "Medium",
      note: "Inheritance allows code reuse. Child class inherits parent. Improves design. Important OOP concept. Common in interviews.",
    },
  ];

  const [checked, setChecked] = useState({});

  const toggle = (name) => {
    setChecked({ ...checked, [name]: !checked[name] });
  };

  return(
   <div className="container">
      <h1>C++ Preparation</h1>

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
export default Cpp;