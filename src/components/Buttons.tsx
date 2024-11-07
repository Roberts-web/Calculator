import React, { MouseEventHandler } from 'react'
import './Buttons.css'
type Props = {
   symbol?: string;
   color?: string;
   handleClick?: any
}

const Buttons:React.FC<Props> = props => {
   const {symbol, color, handleClick} = props
    
  return (
    <button className='button-wrapper' style={{backgroundColor: color}} onClick={() => handleClick(symbol)}>
      {symbol}
       
    </button>
   
  )
}

export default Buttons