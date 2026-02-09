import React, { useCallback, useState} from "react";
import "./styles.css";

// Wrap in React.memo to shallow‑compare props
const Button = React.memo(function Button({ onClick, label }) {
  console.log("Button render — label:", label);
  return (
    <button className="counter-button" onClick={onClick}>
      {label}
    </button>
  );
});

export default function App() {
  const [count, setCount] = useState(0);

  console.log("Counter render — count:", count);

  // Memoize the handler so it keeps the same reference
  const increment = useCallback(() => setCount((c) => c + 1),[]);

  return (
    <div className="counter-container">
      <p className="counter-display">Count: {count}</p>
      <Button onClick={increment} label="Increment" />
    </div>
  );
}
