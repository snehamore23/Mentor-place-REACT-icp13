import "./Verbal.css";

function Verbal() {
  const topics = [];

  return( 
 <div className="container">
      <h1>Verbal Ability</h1>

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
export default Verbal;