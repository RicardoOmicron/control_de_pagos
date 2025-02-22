import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home.jsx';
import Dashboard from '../pages/Dashboard/Dashboard.jsx'; // Asegúrate de tener las páginas necesarias

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* Puedes agregar más rutas aquí */}
    </Routes>
  );
};

export default AppRoutes;
