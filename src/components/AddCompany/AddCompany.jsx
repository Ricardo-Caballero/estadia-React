import React, { useState } from 'react';
import axios from 'axios'; // Asegúrate de tener axios instalado
import './AddCompany.css'; // Puedes crear un archivo CSS para estilos

const AddCompany = () => {
    const [controlNumber, setControlNumber] = useState('');
    const [nombre, setNombre] = useState('');
    const [logo, setLogo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [requisitos, setRequisitos] = useState('');
    const [ofertas, setOfertas] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Formulario de empresa enviado'); // Para depuración

        const companyData = {
            controlNumber,
            nombre,
            logo,
            descripcion,
            requisitos,
            ofertas,
        };

        try {
            const response = await axios.post('http://localhost:3000/insertEmpresa', companyData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log('Empresa creada:', response.data);
            // Limpiar el formulario
            setControlNumber('');
            setNombre('');
            setLogo('');
            setDescripcion('');
            setRequisitos('');
            setOfertas('');
        } catch (error) {
            console.error('Error:', error);
            // Manejar el error, por ejemplo, mostrando un mensaje al usuario
        }
    };

    return (
        <div className="add-company-container">
            <h2 className="add-company-title">Agregar Nueva Empresa</h2>
            <form className="add-company-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="controlNumber">Número de Control</label>
                    <input
                        type="text"
                        id="controlNumber"
                        value={controlNumber}
                        onChange={(e) => setControlNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre de la Empresa</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="logo">URL del Logo</label>
                    <input
                        type="text"
                        id="logo"
                        value={logo}
                        onChange={(e) => setLogo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="descripcion">Descripción</label>
                    <textarea
                        id="descripcion"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="requisitos">Requisitos</label>
                    <textarea
                        id="requisitos"
                        value={requisitos}
                        onChange={(e) => setRequisitos(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="ofertas">Ofertas</label>
                    <textarea
                        id="ofertas"
                        value={ofertas}
                        onChange={(e) => setOfertas(e.target.value)}
                    />
                </div>
                <button type="submit" className="add-company-button">Agregar Empresa</button>
            </form>
        </div>
    );
};

export default AddCompany;