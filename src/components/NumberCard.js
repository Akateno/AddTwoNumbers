import React, {useState} from "react";

function NumberCard({id, num1, num2, sum}) 
{
 const [stock, setStock]=useState(true)

 function handleStock(){setStock((stock)=> !stock)}

 
  
 


  return (
    <li className="card">
     
      <p>First Number: {num1}</p>
      <p>Second Number {num2}</p>
      <h3>Total: {sum}</h3>
      {stock ? (
        <button onClick={handleStock} className="primary">Click</button>
      ) : (
        <button onClick={handleStock}>Thanks For Clicking :D</button>
      )}
    </li>
  );
}

export default NumberCard;
