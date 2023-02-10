import imgSenha from '../../imgs/imgSenha.svg'
import { TamIcone } from './style';

interface Props {
    movimentoxsenha: boolean;
    
}
const IconeSenha = (props: Props) =>{
    return (
        <TamIcone src={imgSenha} movimentosenha={props.movimentoxsenha} />
    );
}
export default IconeSenha;