// src/Register.jsx

import React, { useState } from 'react';
import axios from 'axios';
import './Registro.css'; // Importar el archivo CSS para estilos

const Register = () => {
    const [controlNumber, setControlNumber] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [carrera, setCarrera] = useState('');
    const [grupo, setGrupo] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Formulario enviado'); // Para depuración

        const studentData = {
            controlnumber: controlNumber,
            name,
            lastname,
            carrera,
            grupo,
        };

        try {
            const response = await axios.post('http://localhost:3000/api/students/insert', studentData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Estudiante creado:', response.data);
            // Limpiar el formulario
            setControlNumber('');
            setName('');
            setLastname('');
            setCarrera('');
            setGrade('');
        } catch (error) {
            console.error('Error:', error);
            // Manejar el error, por ejemplo, mostrando un mensaje al usuario
        }
    };

    return (
        <div className="register-container">
            <h2 className="register-title">Registrar Nuevo Alumno</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="controlNumber">Matrícula</label>
                    <input
                        type="text"
                        id="controlNumber"
                        value={controlNumber}
                        onChange={(e) => setControlNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                

                <div className="form-group">
                    <label htmlFor="lastname">Correo</label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="carrera">Comentarios</label>
                    <input
                        type="text"
                        id="carrera"
                        value={carrera}
                        onChange={(e) => setCarrera(e.target.value)}
                        required
                    />
                </div>
                
                
                
                <button type="submit" className="register-button">Registrar</button>
            </form>
        </div>
    );
};

export default Register;