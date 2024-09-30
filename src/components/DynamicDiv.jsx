import React from 'react'
import Button from './Button'
import "../css/dynamicDiv.css"

export default function DynamicDiv(props) {
  return (
    <div className='container'>
        <h3>{props.title}</h3>
      <p>{props.description}</p>
    <Button 
    title="update"
    style= {{background: "green"}}
    />
    <Button 
    title="delete"
    style= {{background: "red"}}
    />
    </div>
  )
}
