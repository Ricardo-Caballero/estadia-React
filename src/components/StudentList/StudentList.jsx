import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [formData, setFormData] = useState({
    controlnumber: '',
    name: '',
    lastname: '',
    carrera: '',
    grupo: ''
  });

  const handleEditClick = (student) => {
    setEditingStudent(student.controlnumber);
    setFormData(student);
  };

  const handleDeleteClick = async (controlnumber) => {
    try {
      await axios.delete(`http://localhost:3000/api/students/delete/${controlnumber}`);
      setStudents(students.filter(student => student.controlnumber !== controlnumber));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateStudent = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/students/updateOne/${formData.controlnumber}`, formData);
      setStudents(students.map(student => (student.controlnumber === formData.controlnumber ? formData : student)));
      setEditingStudent(null); // Close edit mode
    } catch (error) {
      console.error('Error updating student:', error);
    }
  };

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/students/getAll');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="container">
      <h1>Lista de Estudiantes</h1>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th className="table-primary">Matricula</th>
            <th className="table-primary">Nombre</th>
            <th className="table-primary">Correo</th>
            <th className="table-primary">Comentarios</th>
            <th className="table-primary">Nota 1</th>
            <th className="table-primary">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.controlnumber}>
              <td>{student.controlnumber}</td>
              <td>{student.name}</td>
              <td>{student.lastname}</td>
              <td>{student.carrera}</td>
              <td>{student.grupo}</td>
              <td>
                <button onClick={() => handleEditClick(student)}>Editar</button>
                <button onClick={() => handleDeleteClick(student.controlnumber)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingStudent && (
        <form onSubmit={handleUpdateStudent}>
          <h2>Editar Estudiante</h2>
          <input type="text" name="controlnumber" value={formData.controlnumber} readOnly />
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          <input type="text" name="lastname" value={formData.lastname} onChange={handleInputChange} />
          <input type="text" name="carrera" value={formData.carrera} onChange={handleInputChange} />
          <input type="text" name="grupo" value={formData.grupo} onChange={handleInputChange} />
          <button type="submit">Actualizar Estudiante</button>
        </form>
      )}
    </div>
  );
};

export default StudentList;
