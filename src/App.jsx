import { useState } from "react";
import Inputhere from "./Functional/Inputhere";
import List from "./Functional/List";

function App() {
  let [todos,SetTodos] =useState(["breakfast","lunch","dinner"])

const addtodos=(value)=>{
  console.log(value);
  
  SetTodos([...todos])
}

  return (
    <div className="container mt-5">
      <Inputhere SetTodos={SetTodos} addtodos={addtodos}/>
      <List todos={todos}/>

    </div>
  );
}

export default App;
