import RoutesPG from './Componentes/Routes';
import { AuthProvider } from './Context/Auth/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <RoutesPG></RoutesPG>
    </AuthProvider>
  );
}

export default App;
