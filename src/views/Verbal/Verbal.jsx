import "./Verbal.css";

function Verbal() {
  const topics = [
    {
      name: "Grammar",
      note: "Grammar defines sentence rules. Important for correct communication. Helps avoid mistakes. Essential for writing. Key skill.",
    },
    {
      name: "Reading Comprehension",
      note: "Improves understanding of passages. Helps in analysis. Practice increases speed. Important for exams. Enhances reading skills.",
    },
    {
      name: "Vocabulary",
      note: "Improves word knowledge. Helps in communication. Learn daily words. Important for interviews. Builds confidence.",
    },
    {
      name: "Sentence Correction",
      note: "Focuses on fixing errors. Improves grammar. Practice required. Enhances clarity. Common exam topic.",
    },
  ];

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