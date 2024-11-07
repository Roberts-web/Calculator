import React, {useCallback, useState} from 'react';
import './App.css';

import Input from './components/Input';
import Buttons from './components/Buttons';

function App() {

  const [text, setText] = useState<string>("")
  const [result, setResult] = useState<string>("")
  const opt = ['+', '-', "/", "*"]

  const addToText = (val:string) => {

    // adding new symbol

    if (opt.includes(val) && opt.includes(text.slice(-1))){
      return
    } else if (opt.includes(val) && text == ""){
      return
    }

    setText((prevText) => prevText + val)
    setResult(result)
    
  }
  //  clear last digit

  const clearLast = () => {
    setText((Text) => Text.slice(0, -1))
  }
  // result 

  const handleResult = () => {
    
    setResult(eval(text.replaceAll(" ", "")).toString())
    setText("")
  }
  

  // clear all characters

  const clearAll = () => {
    setText("")
    setResult("")
  }

  // colors

  const symbolColor = 'rgb(241, 153, 47)';
  const clearColor = 'rgb(191, 108, 7)'


  return (
    <div className="App">
      
        <div className='calculator'>
       
          <Input text={text} result={result}/>
          <div className='row'>
            <Buttons symbol="7" handleClick={addToText}/>
            <Buttons symbol="8" handleClick={addToText}/>
            <Buttons symbol="9" handleClick={addToText}/>
            <Buttons symbol="/" color={symbolColor} handleClick={addToText}/>
          </div>
          <div className='row'>
            <Buttons symbol="6" handleClick={addToText}/>
            <Buttons symbol="5" handleClick={addToText}/>
            <Buttons symbol="4" handleClick={addToText}/>
            <Buttons symbol="*" color={symbolColor} handleClick={addToText}/>
          </div>
          <div className='row'>
            <Buttons symbol="3" handleClick={addToText}/>
            <Buttons symbol="2" handleClick={addToText}/>
            <Buttons symbol="1" handleClick={addToText}/>
            <Buttons symbol="+" color={symbolColor} handleClick={addToText}/>
          </div>
          <div className='row'>
            <Buttons symbol="0" handleClick={addToText}/>
            <Buttons symbol="." handleClick={addToText}/>
            <Buttons symbol="=" handleClick={handleResult}/>
            <Buttons symbol="-" color={symbolColor} handleClick={addToText}/>
          </div>
          <div className='row'>
          <Buttons symbol='C' handleClick={clearLast}/>
          <Buttons symbol='Clear' color={clearColor} handleClick={clearAll}/>
          </div>
      

        </div>

    
    </div>
    
  );
}

export default App;
