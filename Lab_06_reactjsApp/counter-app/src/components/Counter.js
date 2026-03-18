import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => setCount(0);

  return (
    <div className="container">
      <div className="card">
        <h1>Counter Application</h1>
        <p className="subtitle">Lab Task 1 - React State</p>
        <h2 className="count">{count}</h2>
        <div className="button-group">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
        <p className="note">Count cannot go below 0.</p>
      </div>
    </div>
  );
}

export default Counter;
