import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CompanyList.css'

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [editingCompany, setEditingCompany] = useState(null);
  const [formData, setFormData] = useState({
    controlNumber: '',
    nombre: '',
    logo: '',
    descripcion: '',
    requisitos: '',
    ofertas: ''
  });

  const handleEditClick = (company) => {
    setEditingCompany(company.controlNumber);
    setFormData(company); // Cargar los datos de la empresa en el formulario
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateCompany = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/updateEmpresa/${formData.controlNumber}`, formData);
      setCompanies(companies.map(company => (company.controlNumber === formData.controlNumber ? formData : company)));
      setEditingCompany(null); // Cerrar el modo de edición
    } catch (error) {
      console.error('Error updating company:', error);
    }
  };


  const handleDeleteClick = async (controlNumber) => {
    try {
      const response = await axios.delete(`http://localhost:3000/deleteOne/${controlNumber}`);
      // Filtra la empresa eliminada de la lista
      setCompanies(companies.filter(company => company.controlNumber !== controlNumber));
      alert('Empresa eliminada correctamente');
    } catch (error) {
      console.error('Error eliminando empresa:', error);
      alert('Error al eliminar la empresa');
    }
  };
  

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getAllEmpresas');
        setCompanies(response.data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div className="container">
      <h1>Lista de Empresas</h1>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <th className='table-primary'>Número de Control</th>
            <th className='table-primary'>Nombre</th>
            <th className='table-primary'>Logo</th>
            <th className='table-primary'>Descripción</th>
            <th className='table-primary'>Requisitos</th>
            <th className='table-primary'>Ofertas</th>
            <th className='table-primary'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.controlNumber}>
              <td>{company.controlNumber}</td>
              <td>{company.nombre}</td>
              <td>{company.logo}</td>
              <td>{company.descripcion}</td>
              <td>{company.requisitos}</td>
              <td>{company.ofertas}</td>
              <td>
              <button onClick={() => handleEditClick(company)} className="btn-edit">Editar</button>
              <button onClick={() => handleDeleteClick(company.controlNumber)} className="btn-delete">Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingCompany && (
        <form onSubmit={handleUpdateCompany}>
          <h2>Editar Empresa</h2>
          <input type="text" name="controlNumber" value={formData.controlNumber} readOnly />
          <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} />
          <input type="text" name="logo" value={formData.logo} onChange={handleInputChange} />
          <textarea name="descripcion" value={formData.descripcion} onChange={handleInputChange} />
          <textarea name="requisitos" value={formData.requisitos} onChange={handleInputChange} />
          <textarea name="ofertas" value={formData.ofertas} onChange={handleInputChange} />
          <button type="submit">Actualizar Empresa</button>
        </form>
      )}
    </div>
  );
};

export default CompanyList;