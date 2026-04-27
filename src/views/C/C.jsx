import { useState } from "react";
import "./C.css";

function C() {
  const topics = [
     {
      name: "Basics",
      level: "Easy",
      note: "C is a procedural language. Used for system programming. Provides low-level access. Foundation for other languages. Important for logic building.",
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