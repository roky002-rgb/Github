import React, { createContext, useContext, useState } from 'react';

// 1. Crear el contexto
// createContext() crea un objeto de contexto que permite compartir datos entre componentes
const MiContexto = createContext();

// 2. Definir el Provider
// El Provider es un componente que envuelve a otros componentes y les proporciona el valor del contexto
export const MiProvider = ({ children }) => {
  // Estado que queremos compartir
  const [contador, setContador] = useState(0);

  // Función para incrementar el contador
  const incrementar = () => {
    setContador(contador + 1);
  };

  // El valor que se comparte con los componentes hijos
  const valor = {
    contador,
    incrementar
  };

  // Renderizar el Provider con el valor
  return (
    <MiContexto.Provider value={valor}>
      {children}
    </MiContexto.Provider>
  );
};

// 3. Hook personalizado para consumir el contexto
// useContext(MiContexto) obtiene el valor del contexto más cercano
export const useMiContexto = () => {
  const contexto = useContext(MiContexto);
  if (!contexto) {
    throw new Error('useMiContexto debe usarse dentro de MiProvider');
  }
  return contexto;
};