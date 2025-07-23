import React from 'react';

const RadioHeroSection = ({ title = 'Sintoniza la Mejor Música', description = 'Disfruta de una experiencia auditiva inigualable con nuestra programación exclusiva.' }) => {
  return (
    <section className="relative w-full h-96 bg-gradient-to-br from-red-700 to-orange-500 flex items-center justify-center text-center overflow-hidden rounded-b-3xl shadow-xl">
      <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1514525253164-ff4ade55778d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
      <div className="relative z-10 p-6 max-w-3xl">
        <h2 className="text-5xl font-extrabold text-white mb-4 leading-tight">{title}</h2>
        <p className="text-xl text-red-100">{description}</p>
        <button className="mt-8 px-8 py-3 bg-white text-red-700 font-bold rounded-full shadow-lg hover:bg-red-100 transition-all duration-300 transform hover:scale-105">
          Escuchar Ahora
        </button>
      </div>
    </section>
  );
};

export default RadioHeroSection;