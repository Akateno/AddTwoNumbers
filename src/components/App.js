import React, {useEffect, useState} from "react";
import Header from "./Header";
import NumberPage from "./NumberPage";

function App() {

  const [numbers, setNumbers]=useState([])
  // const [search, setSearch]=useState("")
  

  useEffect(()=>{
    fetch("http://localhost:4000/numbers")
    .then((r)=>r.json())
    .then((data)=>setNumbers(data))
  }, [])

  console.log(numbers)

function handleAddNumbers(newnumber){
  setNumbers([...numbers, newnumber])
}
  return (
    <div data-testid="passed-data" className="app">
      <Header/>
      <NumberPage  numList={numbers} handleAddNumbers={handleAddNumbers}/>
    </div>
  );
}

export default App;
