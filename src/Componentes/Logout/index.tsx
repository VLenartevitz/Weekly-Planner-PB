import { PosiLogout,ImgLogout, TextoLogout, PosiImg } from "./style";
import arrowLogout from '../../imgs/arrowLogout.png';
import logoUolDashboard from '../../imgs/logoDashboard.png';
import { ImgUolPosiDash, ImgUolStyleDash } from './style';
import { useContext } from "react";
import { AuthContext } from "../../Context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";


const Logout = () =>{
    const auth = useContext(AuthContext)
    const navigate = useNavigate();

    const handleLogout = async () =>{
        await auth.signout();
        navigate('/Login')
    }
    return(
        <PosiLogout>
            <ImgUolPosiDash>
                <ImgUolStyleDash  src={logoUolDashboard} alt='logo'/>
            </ImgUolPosiDash>

            <PosiImg  >
                <ImgLogout src={arrowLogout} />
                { auth.user &&<TextoLogout  onClick={handleLogout}>Logout</TextoLogout>}
            </PosiImg>
        </PosiLogout>
    );
};
export default Logout;