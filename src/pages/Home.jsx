import React from 'react'
import '../css/home.css'
import DynamicDiv from '../components/DynamicDiv'
import Button from '../components/Button'

function Home() {
  return (
    <div className='homePage'>
        <div className="tasksContainer">
          <h2>Task list</h2>
          <DynamicDiv/>
          <DynamicDiv/>
          <DynamicDiv/>
          <DynamicDiv/>
          <DynamicDiv/>
          <DynamicDiv/>
          <DynamicDiv/>
          <DynamicDiv/>
          <DynamicDiv/>
          <DynamicDiv/>
          <DynamicDiv/>
          <DynamicDiv/>
          <DynamicDiv/>
          <DynamicDiv/>
          <Button 
          title = "Add task"
          style={{
            background: "blue",
            width: "300px",
            height: "30px",
            borderRadius: "4px",
            position: "absolute",
            bottom: "30px",
            margin: " 0 0 0 20%"

          }}
          />
        </div>
        <div className="adminContainer">
          <h2>Task manager</h2>
          <p>Number of tasks: </p>
          <p>Completion rate</p>
          <p>Done:</p>
          <p>Undone:</p>
        </div>
    </div>
  )
}

export default Home
