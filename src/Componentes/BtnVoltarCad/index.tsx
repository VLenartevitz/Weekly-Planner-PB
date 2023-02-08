import { Style } from "./style";
import {Link} from 'react-router-dom'

interface Props{
    textButton: String;
    path: Object;
    
}
const BtnVoltarCad =(props:Props)=>{
    return(
        <Link to={props.path}><Style>{props.textButton}</Style></Link>
    );
};
export default BtnVoltarCad;