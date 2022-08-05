import React from "react";
import NumberCard from "./NumberCard";

function NumberList({numList}) {
  
  return (
    <ul className="cards">
      {
        numList.map((num)=>(
          <NumberCard
          key={num.id}
          num1={num.firstnum}
          num2={num.secondnum}
          sum={parseInt(num.firstnum,10) + parseInt(num.secondnum,10)}
          />
        ))}

      </ul>
  );
}

export default NumberList;
