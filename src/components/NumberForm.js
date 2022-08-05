import React, {useState} from "react";

function NumberForm ({handleAddNumbers}) {
   const[firstnum, setFirstnum]=useState("")
   
   const[secondnum, setSecondnum]=useState("")
 

   function handleNumone(event){
     setFirstnum(event.target.value)
   }
 
   function handleNumtwo(event){
     setSecondnum(event.target.value)
   }

  const handleSubmit = (e)=> {
    e.preventDefault();
    fetch("http://localhost:4000/numbers", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        firstnum,
        secondnum,
      }),
      

    })
    .then(r=>r.json())
    .then((num)=>{
      handleAddNumbers(num);
    })
  }

  return (
    <div className="new-num-form">
      <h2>Submit Two Numbers</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNumone} value={firstnum} type="number" name="num1" placeholder="first number" />
        <input onChange={handleNumtwo} value={secondnum} type="number" name="num2"  placeholder="second number" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default NumberForm;

