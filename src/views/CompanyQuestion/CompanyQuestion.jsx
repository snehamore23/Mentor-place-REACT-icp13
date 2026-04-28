import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./CompanyQuestion.css";

const companies = [
  { name: "TCS",       icon: "💼", color: "#58a6ff" },
  { name: "Infosys",   icon: "💻", color: "#c084fc" },
  { name: "Wipro",     icon: "🚀", color: "#ff9f43" },
  { name: "Accenture", icon: "🌐", color: "#00d68f" },
  { name: "Capgemini", icon: "⚡", color: "#ff6b6b" },
];

const subjects = [
  { name: "C",        icon: "💻" },
  { name: "C++",      icon: "⚙️" },
  { name: "Java",     icon: "☕" },
  { name: "Python",   icon: "🐍" },
  { name: "SQL",      icon: "🗄️" },
  { name: "Aptitude", icon: "🧮" },
];

const questionsData = {
  Java: [
    { q: "What is JVM?", a: "JVM (Java Virtual Machine) is an engine that provides a runtime environment to execute Java bytecode. It converts bytecode into machine language and is platform-independent." },
    { q: "Difference between JDK and JRE?", a: "JDK (Java Development Kit) is used to develop Java applications and includes JRE + compiler + tools. JRE (Java Runtime Environment) is used to run Java programs and includes JVM + libraries." },
    { q: "What is OOP?", a: "OOP (Object-Oriented Programming) is a programming paradigm based on objects. It has 4 pillars: Encapsulation, Inheritance, Polymorphism, and Abstraction." },
    { q: "Explain Inheritance.", a: "Inheritance allows a child class to acquire properties and methods of a parent class. It promotes code reusability. In Java, it is achieved using the 'extends' keyword." },
    { q: "What is Polymorphism?", a: "Polymorphism means 'many forms'. It allows one interface to be used for different data types. Types: Compile-time (method overloading) and Runtime (method overriding)." },
    { q: "What is Encapsulation?", a: "Encapsulation is wrapping data (variables) and methods together in a class. It hides internal details using private access modifiers and exposes via getters/setters." },
    { q: "What is Abstraction?", a: "Abstraction hides implementation details and shows only functionality. Achieved using abstract classes and interfaces in Java." },
    { q: "What is Exception Handling?", a: "Exception handling manages runtime errors using try, catch, finally, throw, and throws. It prevents program crashes and improves reliability." },
    { q: "What are Threads?", a: "A thread is a lightweight sub-process. Java supports multithreading via Thread class and Runnable interface. It allows concurrent execution of tasks." },
    { q: "What is Collections Framework?", a: "Collections Framework provides ready-made data structures like List, Set, Map, Queue. It is in java.util package and simplifies data manipulation." },
    { q: "ArrayList vs LinkedList?", a: "ArrayList uses dynamic array — fast random access, slow insert/delete. LinkedList uses doubly linked list — slow access, fast insert/delete at ends." },
    { q: "Interface vs Abstract class?", a: "Interface has only abstract methods (Java 8+ allows default). Abstract class can have both abstract and concrete methods. A class can implement multiple interfaces but extend only one abstract class." },
    { q: "What is method Overloading?", a: "Method overloading is defining multiple methods with the same name but different parameters in the same class. It is compile-time polymorphism." },
    { q: "What is method Overriding?", a: "Method overriding is redefining a parent class method in a child class with the same signature. It is runtime polymorphism." },
    { q: "What is a Constructor?", a: "A constructor is a special method called when an object is created. It has the same name as the class and no return type. Used to initialize objects." },
  ],
  C: [
    { q: "What is a Pointer?", a: "A pointer is a variable that stores the memory address of another variable. Declared using * symbol. Used for dynamic memory allocation and arrays." },
    { q: "What is a Structure?", a: "A structure is a user-defined data type that groups variables of different types under one name. Declared using 'struct' keyword." },
    { q: "What is malloc()?", a: "malloc() (memory allocation) dynamically allocates a block of memory of specified size in bytes. Returns a void pointer. Part of stdlib.h." },
    { q: "Difference: Array vs Pointer?", a: "Array is a fixed-size collection of same-type elements. Pointer stores address of a variable. Array name acts as a pointer to its first element." },
    { q: "What is Recursion?", a: "Recursion is a function calling itself. It needs a base case to stop. Used in problems like factorial, Fibonacci, tree traversal." },
    { q: "What is a Function?", a: "A function is a block of code that performs a specific task. It promotes reusability. Has return type, name, parameters, and body." },
    { q: "What is a Null Pointer?", a: "A null pointer is a pointer that points to nothing (address 0). Used to indicate that the pointer is not assigned any memory location." },
    { q: "What is File Handling?", a: "File handling allows reading/writing data to files. Uses FILE pointer, fopen(), fclose(), fprintf(), fscanf() functions in C." },
    { q: "What is Dynamic Memory Allocation?", a: "DMA allocates memory at runtime using malloc(), calloc(), realloc(), free(). Memory is allocated from heap. Gives flexibility in memory usage." },
    { q: "Stack vs Heap memory?", a: "Stack stores local variables and function calls — fast, limited size, auto-managed. Heap stores dynamically allocated memory — slower, larger, manually managed." },
    { q: "What is a Macro?", a: "A macro is a preprocessor directive defined using #define. It replaces code before compilation. Used for constants and inline code." },
    { q: "What is a Union?", a: "A union is like a structure but all members share the same memory location. Size equals the largest member. Only one member can hold value at a time." },
    { q: "What is typedef?", a: "typedef creates an alias for an existing data type. Makes code more readable. Example: typedef unsigned int uint;" },
    { q: "What is Segmentation Fault?", a: "Segmentation fault occurs when a program tries to access memory it is not allowed to. Common causes: null pointer dereference, array out of bounds." },
    { q: "What is a Preprocessor?", a: "Preprocessor processes source code before compilation. Handles directives like #include, #define, #ifdef. Output is passed to compiler." },
  ],
  "C++": [
    { q: "What is OOP?", a: "OOP is a paradigm based on objects containing data and methods. C++ supports OOP with classes, inheritance, polymorphism, encapsulation, and abstraction." },
    { q: "What is a Class?", a: "A class is a blueprint for creating objects. It defines data members and member functions. Objects are instances of a class." },
    { q: "What is a Constructor?", a: "A constructor is a special member function called automatically when an object is created. Same name as class, no return type. Initializes object data." },
    { q: "What is a Destructor?", a: "A destructor is called when an object goes out of scope or is deleted. Used to release resources. Prefixed with ~ symbol." },
    { q: "What is Inheritance?", a: "Inheritance allows a derived class to inherit properties of a base class. Types: single, multiple, multilevel, hierarchical, hybrid." },
    { q: "What is Polymorphism?", a: "Polymorphism allows same function to behave differently. Compile-time: function/operator overloading. Runtime: virtual functions." },
    { q: "What is Encapsulation?", a: "Encapsulation binds data and functions together. Uses access specifiers (private, public, protected) to restrict access." },
    { q: "What is Operator Overloading?", a: "Operator overloading allows redefining operators for user-defined types. Example: overloading + to add two objects." },
    { q: "What is a Virtual Function?", a: "A virtual function is declared in base class using 'virtual' keyword. Enables runtime polymorphism. Overridden in derived class." },
    { q: "What is a Friend Function?", a: "A friend function can access private and protected members of a class. Declared using 'friend' keyword inside the class." },
    { q: "What is a Namespace?", a: "Namespace groups related code to avoid name conflicts. std is the standard namespace. Used with :: operator or 'using' directive." },
    { q: "What is a Template?", a: "Templates allow writing generic functions and classes. Function template works with any data type. Reduces code duplication." },
    { q: "What is STL?", a: "STL (Standard Template Library) provides generic classes and functions. Includes containers (vector, list, map), algorithms, and iterators." },
    { q: "C vs C++?", a: "C is procedural, C++ supports OOP. C++ has classes, objects, inheritance, polymorphism. C++ is a superset of C with additional features." },
    { q: "What is Abstraction?", a: "Abstraction hides complex implementation and shows only essential features. Achieved using abstract classes (pure virtual functions) and interfaces." },
  ],
  Python: [
    { q: "What is Python?", a: "Python is a high-level, interpreted, general-purpose programming language. Known for simple syntax, readability, and versatility. Used in web, AI, data science." },
    { q: "What is a List?", a: "A list is an ordered, mutable collection of items. Allows duplicates. Defined using []. Supports indexing, slicing, and various methods." },
    { q: "Tuple vs List?", a: "Tuple is immutable (cannot change), List is mutable. Tuple uses (), List uses []. Tuples are faster and used for fixed data." },
    { q: "What is a Dictionary?", a: "Dictionary is an unordered collection of key-value pairs. Keys are unique. Defined using {}. Accessed using keys. Very fast lookup." },
    { q: "What is a Set?", a: "Set is an unordered collection of unique elements. No duplicates allowed. Defined using {}. Supports union, intersection, difference operations." },
    { q: "What is a Lambda Function?", a: "Lambda is an anonymous function defined using 'lambda' keyword. Can have multiple arguments but only one expression. Used for short, throwaway functions." },
    { q: "What is OOP in Python?", a: "Python supports OOP with classes and objects. Supports inheritance, polymorphism, encapsulation. Uses 'class' keyword and 'self' parameter." },
    { q: "What is a Module?", a: "A module is a file containing Python code (functions, classes, variables). Imported using 'import' statement. Promotes code reusability." },
    { q: "What is a Package?", a: "A package is a directory of Python modules with __init__.py file. Organizes related modules. Imported using dot notation." },
    { q: "What is Exception Handling?", a: "Exception handling uses try, except, else, finally blocks. Catches and handles runtime errors. Prevents program from crashing." },
    { q: "What is a Generator?", a: "Generator is a function that yields values one at a time using 'yield'. Memory efficient. Returns a generator object. Used for large datasets." },
    { q: "What is Recursion?", a: "Recursion is a function calling itself. Needs a base case. Python has default recursion limit of 1000. Used in tree traversal, factorial." },
    { q: "What is File Handling?", a: "File handling uses open(), read(), write(), close() functions. Modes: r, w, a, rb. 'with' statement auto-closes files." },
    { q: "What is Inheritance?", a: "Inheritance allows a child class to inherit from parent class. Python supports multiple inheritance. Uses super() to call parent methods." },
    { q: "What are Decorators?", a: "Decorators modify behavior of functions/classes without changing their code. Defined using @decorator syntax. Used for logging, authentication, caching." },
  ],
  SQL: [
    { q: "What is DBMS?", a: "DBMS (Database Management System) is software to store, retrieve, and manage data. Examples: MySQL, Oracle, PostgreSQL. Provides data security and integrity." },
    { q: "What is SQL?", a: "SQL (Structured Query Language) is used to communicate with relational databases. Used for CRUD operations: Create, Read, Update, Delete." },
    { q: "What is a Primary Key?", a: "Primary key uniquely identifies each record in a table. Cannot be NULL. Only one primary key per table. Can be composite (multiple columns)." },
    { q: "What is a Foreign Key?", a: "Foreign key is a column that references the primary key of another table. Establishes relationship between tables. Ensures referential integrity." },
    { q: "What is a JOIN?", a: "JOIN combines rows from two or more tables based on a related column. Used to fetch data from multiple tables in a single query." },
    { q: "Types of JOINs?", a: "INNER JOIN: matching rows only. LEFT JOIN: all left + matching right. RIGHT JOIN: all right + matching left. FULL JOIN: all rows from both tables." },
    { q: "What is Normalization?", a: "Normalization organizes database to reduce redundancy. Forms: 1NF (atomic values), 2NF (no partial dependency), 3NF (no transitive dependency)." },
    { q: "What is an Index?", a: "Index improves query performance by creating a data structure for fast lookup. Like a book index. Can slow down INSERT/UPDATE operations." },
    { q: "What is a View?", a: "View is a virtual table based on a SELECT query. Does not store data. Used for security, simplifying complex queries, and data abstraction." },
    { q: "What is a Stored Procedure?", a: "Stored procedure is a precompiled set of SQL statements stored in database. Executed using EXEC/CALL. Improves performance and reusability." },
    { q: "What is a Trigger?", a: "Trigger is a stored procedure that automatically executes when a specific event (INSERT, UPDATE, DELETE) occurs on a table." },
    { q: "What is a Transaction?", a: "Transaction is a sequence of SQL operations treated as a single unit. Either all succeed (COMMIT) or all fail (ROLLBACK). Ensures data consistency." },
    { q: "What is ACID?", a: "ACID properties ensure reliable transactions: Atomicity (all or nothing), Consistency (valid state), Isolation (independent), Durability (permanent)." },
    { q: "What is GROUP BY?", a: "GROUP BY groups rows with same values into summary rows. Used with aggregate functions like COUNT, SUM, AVG, MAX, MIN." },
    { q: "HAVING vs WHERE?", a: "WHERE filters rows before grouping. HAVING filters groups after GROUP BY. HAVING can use aggregate functions, WHERE cannot." },
  ],
  Aptitude: [
    { q: "Time & Work problems", a: "If A does work in 'a' days and B in 'b' days, together they finish in (a×b)/(a+b) days. Work = Rate × Time. Practice LCM method for efficiency." },
    { q: "Speed, Distance & Time", a: "Speed = Distance/Time. Distance = Speed × Time. For average speed of two equal distances: 2×S1×S2/(S1+S2). Convert km/h to m/s: multiply by 5/18." },
    { q: "Profit & Loss", a: "Profit% = (Profit/CP)×100. Loss% = (Loss/CP)×100. SP = CP×(100+P%)/100. CP = SP×100/(100+P%). Marked Price and Discount are common variations." },
    { q: "Simple Interest", a: "SI = (P×R×T)/100. P=Principal, R=Rate%, T=Time in years. Amount = P + SI. Used in banking and finance problems." },
    { q: "Compound Interest", a: "CI = P×(1+R/100)^T - P. Amount = P×(1+R/100)^T. CI > SI for same values. Half-yearly: R/2, T×2. Quarterly: R/4, T×4." },
    { q: "Ratio & Proportion", a: "Ratio a:b = a/b. Proportion: a:b = c:d means ad=bc. Direct proportion: y∝x. Inverse proportion: y∝1/x. Used in mixture and partnership problems." },
    { q: "Probability basics", a: "P(E) = Favorable outcomes / Total outcomes. P(E) ranges 0 to 1. P(A∪B) = P(A)+P(B)-P(A∩B). P(A') = 1-P(A). Common: coins, dice, cards." },
    { q: "Permutation & Combination", a: "Permutation (order matters): nPr = n!/(n-r)!. Combination (order doesn't matter): nCr = n!/r!(n-r)!. nCr = nC(n-r). Used in arrangement problems." },
    { q: "Number System", a: "Types: Natural, Whole, Integer, Rational, Irrational. Divisibility rules: 2(even), 3(digit sum÷3), 5(ends 0/5), 9(digit sum÷9). LCM×HCF = Product of two numbers." },
    { q: "Averages", a: "Average = Sum of values / Number of values. Weighted average = (Σwx)/(Σw). If average increases/decreases, find new sum. Common in age and score problems." },
    { q: "Percentages", a: "x% of y = (x×y)/100. % increase = (increase/original)×100. % decrease = (decrease/original)×100. Successive % change: a+b+(ab/100)." },
    { q: "Mixture & Alligation", a: "Alligation rule: (Cheaper qty)/(Dearer qty) = (Dearer-Mean)/(Mean-Cheaper). Used to find ratio of mixing two items to get desired concentration." },
    { q: "Calendar problems", a: "Odd days: Jan=3, Feb=0(normal)/1(leap), Mar=3, Apr=2... A year has 1 odd day (2 in leap year). Century: 100yr=5, 200yr=3, 300yr=1, 400yr=0 odd days." },
    { q: "Clock problems", a: "Minute hand moves 6°/min, Hour hand moves 0.5°/min. Relative speed = 5.5°/min. Angle between hands = |30H - 5.5M|. They coincide every 65.45 minutes." },
    { q: "Data Interpretation", a: "DI involves reading tables, bar graphs, pie charts, line graphs. Steps: Read carefully, identify what is asked, calculate accurately, avoid approximation errors." },
  ],
};

