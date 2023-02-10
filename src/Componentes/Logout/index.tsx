import { PosiLogout,ImgLogout, TextoLogout } from "./style";
import arrowLogout from '../../imgs/arrowLogout.png';

const Logout = () =>{
    return(
        <>
        <PosiLogout>
            <ImgLogout src={arrowLogout} ></ImgLogout>
            <TextoLogout>Logout</TextoLogout>
        </PosiLogout>
        </>
    );
};
export default Logout;