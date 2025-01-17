import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'font-awesome/css/font-awesome.min.css';
import './App.css'


import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import StudentList from './components/StudentList/StudentList'
import MainContent from './components/MainContent/MainContent';
import Catalogo from './components/Catalogo/Catalogo';
import AddCompany from './components/AddCompany/AddCompany';
import CompanyList from './components/CompanyList/CompanyList';


function App() {
  
   
  return (
    <Router>
      <div className='principal'>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/add-company" element={<AddCompany />} />
          <Route path="/student-list" element={<StudentList />} />
          <Route path="/company-list" element={<CompanyList />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
