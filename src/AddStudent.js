import React, { useState } from 'react';

const AddStudent = ({ onAddStudent }) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [courseName, setCourseName] = useState('');
  const [courseFee, setCourseFee] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      name,
      dob,
      courseName,
      courseFee,
    };
    onAddStudent(newStudent);
    setName('');
    setDob('');
    setCourseName('');
    setCourseFee('');
  };

  return (
    <div>
      <h2>ADD STUDENT DETAILS:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div>
          <label>Course Name:</label>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
          />
        </div>
        <div>
          <label>Course Fee:</label>
          <input
            type="text"
            value={courseFee}
            onChange={(e) => setCourseFee(e.target.value)}
          />
        </div>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudent;
