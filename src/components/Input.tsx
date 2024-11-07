import React from 'react'
import './Input.css'

type Props = {
  text: string;
  result: string;
}

const Input:React.FC<Props> = props => {

  const {text, result} = props


return (
    <div className='input-wrapper'>
      <div className='result'>
        <h1>{result || "(0)"}</h1>
      </div>
      <div className='text'>
        <h3>{text || "0"}</h3>
      </div>
      
    </div>
        
  )
}

export default Input