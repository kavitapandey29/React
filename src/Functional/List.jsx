import React from 'react'

export default function List(props) {
  // console.log(props.toDos);
  
  return (
<ul className="list-group">
  {
    props.todos.length>0?props.todos.map((value,index,array)=>{
      return  <li className="list-group-item" key={Math.random}>{value}</li>

  }):<li className="list-group-item">A second item</li>

  }
  
</ul>

  )
}
