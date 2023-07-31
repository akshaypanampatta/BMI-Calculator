import React, { useState } from 'react'

function Employ() {
  const [count,setCount]=useState(0)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Add</button>
      <h1>My name is aaaakk: {count}</h1>
    </div>
  )
}

export default Employ