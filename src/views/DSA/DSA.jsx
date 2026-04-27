import { useState } from "react";
import "./DSA.css";

function DSA() {
  const topics = [
     {
      name: "Arrays",
      level: "Easy",
      note: "Arrays store elements in contiguous memory. They allow fast access using index. Useful in searching and sorting problems. Insertion is costly due to shifting. Basic structure for many algorithms.",
    },
    {
      name: "Linked List",
      level: "Medium",
      note: "Linked list consists of nodes connected by pointers. Memory is not contiguous. Easy insertion and deletion. Types include singly and doubly. Used in dynamic memory management.",
    },
    {
      name: "Stack & Queue",
      level: "Easy",
      note: "Stack follows LIFO and queue follows FIFO. Stack uses push/pop. Queue uses enqueue/dequeue. Used in recursion and scheduling. Important for algorithm design.",
    },

    {
      name: "Trees",
      level: "Medium",
      note: "Trees are hierarchical structures. Root is top node. Used in searching like BST. Helps in organizing data. Used in file systems and databases.",
    },
    {
      name: "Graphs",
      level: "Hard",
      note: "Graphs contain vertices and edges. Used in networks and maps. BFS and DFS are traversal methods. Can be directed or undirected. Important for real-world problems.",
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