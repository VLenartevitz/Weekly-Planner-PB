import { BrowserRouter , Route, Routes} from 'react-router-dom'
import Cadastro from '../../Pages/Cadastro';
import Login from '../../Pages/Login';
import Dashboard from '../../Pages/Dashboard';

const RoutesPG = () => {
    return (
        <BrowserRouter>
      <Routes>
      <Route path='/'  element={<Cadastro/>}/>
      </Routes>
      <Routes>
        <Route path='/Login'  element={<Login/>}/>
      </Routes>
      <Routes>
        <Route path='/Dashboard'  element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    );
};
export default RoutesPG;