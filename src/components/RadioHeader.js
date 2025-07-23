import React from 'react';

const RadioHeader = ({ title = 'Seboruco Stereo', subtitle = 'La Voz de la Montaña' }) => {
  return (
    <header className="w-full bg-gradient-to-r from-red-700 to-orange-500 p-4 shadow-lg fixed top-0 z-10 border-b border-red-800">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          <p className="text-sm text-red-100">{subtitle}</p>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-white hover:text-red-200 transition-colors text-lg font-medium">Inicio</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-200 transition-colors text-lg font-medium">Programas</a>
            </li>
            <li>
              <a href="#" className="text-white hover:text-red-200 transition-colors text-lg font-medium">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default RadioHeader;