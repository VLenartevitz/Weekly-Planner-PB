import { StyleBtn } from "./style";

interface Props{
    textButton: String;
    onClick: ()=>void;
    
}

const BtnLogin = ( props:Props ) =>{
    return (
        <StyleBtn onClick={props.onClick}>{props.textButton}</StyleBtn>
    );
};
export default BtnLogin;