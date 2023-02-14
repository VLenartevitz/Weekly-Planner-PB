import { PosiLogout,ImgLogout, TextoLogout, PosiImg } from "./style";
import arrowLogout from '../../imgs/arrowLogout.png';
import logoUolDashboard from '../../imgs/logoDashboard.png';
import { ImgUolPosiDash, ImgUolStyleDash } from './style';

const Logout = () =>{
    return(
        <PosiLogout>
            <ImgUolPosiDash>
                <ImgUolStyleDash  src={logoUolDashboard} alt='logo'/>
            </ImgUolPosiDash>

            <PosiImg>
                <ImgLogout src={arrowLogout} />
                <TextoLogout>Logout</TextoLogout>
            </PosiImg>
        </PosiLogout>
    );
};
export default Logout;