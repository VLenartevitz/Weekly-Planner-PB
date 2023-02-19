import { BrowserRouter , Route, Routes} from 'react-router-dom'
import Cadastro from '../../Pages/Cadastro';
import Login from '../../Pages/Login';
import Dashboard from '../../Pages/Dashboard';
import { RequireAuth } from '../../Context/Auth/RequireAuth';

const RoutesPG = () => {
    return (
        <BrowserRouter>
      <Routes>
      <Route path="/"  element={<Cadastro/>}/>
      
        <Route path='/Login'  element={<Login/>}/>
      
        <Route path='/Dashboard'  element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
    );
};
export default RoutesPG;