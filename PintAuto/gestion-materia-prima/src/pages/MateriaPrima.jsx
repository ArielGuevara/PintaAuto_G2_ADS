import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiEdit, FiTrash2 } from 'react-icons/fi'

// Datos de ejemplo (en un caso real, estos vendrían de una API)
const materiaPrimaData = [
  { id: 1, nombre: 'Printura', cantidad: 50, unidad: 'litros', fechaIngreso: '2023-05-10' },
  { id: 2, nombre: 'Ligas', cantidad: 30, unidad: 'unidades', fechaIngreso: '2023-05-12' },
  { id: 3, nombre: 'Tiñer', cantidad: 120, unidad: 'litros', fechaIngreso: '2023-05-15' },
  { id: 4, nombre: 'Barniz', cantidad: 20, unidad: 'litros', fechaIngreso: '2023-05-14' },
]

const MateriaPrima = () => {
  const [materiaPrima, setMateriaPrima] = useState(materiaPrimaData)
  const navigate = useNavigate()

  const handleDelete = (id) => {
    setMateriaPrima(materiaPrima.filter(item => item.id !== id))
  }

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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha de Ingreso</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {materiaPrima.map((item) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.cantidad}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.unidad}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.fechaIngreso}</td>
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
