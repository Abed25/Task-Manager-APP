import React from 'react'
import Button from './Button'
import "../css/dynamicDiv.css"

export default function DynamicDiv(props) {
  return (
    <div className='container'>
        <h3>Task title</h3>
      <p>Task's little description</p>
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
