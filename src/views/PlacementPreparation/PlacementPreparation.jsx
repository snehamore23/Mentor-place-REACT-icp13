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