import "./Logical.css";

function Logical() {
    const topics = [
         {
      name: "Puzzles",
      note: "Puzzles improve logical thinking. Require arrangement of data. Helps in reasoning. Practice improves speed. Common in exams.",
    },
    {
      name: "Seating Arrangement",
      note: "Involves placing people logically. Uses diagrams. Improves clarity. Requires attention. Frequently asked.",
    },
    {
      name: "Coding-Decoding",
      note: "Based on pattern recognition. Uses letters and numbers. Improves analytical skills. Practice needed. Important topic.",
    },
    {
      name: "Blood Relations",
      note: "Based on family relations. Requires understanding relationships. Diagrams help solving. Improves logic. Common topic.",
    },
    ];
    return (
        <div className="container">
            <h1>Logical Reasoning</h1>

            {topics.map((t, i) => (
                <div key={i} className="card">
                    <h3>{t.name}</h3>
                    <p>{t.note}</p>
                    <input type="checkbox" onChange={() => toggle(item.name)} />
                    <span> Completed</span>
                </div>
            ))}
        </div>
    );
}
export default Logical;