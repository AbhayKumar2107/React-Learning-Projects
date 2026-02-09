import "./styles.css";
import { useRef, useState, useEffect } from "react";

export default function App() {
  // Use the custom local storage hook here

  const nameInput = useRef();
  const ageInput = useRef();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("name");
    const storedAge = localStorage.getItem("age");

    if (storedName) setName(storedName);
    if (storedAge) setAge(storedAge);
  }, []);

  useEffect(() => {
    if (name) localStorage.setItem("name", name);
  }, [name]);

  useEffect(() => {
    if (age) localStorage.setItem("age", age);
  }, [age]);

  const handleClear = () => {
    nameInput.current.value = "";
    ageInput.current.value = "";
  };

  const handleChange = (e) => {
    e.preventDefault();
    setName(nameInput.current.value);
    setAge(ageInput.current.value);

    handleClear();
  };

  return (
    <div className="App">
      <div id="name">Name -{name}</div>
      <div id="age">Age -{age}</div>
      <form onSubmit={handleChange}>
        <input placeholder="Name" ref={nameInput} />
        <input placeholder="Age" type="number" min="1" ref={ageInput} />
        <button className="btn">Change</button>
      </form>
    </div>
  );
}
