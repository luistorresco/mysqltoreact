import React, { useState, useEffect } from 'react';

const App = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetchDataFromServer();
  }, []);

  const fetchDataFromServer = async () => {
    try {
      const response = await fetch('http://localhost:8180/datos');
      const data = await response.json();
      setDatos(data);
    } catch (error) {
      console.error('Error al obtener datos del servidor:', error);
    }
  };

  return (
    <div>
      <h1>Imprimir Base De Datos</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Comentario</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((dato) => (
            <tr key={dato.id}>
              <td>{dato.id}</td>
              <td>{dato.nombre}</td>
              <td>{dato.comentario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

};

export default App;