import './App.css';

import React, { useEffect, useState } from 'react';
import { GetPartitionIdxRequest } from '../services/partition-index.service';
import { handle } from '../utils/PromiseHandler';
import { CodeExplanation } from './molecules/CodeExplanation';
import { ProblemDefinition } from './molecules/ProblemDefinition';

const App = () => {

  const [inputValue, setInputValue] = useState<string>('');
  const [numbersToSend, setNumbersToSend] = useState<number[]>([]);
  const [numbersToSendAreValid, setNumbersToSendAreValid] = useState(false);
  const [arrayInsertedString, setArrayInsertedString] = useState<string>('');

  //#region Callbacks
  const TryGetPartitionIdx = async () => {
    
    const [response,error] = await handle(GetPartitionIdxRequest(numbersToSend))

    if(error){
      const errorMsg = error.response.data.error;
            
      alert(errorMsg);
      return;
    }

    let msg = '';
    const responseIdx = response.data.data;

    if(responseIdx== -1)
      msg = 'The partition index was not found in the given array';
    else
      msg = `The partition index for the given array is ${responseIdx}`
    
    alert(msg)
  }

  const onChangeInputValue = (evt : any) => {

    const value : string = evt.target.value;

    const valuesInserted : any[] = value.split(',');
    let arrayMsg = '';
    let newNumbersToSend = [];
    let validArray = true;
    
    for (let i = 0; i < valuesInserted.length; i++) {
      const element = valuesInserted[i];
      
      if(!element){
        // Skip is empty
        continue; 
      }

      if(isNaN(element)){ // Stop, i dont need continue to build the array string
        validArray = false;
        break;
      }

      newNumbersToSend.push(element);
    }

    // Set array msg
    if(validArray)
      arrayMsg = `Your array: [${newNumbersToSend.join(',')}]`;
    else
      arrayMsg = 'All given elements must be numbers';
    
    setArrayInsertedString(arrayMsg);
    setNumbersToSendAreValid(validArray);
    setNumbersToSend(newNumbersToSend);
    setInputValue(value);
  }
  //#endregion

  //#region Pre jsx
  const sendBtn = numbersToSendAreValid && numbersToSend.length > 0 ? (
    <button onClick={TryGetPartitionIdx}>Send</button>
  ) : null;
  //#endregion

  return (
    <div className="App App-content">

      {/* Problem definition */}
      <ProblemDefinition />

      <br />

      {/* Test array & send to API*/}
      <div>
        <h2>Try the algorithm by adding numbers separed by coma</h2>
        <input value={inputValue} onChange={onChangeInputValue}/>
        {sendBtn}
        <br/>
        <p className={numbersToSendAreValid ? '' : 'error-msg'}>{arrayInsertedString}</p>
      </div>

      {/* Solution full code */}
      <CodeExplanation />
    </div>
  );
}

export default App;
