import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = (isSum = false) => {
    setCounter((counter) => (isSum ? counter + 1 : counter - 1));
  };

  return (
    <>
      <p>Vos clickeaste esta cantidad de veces: {counter}</p>
      <button onClick={() => handleClick(true)}>+</button>
      <button onClick={() => handleClick()}>-</button>
    </>
  );
};
