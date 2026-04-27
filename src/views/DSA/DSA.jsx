import { useState } from "react";
import "./DSA.css";

function DSA() {
  const topics = [];
  const [checked, setChecked] = useState({});

  const toggle = (name) => {
    setChecked({ ...checked, [name]: !checked[name] });
  };
  return(
    <div><h1>DSA Preparation</h1></div>
  )
}
export default DSA;