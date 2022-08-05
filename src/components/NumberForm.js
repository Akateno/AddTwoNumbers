import React, {useState} from "react";

function NumberForm ({handleAddPlants}) {
   const[firstnum, setFirstnum]=useState("")
   
   const[secondnum, setSecondnum]=useState("")
  // const[submitData, setSubmitdata]=useState([])

   function handleNumone(event){
     setFirstnum(event.target.value)
   }
 
   function handleNumtwo(event){
     setSecondnum(event.target.value)
   }

  const handleSubmit = (e)=> {
    e.preventDefault();
    fetch("http://localhost:6001/numbers", {
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
    .then((newPlant)=>{
      handleAddPlants(newPlant);
    })
  }

  return (
    <div className="new-plant-form">
      <h2>Submit Two Numbers</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleNumone} value={firstnum} type="number" name="name" placeholder="first number" />
        <input onChange={handleNumtwo} value={secondnum} type="number" name="price"  placeholder="second number" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default NumberForm;

// function handleSubmit(event){
//   event.preventDefault(); 
//   fetch("http://localhost:6001/plants", {
//    method: "POST",
//    headers: {
//      "Content-Type": "application/json",
//    },
//    body: JSON.stringify({
//        name,
//        image, 
//        price
//    }),
//   })