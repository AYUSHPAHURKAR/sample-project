import React, { useState } from 'react';
import AddStudent from './AddStudent';
import AddTeacher from './AddTeacher';

const App = () => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const handleAddTeacher = (newTeacher) => {
    setTeachers([...teachers, newTeacher]);
  };

  return (
    <div>
      <h1>College Management System</h1>
      <AddStudent onAddStudent={handleAddStudent} />
      <AddTeacher onAddTeacher={handleAddTeacher} />

      <div>
        <h2>STUDENTS LIST</h2>
        {students.length === 0 ? (
          <p>No students added yet.</p>
        ) : (
          <ul>
            {students.map((student, index) => (
              <li key={index}>
                <strong>Name:</strong> {student.name}, <strong>DOB:</strong>{' '}
                {student.dob}, <strong>Course:</strong> {student.courseName},{' '}
                <strong>Fee:</strong> {student.courseFee}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2>TEACHERS LIST</h2>
        {teachers.length === 0 ? (
          <p>No teachers added yet.</p>
        ) : (
          <ul>
            {teachers.map((teacher, index) => (
              <li key={index}>
                <strong>Name:</strong> {teacher.name}, <strong>DOB:</strong>{' '}
                {teacher.dob}, <strong>Experience:</strong>{' '}
                {teacher.teachingExperience}, <strong>Course:</strong>{' '}
                {teacher.course}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
