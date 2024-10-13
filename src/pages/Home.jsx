import React, { useState, useEffect } from 'react';
import '../css/home.css';
import DynamicDiv from '../components/DynamicDiv';
import Button from '../components/Button';
import TaskForm from '../components/TaskForm.jsx';
// firebase imports 
import { db } from '../config/firebase.js';
import { getDocs, collection } from 'firebase/firestore';

function Home() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState({
    taskName: '',
    taskDescription: '',
    completion: ''
  });

  const taskCollectionRef = collection(db, "tasks-store");

  useEffect(() => {
    const getTask = async () => {
      try {
        const data = await getDocs(taskCollectionRef);
        const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setTaskList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getTask();
  }, []);

  // Function to handle form data change from TaskForm
  const handleFormDataChange = (formData) => {
    setNewTask(formData);
  };

  // Function to submit the new task
  const handleSubmitTask = () => {
    console.log('New Task Data:', newTask);
    // You can add logic here to update the Firebase store with newTask
  };

  return (
    <div className='homePage'>
      <div className="tasksContainer">
        <h2>Task list</h2>
        {
          taskList.map((task, id) => (
            <div key={id}>
              <DynamicDiv
                title={task.taskName}
                description={task.taskDescription}
              />
            </div>
          ))
        }

        <DynamicDiv
          title="React test"
          description="This is a react test"
        />
      </div>
      <div className="adminContainer">
        <h2>Task manager</h2>
        <p>Number of tasks: {taskList.length}</p>
        <p>Completion rate</p>
        <p>Done:</p>
        <p>Undone:</p>
      </div>

      {/* Pass the handleFormDataChange function to TaskForm */}
      <TaskForm onFormDataChange={handleFormDataChange} onSubmit={handleSubmitTask} />
    </div>
  );
}

export default Home;
