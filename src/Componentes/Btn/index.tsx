import { StyleBtn } from "./style";

interface Props{
    onClick: (e:any)=>void;
    textButton: String;
}

const Btn = ( props:Props ) =>{
    return (
        <StyleBtn onClick={props.onClick}>{props.textButton}</StyleBtn>
    );
};
export default Btn;