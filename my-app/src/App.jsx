import { useMiContexto } from './Context';

function App() {
  const { contador, incrementar } = useMiContexto();
  
  return (
    <MiProvider>
      <>
        <div>Contador: {contador}</div>
        <button onClick={incrementar}>Incrementar</button>
      </>
    </MiProvider>
  );
}
export default App 