import { useState } from "react";
import "./Java.css";

function Java() {
  const topics = [

    {
      name: "OOP Concepts",
      level: "Easy",
      note: "Java is based on object-oriented programming. It uses concepts like class, object, inheritance and polymorphism. Helps in code reusability. Makes code modular and maintainable. Important for interviews.",
    },
  ];

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