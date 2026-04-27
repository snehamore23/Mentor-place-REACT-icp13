import { useState } from "react";
import "./C.css";

function C() {
  const topics = [
      {
      name: "Basics",
      level: "Easy",
      note: "C is a procedural language. Used for system programming. Provides low-level access. Foundation for other languages. Important for logic building.",
    },
    {
      name: "Pointers",
      level: "Hard",
      note: "Pointers store memory addresses. Used for dynamic memory. Important for performance. Complex but powerful. Frequently asked.",
    },
    {
      name: "Functions",
      level: "Medium",
      note: "Functions help in modular programming. Improve code reuse. Defined with return type. Important concept. Used in all programs.",
    },
    {
      name: "Structures",
      level: "Medium",
      note: "Structures group different data types. Used for complex data. Helps in organization. Important in real applications. Common topic.",
    },
  ];
  return(
    <div className="container">
      <h1>C Programming</h1>

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
export default C;