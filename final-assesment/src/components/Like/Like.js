import React from "react";
import { useState } from "react";
import "./Like.css";

export default function Like() {
  const [count, setCount] = useState(0);

  return (
    <div className="like">
      <button onClick={() => {setCount(count+1)}}>👍</button>
      <p>{count}</p>
      <button onClick={() => {setCount(count <= 0 ? 0 : count-1)}}>👎</button>
    </div>
  );
}