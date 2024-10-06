import React, { useState } from 'react'

export default function Inputhere() {
  let [todos,SetTodos] =useState([""])

  const change=(event)=>{
    SetTodos(event.target.value);
    
  }

  const submit=(event)=>{
    event.preventDefault()
    console.log(todos);
    
  }
  return (
    <div>
<form className="row g-3" onSubmit={submit}>
  <div className="col-10">

    <input type="text"
     className="form-control" 
     id="staticEmail2" 
     placeholder="Enter Todos" 
     value={todos}
     onChange={change}>
  
     
     </input>
  </div>
  <div className="col-2">
    <button type="submit" 
    className="btn btn-primary mb-3">Add</button>
  </div>
</form>

    </div>
  )
}
