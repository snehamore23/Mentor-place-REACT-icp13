import { useNavigate } from "react-router-dom";
import "./PlacementPreparation.css";

function PlacementPreparation() {
  const navigate = useNavigate();

 const cards = [
{
      title: "DSA",
      desc: "Data Structures & Algorithms (Core for coding)",
      path: "/dsa",
    },
   {
      title: "Aptitude",
      desc: "Quantitative aptitude for first round",
      path: "/aptitude",
    },
    {
      title: "Logical Reasoning",
      desc: "Puzzles & problem solving skills",
      path: "/logical",
    },
    {
      title: "Verbal Ability",
      desc: "Grammar & communication skills",
      path: "/verbal",
    },

    
    {
      title: "C Programming",
      desc: "Basics of C language and logic building",
      path: "/c",
    },
    {
      title: "C++",
      desc: "Object-oriented programming concepts",
      path: "/cpp",
    },
    {
      title: "Java",
      desc: "Core Java and OOP concepts",
      path: "/java",
    },
    {
      title: "Python",
      desc: "Easy syntax and scripting language",
      path: "/python",
    },
    {
      title: "SQL",
      desc: "Database queries and data management",
      path: "/sql",
    },
 ];

 return (
    <div className="container">
      <h1>Placement Preparation</h1>

      <div className="card-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
            onClick={() => navigate(card.path)}
          >
            <h2>{card.title}</h2>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}