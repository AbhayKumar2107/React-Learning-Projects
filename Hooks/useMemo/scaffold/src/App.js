import React, { useMemo, useState } from "react";
import "./styles.css";

// Recursive Fibonacci (expensive for n > 30)
function fib(n) {
  return n < 2 ? n : fib(n - 1) + fib(n - 2);
}

export default function App() {
  const [n, setN] = useState(35);
  const [temp, setTemp] = useState(0);

  // Use the `useMemo` hook to memoize the result of `fib(n)`
  // so it only re-computes when `n` changes.
  const result = useMemo(() => {
    console.log("Computing Fibonacci");
    return fib(n);
  }, [n]);

  return (
    <div style={{ padding: 16 }} className="fib-calculator">
      <h2>Fibonacci Calculator</h2>
      <div className="fib-input-group">
        <label>
          n:
          <input
            type="number"
            value={n}
            onChange={(e) => setN(Number(e.target.value))}
            style={{ width: 60 }}
          />
        </label>
      </div>
      <p className="fib-result">Result: {result}</p>
      <button className="fib-button" onClick={() => setTemp((t) => t + 1)}>
        Re-render without changing n ({temp})
      </button>
    </div>
  );
}
