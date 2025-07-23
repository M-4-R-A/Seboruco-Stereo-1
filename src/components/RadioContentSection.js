import React from 'react';

const RadioContentSection = ({ title = 'Nuestros Programas Destacados', children = null }) => {
  return (
    <section className="container mx-auto py-16 px-4">
      <h3 className="text-4xl font-bold text-red-700 mb-10 text-center">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {children}
      </div>
    </section>
  );
};

export default RadioContentSection;