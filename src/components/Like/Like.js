import React from "react";
import { useState } from "react";

export default function Like() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-row space-x-4 items-center mt-4 mr-0">
      <button className='text-4xl' onClick={() => {setCount(count+1)}}>👍</button>
      <p className='text-4xl'>{count}</p>
      <button className='text-4xl' onClick={() => {setCount(count <= 0 ? 0 : count-1)}}>👎</button>
    </div>
  );
}