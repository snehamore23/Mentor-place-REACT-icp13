import { useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import Card from "../Components/Card.jsx";
import "../style/cq.css";

const CompanyQuestions = () => {
  // 🔹 State
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const companies = ["TCS", "Infosys", "Wipro", "Accenture", "Capgemini"];
  const subjects = ["C", "C++", "Java", "Python", "SQL", "Aptitude"];

  const data = {
    Java: ["JVM?", "JDK?", "OOP?", "Inheritance?", "Polymorphism?", "Encapsulation?", "Abstraction?", "Exception?", "Threads?", "Collections?", "ArrayList?", "Interface?", "Abstract?", "Overloading?", "Overriding?"],
    C: ["Pointer?", "Structure?", "malloc?", "Array?", "Recursion?", "Function?", "Null pointer?", "File handling?", "DMA?", "Stack vs Heap?", "Macro?", "Union?", "typedef?", "Seg fault?", "Preprocessor?"],
    "C++": ["OOP?", "Class?", "Constructor?", "Destructor?", "Inheritance?", "Polymorphism?", "Encapsulation?", "Operator overloading?", "Virtual?", "Friend?", "Namespace?", "Template?", "STL?", "C vs C++?", "Abstraction?"],
    Python: ["Python?", "List?", "Tuple?", "Dict?", "Set?", "Function?", "Lambda?", "OOP?", "Module?", "Package?", "Exception?", "Loop?", "Recursion?", "File handling?", "Inheritance?"],
    SQL: ["DBMS?", "SQL?", "Primary key?", "Foreign key?", "Join?", "Types?", "Normalization?", "Index?", "View?", "Procedure?", "Trigger?", "Transaction?", "ACID?", "Group by?", "Having?"],
    Aptitude: ["Time Work", "Speed", "Profit", "SI", "CI", "Ratio", "Probability", "Permutation", "Number", "Average", "Percentage", "Mixture", "Calendar", "Clock", "DI"]
  };

  return (
    <div>
      <Navbar />
      <h1 className="title">🚀 Placement Preparation Hub</h1>

<!-- Company Cards -->
<div id="companies" class="cards">
  <div class="card">💼 TCS</div>
  <div class="card">💻 Infosys</div>
  <div class="card">🚀 Wipro</div>
  <div class="card">🌐 Accenture</div>
  <div class="card">⚡ Capgemini</div>
</div>

<!-- Subjects -->
<div id="subjects" class="hidden"></div>

<!-- Questions -->
<div id="questions" class="question-box hidden"></div>

<script>


    // Add click to cards dynamically
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    let company = card.innerText.trim();
    showSubjects(company);
  });
});

function showSubjects(company) {
  const subjects = ["C", "C++", "Java", "Python", "SQL", "Aptitude"];

  let html = `<h2>${company} Subjects</h2>`;

  subjects.forEach(sub => {
    html += `<button class="subject-btn" onclick="showQuestions('${company}','${sub}')">${sub}</button>`;
  });

  document.getElementById("subjects").innerHTML = html;
  document.getElementById("subjects").classList.remove("hidden");

  document.getElementById("questions").classList.add("hidden");
}

function showQuestions(company, subject) {

  const data = {
    Java: ["JVM?","JDK?","OOP?","Inheritance?","Polymorphism?","Encapsulation?","Abstraction?","Exception?","Threads?","Collections?","ArrayList?","Interface?","Abstract?","Overloading?","Overriding?"],
    C: ["Pointer?","Structure?","malloc?","Array?","Recursion?","Function?","Null pointer?","File handling?","DMA?","Stack vs Heap?","Macro?","Union?","typedef?","Seg fault?","Preprocessor?"],
    "C++": ["OOP?","Class?","Constructor?","Destructor?","Inheritance?","Polymorphism?","Encapsulation?","Operator overloading?","Virtual?","Friend?","Namespace?","Template?","STL?","C vs C++?","Abstraction?"],
    Python: ["Python?","List?","Tuple?","Dict?","Set?","Function?","Lambda?","OOP?","Module?","Package?","Exception?","Loop?","Recursion?","File handling?","Inheritance?"],
    SQL: ["DBMS?","SQL?","Primary key?","Foreign key?","Join?","Types?","Normalization?","Index?","View?","Procedure?","Trigger?","Transaction?","ACID?","Group by?","Having?"],
    Aptitude: ["Time Work","Speed","Profit","SI","CI","Ratio","Probability","Permutation","Number","Average","Percentage","Mixture","Calendar","Clock","DI"]
  };

  let html = `<h2>${company} - ${subject}</h2><ul>`;

  data[subject].forEach(q => {
    html += `<li>${q}</li>`;
  });

  html += "</ul>";

  document.getElementById("questions").innerHTML = html;
  document.getElementById("questions").classList.remove("hidden");
}

</script>
export default  CompanyQuestions;