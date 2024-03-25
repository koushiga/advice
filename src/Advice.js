import React, { useState } from 'react'
import './Advice.css';

const Advice = () => {

    const[advice,setAdvice]=useState("Your Advice is here");
    const[count,setCount]=useState(0);

    async function getAdvice(){
        const fet=await fetch("https://api.adviceslip.com/advice");
        const data= await fet.json();

        setAdvice(data.slip.advice);
        setCount((e)=>e + 1);
    }

  return (
    <div className='advice'>
        <h2>{advice}</h2>
        <button onClick={getAdvice}>Get Advice</button>
        <h5>You Have Read <b>{count}</b> Advices</h5>
    </div>
  )
}

export default Advice