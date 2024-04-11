import React, { useState } from 'react';

const AddTeacher = ({ onAddTeacher }) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [teachingExperience, setTeachingExperience] = useState('');
  const [course, setCourse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTeacher = {
      name,
      dob,
      teachingExperience,
      course,
    };
    onAddTeacher(newTeacher);
    setName('');
    setDob('');
    setTeachingExperience('');
    setCourse('');
  };

  return (
    <div>
      <h2>ADD TEACHER DETAILS:</h2>
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
          <label> Experience:</label>
          <input
            type="text"
            value={teachingExperience}
            onChange={(e) => setTeachingExperience(e.target.value)}
          />
        </div>
        <div>
          <label>Course:</label>
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        <button type="submit">Add Teacher</button>
      </form>
    </div>
  );
};

export default AddTeacher;
