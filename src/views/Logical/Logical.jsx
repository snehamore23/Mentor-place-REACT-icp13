import "./Logical.css";

function Logical() {
    const topics = [];
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