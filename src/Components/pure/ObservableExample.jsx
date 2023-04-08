import React, { useState } from "react";
import { getNumbers } from "../../services/observableService";
const ObservableExample = () => {
  const [number, setNumber] = useState(0);
console.log('Subscrition to Observable');
  const obtainNewNumber = () => {
    getNumbers.subscribe(
        {
            next(newNumber){
                console.log(`New Number:`, newNumber);
                setNumber(newNumber);
            },
            error(error){
                alert(`Something went wrong: ${error}`)
            },
            complete(){
                alert(`Finishend: ${number}`)
            }
        }
    )
    console.log('Finishend Subscrition to Observable');

  };
  return <div>
<h1>Number: {number}</h1>
<button onClick={obtainNewNumber}>
    Obtain new Numbers
</button>
  </div>;
};

export default ObservableExample;
