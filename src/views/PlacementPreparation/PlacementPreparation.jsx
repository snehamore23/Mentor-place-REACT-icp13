import { useNavigate } from "react-router-dom";
import "./PlacementPreparation.css";

function PlacementPreparation() {
  const navigate = useNavigate();

 const cards = [

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