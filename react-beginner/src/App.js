import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [couter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("I run olny once");
  }, []);
  useEffect(() => {
    console.log("I run when 'keyword' change ");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' change ");
  }, [couter]);
  useEffect(() => {
    console.log("Irun when 'keyword' && 'counter' change");
  }, [keyword, couter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
      <h1 className={styles.title}>{couter}</h1>
      <button onClick={onClick}>증가</button>
    </div>
  );
}

export default App;
