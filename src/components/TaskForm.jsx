import React, { useState, useEffect } from 'react';
import '../css/taskForm.css';

export default function TaskForm({ onFormDataChange, onSubmit }) {
  const [formData, setFormData] = useState({
    taskName: '',
    taskDescription: '',
    completion: ''
  });

  // Update parent component's state whenever the formData changes
  useEffect(() => {
    onFormDataChange(formData);
  }, [formData, onFormDataChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the form from refreshing the page
    onSubmit(); // Calls the parent's submission function
  };

  return (
    <div>
      <div className='formContainer'>
        <h2>CREATE TASK</h2>
        <form onSubmit={handleSubmit}>
          <label>Task name</label><br />
          <input
            type="text"
            name="taskName"
            value={formData.taskName}
            onChange={handleChange}
            required
          />
          <br />
          <label>Task description</label><br />
          <textarea
            name="taskDescription"
            value={formData.taskDescription}
            onChange={handleChange}
            required
          />
          <br />
          <label>Completion</label><br />
          <select
            name="completion"
            value={formData.completion}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <br />
          <button type="submit">Submit Task</button>
        </form>
      </div>
    </div>
  );
}
