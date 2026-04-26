import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({ name: "", branch: "", year: "", skills: "", email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const e = {};
    if (isSignup && !form.name.trim())   e.name   = "Name is required";
    if (isSignup && !form.branch.trim()) e.branch = "Branch is required";
    if (isSignup && !form.year.trim())   e.year   = "Year is required";
    if (!form.email.trim())              e.email  = "Email is required";
    else if (!form.email.includes("@")) e.email  = "Enter valid email";
    if (!form.password.trim())           e.password = "Password is required";
    else if (form.password.length < 6)  e.password = "Min 6 characters";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    if (isSignup) {
      onLogin?.({ name: form.name, branch: form.branch, year: form.year, skills: form.skills });
    } else {
      onLogin?.({ name: "Student", branch: "CSE", year: "3rd Year", skills: "React, DSA" });
    }
    navigate("/home");
  };

  return (
    <div className="lg-page">
      <div className="lg-glow lg-glow-1" />
      <div className="lg-glow lg-glow-2" />

      <div className="lg-card">
        <div className="lg-logo" onClick={() => navigate("/")}>🎓 Placement<strong>Pro</strong></div>

        <div className="lg-tabs">
          <button className={`lg-tab ${!isSignup ? "lg-tab-active" : ""}`} onClick={() => setIsSignup(false)}>Login</button>
          <button className={`lg-tab ${isSignup  ? "lg-tab-active" : ""}`} onClick={() => setIsSignup(true)}>Sign Up</button>
        </div>

        <h2 className="lg-title">{isSignup ? "Create Account 🚀" : "Welcome Back 👋"}</h2>
        <p className="lg-sub">{isSignup ? "Join 500+ students preparing smarter" : "Continue your placement journey"}</p>

        <form onSubmit={handleSubmit} className="lg-form">
          {isSignup && (
            <>
              <div className="lg-field">
                <label>Full Name</label>
                <input name="name" placeholder="Aksha Sanap" value={form.name} onChange={handleChange} />
                {errors.name && <span className="lg-error">{errors.name}</span>}
              </div>
              <div className="lg-row">
                <div className="lg-field">
                  <label>Branch</label>
                  <input name="branch" placeholder="CSE" value={form.branch} onChange={handleChange} />
                  {errors.branch && <span className="lg-error">{errors.branch}</span>}
                </div>
                <div className="lg-field">
                  <label>Year</label>
                  <select name="year" value={form.year} onChange={handleChange}>
                    <option value="">Select</option>
                    <option>1st Year</option>
                    <option>2nd Year</option>
                    <option>3rd Year</option>
                    <option>4th Year</option>
                  </select>
                  {errors.year && <span className="lg-error">{errors.year}</span>}
                </div>
              </div>
              <div className="lg-field">
                <label>Skills (optional)</label>
                <input name="skills" placeholder="React, DSA, Python" value={form.skills} onChange={handleChange} />
              </div>
            </>
          )}

          <div className="lg-field">
            <label>Email</label>
            <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
            {errors.email && <span className="lg-error">{errors.email}</span>}
          </div>
          <div className="lg-field">
            <label>Password</label>
            <input type="password" name="password" placeholder="••••••••" value={form.password} onChange={handleChange} />
            {errors.password && <span className="lg-error">{errors.password}</span>}
          </div>

          <button type="submit" className="lg-btn">{isSignup ? "Create Account →" : "Login →"}</button>
        </form>

        <p className="lg-toggle">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <span onClick={() => setIsSignup(!isSignup)}>{isSignup ? " Login" : " Sign Up"}</span>
        </p>
      </div>
    </div>
  );
}
