import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ ADD
import "../style/Login.css";

export default function Login() {
  const [isSignup, setIsSignup] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate(); // ✅ ADD

 
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };