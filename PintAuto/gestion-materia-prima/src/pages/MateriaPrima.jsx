import materiaPrimaService from '../services/materiaPrimaService';
import { useEffect, useState } from 'react';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiEdit, FiTrash2 } from 'react-icons/fi'



const MateriaPrima = () => {
  const [materiaPrima, setMateriaPrima] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const cargarMaterias = async () => {
    try {
      const res = await materiaPrimaService.obtenerTodas();
      setMateriaPrima(res.datos.materias); // asegúrate de que la estructura del backend es correcta
    } catch (error) {
      console.error('Error al cargar materias primas:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    cargarMaterias();
  }, []);


    const handleDelete = async (id) => {
    try {
      await materiaPrimaService.eliminar(id);
      setMateriaPrima(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error('Error al eliminar materia:', error);
    }
  }

  if (loading) return <p>Cargando materias primas...</p>

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate('/')}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition"
        >
          Volver al Inicio
        </button>
        <h2 className="text-2xl font-semibold text-gray-800">Materia Prima Disponible</h2>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cantidad</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unidad</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Precio Unitario</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {materiaPrima.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.cantidad}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.unidadMedida}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.precioUnitario}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">
                    <FiEdit />
                  </button>
                  <button 
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDelete(item.id)}
                  >
                    <FiTrash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MateriaPrima
