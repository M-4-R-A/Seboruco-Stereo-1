import React from 'react';

const RadioProgramCard = ({ title = 'Programa', description = 'Descripción del programa.', imageUrl = 'https://via.placeholder.com/400x250' }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h4 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 text-base">{description}</p>
        <button className="mt-4 text-black font-semibold hover:underline transition-colors">
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default RadioProgramCard;