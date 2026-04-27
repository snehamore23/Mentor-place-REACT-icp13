import { useState } from "react";
import "./Cpp.css";

function Cpp() {
  const topics = [

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