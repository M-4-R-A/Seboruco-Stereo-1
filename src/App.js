import React, { useState } from 'react';
import RadioHeader from './components/RadioHeader';
import RadioPlayer from './components/RadioPlayer';
import RadioHeroSection from './components/RadioHeroSection';
import RadioContentSection from './components/RadioContentSection';
import RadioProgramCard from './components/RadioProgramCard';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // Para manejar la navegación

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-red-50 font-sans antialiased">
      <RadioHeader />
      
      <main className="pt-20 pb-24"> {/* Padding para evitar que el header y player cubran contenido */}
        {currentPage === 'home' && (
          <>
            <RadioHeroSection />
            <RadioContentSection>
              <RadioProgramCard
                title="Mañanas Activas"
                description="Despierta con la mejor energía y las noticias más relevantes del día."
                imageUrl="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <RadioProgramCard
                title="Noches de Jazz"
                description="Relájate con una selección exquisita de jazz clásico y contemporáneo."
                imageUrl="https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <RadioProgramCard
                title="Rock Clásico"
                description="Un viaje por los grandes éxitos que definieron una era."
                imageUrl="https://images.unsplash.com/photo-1487180144351-b8472825d423?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </RadioContentSection>
          </>
        )}
        {/* Aquí se podrían añadir más secciones o páginas según la navegación */}
      </main>

      <RadioPlayer />
    </div>
  );
};

export default App;