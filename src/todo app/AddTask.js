import React, { useState } from 'react'

const AddTask = ({addTask}) => {
    const [value,setValue]=useState('')
    const addItem =()=>{
addTask(value);
    }
  return (
    <div>
        <div>
            <input type='text' placeholder='Enter Your ToDo 'onChange={(e)=>{setValue(e.target.value)}}></input>
            <br/>
            <button onClick={addItem}>Add</button>
        </div>
        
    </div>
  )
}

export default AddTask