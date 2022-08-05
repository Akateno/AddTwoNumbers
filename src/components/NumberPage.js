import React from "react";
import NumberForm from "./NumberForm";
import NumberList from "./NumberList";


function NumberPage({numList, handleAddPlants}) {

  return (
    <main>
      <NumberForm handleAddPlants={handleAddPlants}/>
      <NumberList numList={numList}/>
    </main>
  );
}

export default NumberPage;
