import React from "react";
import NumberForm from "./NumberForm";
import NumberList from "./NumberList";


function NumberPage({numList, handleAddNumbers}) {

  return (
    <main>
      <NumberForm handleAddNumbers={handleAddNumbers}/>
      <NumberList numList={numList}/>
    </main>
  );
}

export default NumberPage;
