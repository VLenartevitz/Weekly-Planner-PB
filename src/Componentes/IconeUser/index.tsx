import imgUser from '../../imgs/imgUser.svg'
import { TamIcone } from './style';

interface Props {
    movimentoxuser: boolean;
}

const IconeUser = (props: Props) =>{
    return (
        <TamIcone src={imgUser} movimentouser={props.movimentoxuser} /> 
    );
}
export default IconeUser;