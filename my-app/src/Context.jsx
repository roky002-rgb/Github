import React, { createContext, useContext, useState } from 'react';

const MiContexto = createContext();

  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  const valor = {
    contador,
    incrementar
  };

  return (
    <MiContexto.Provider value={valor} incrementar={incrementar}>
      {children}
    </MiContexto.Provider>
  );
