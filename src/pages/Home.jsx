import React from 'react';
import { Link } from 'react-router-dom';
import Tareas from '../componet/Tareas';

function Home({ loggedIn, logout }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {loggedIn ? (
        <div>
          <h1 className="text-4xl font-bold mb-4">Tus Tareas</h1>
          <Tareas />
        </div>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Página de Inicio</h1>
          <Link to="/login" className="block bg-blue-500 text-white rounded-md py-2 px-4 mx-auto hover:bg-blue-600 transition duration-300 ease-in-out">
            Iniciar Sesión
          </Link>
        </div>
      )}
    </div>
  );
}

export default Home;
