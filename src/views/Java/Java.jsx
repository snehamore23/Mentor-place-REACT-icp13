import { useState } from "react";
import "./Java.css";

function Java() {
  const topics = [

    {
      name: "OOP Concepts",
      level: "Easy",
      note: "Java is based on object-oriented programming. It uses concepts like class, object, inheritance and polymorphism. Helps in code reusability. Makes code modular and maintainable. Important for interviews.",
    },

    {
      name: "JVM & JRE",
      level: "Medium",
      note: "Java runs on JVM which makes it platform independent. JRE provides runtime environment. Bytecode is executed by JVM. Helps in write once run anywhere concept. Core Java concept.",
    },
    {
      name: "Exception Handling",
      level: "Medium",
      note: "Used to handle runtime errors. Uses try, catch, finally blocks. Prevents program crash. Improves reliability. Important in real-world apps.",
    },
    {
      name: "Collections",
      level: "Hard",
      note: "Java collections store group of objects. Includes List, Set and Map. Provides dynamic data structures. Useful in real-world applications. Frequently asked.",
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