export default function CompanyQuestions({ form, onLogout }) {
  const navigate = useNavigate();
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [openIdx, setOpenIdx] = useState(null);

  if (!form) return (
    <div className="cq-guard">
      <p>Please login first.</p>
      <button onClick={() => navigate("/")}>Login</button>
    </div>
  );

  return (
    <div className="cq-page">
      <Navbar form={form} onLogout={onLogout} onProfileClick={() => navigate("/profile")} />

      <div className="cq-hero">
        <div className="cq-hero-glow" />
        <div className="cq-hero-badge">🚀 Interview Prep</div>
        <h1>Company-Wise Questions</h1>
        <p>Practice subject-wise questions with detailed answers</p>
        <div className="cq-hero-stats">
          <span>🏢 {companies.length} Companies</span>
          <span>📚 {subjects.length} Subjects</span>
          <span>❓ 15 Q&A Each</span>
        </div>
      </div>

      <div className="cq-body">

        {/* Step 1 — Companies */}
        {!selectedCompany && (
          <>
            <div className="cq-section-label">🏢 Select a Company</div>
            <div className="cq-company-grid">
              {companies.map((c, i) => (
                <div key={i} className="cq-company-card" onClick={() => { setSelectedCompany(c); setSelectedSubject(null); setOpenIdx(null); }}>
                  <div className="cq-company-accent" style={{ background: c.color }} />
                  <span className="cq-company-icon">{c.icon}</span>
                  <span className="cq-company-name">{c.name}</span>
                  <span className="cq-company-arrow">→</span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Step 2 — Subjects */}
        {selectedCompany && !selectedSubject && (
          <>
            <div className="cq-breadcrumb">
              <button onClick={() => setSelectedCompany(null)}>← Back</button>
              <span>{selectedCompany.icon} {selectedCompany.name}</span>
            </div>
            <div className="cq-section-label">📚 Select a Subject</div>
            <div className="cq-subject-grid">
              {subjects.map((s, i) => (
                <button key={i} className="cq-subject-btn" onClick={() => { setSelectedSubject(s); setOpenIdx(null); }}>
                  <span>{s.icon}</span>
                  <span>{s.name}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* Step 3 — Questions with Answers */}
        {selectedCompany && selectedSubject && (
          <>
            <div className="cq-breadcrumb">
              <button onClick={() => setSelectedSubject(null)}>← Back</button>
              <span>{selectedCompany.icon} {selectedCompany.name} · {selectedSubject.icon} {selectedSubject.name}</span>
            </div>
            <div className="cq-section-label">❓ Questions & Answers — click to expand</div>
            <div className="cq-questions">
              {(questionsData[selectedSubject.name] || []).map((item, i) => (
                <div key={i} className={`cq-question-item ${openIdx === i ? "cq-q-open" : ""}`}>
                  <div className="cq-q-header" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                    <span className="cq-q-num">Q{i + 1}</span>
                    <span className="cq-q-text">{item.q}</span>
                    <span className="cq-q-arrow">{openIdx === i ? "▲" : "▼"}</span>
                  </div>
                  {openIdx === i && (
                    <div className="cq-q-answer">
                      <span className="cq-ans-label">💡 Answer</span>
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

      </div>
      <Footer />
    </div>
  );
}
