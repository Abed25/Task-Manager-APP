import React,{useState, useEffect} from 'react'
import '../css/home.css'
import DynamicDiv from '../components/DynamicDiv'
import Button from '../components/Button'
// firebase imports 
import { db } from '../config/firebase.js'
import { getDocs, collection } from 'firebase/firestore'

function Home() {
  const [taskList, setTaskList] = useState([]);
  const taskCollectionRef = collection(db, "tasks-store")
  useEffect(()=>{
    const getTask = async () =>{
      try{
        const data = await getDocs(taskCollectionRef);
        const filteredData = data.docs.map((doc) => ({...doc.data(),id: doc.id}))
        console.log(filteredData);
        setTaskList(filteredData)
      }
      catch(err){
        console.error(err)
      }
    }
    getTask();
  },[])
  return (
    <div className='homePage'>
        <div className="tasksContainer">
          <h2>Task list</h2>
          {
            taskList.map((task,id) =>(
              <div key={id}>
              <DynamicDiv
              title = {task.taskName}
              description = {task.taskDescription}
              />
              </div>
            )) 
          }
          
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
